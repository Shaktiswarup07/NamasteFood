import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Item from "./Item";
import Offer from "./Offer";
import { MENU_API } from "../utils/constants";
let p = 1;

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [vegOnly, setVegOnly] = useState(false); // [false, () => {}
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements.infoWithStyle;
  //   console.log(offers);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="Restaurant">
      <div className="res-header">
        <div className="res-info">
          <h2>{name}</h2>
          <p>{cuisines.toString()}</p>
          <p>{`${areaName}, ${resInfo?.cards[0]?.card?.card?.info.sla.lastMileTravelString}`}</p>
        </div>
        <div className="res-rating">
          <p className="avgRating">{avgRating}✡️</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="Restaurant2">
        <p className="costForTwo">{costForTwoMessage}</p>
        <div className="offers">
          {offers?.map((offer, i) => {
            return (
              <Offer
                key={p++}
                discount={offer.info.header}
                couponCode={offer.info.couponCode}
                description={offer.info.description}
                offerLogo={offer.info.offerLogo}
              />
            );
          })}
        </div>
        <div className="vegForm">
          <label htmlFor="Veg-only">Veg only </label>
          <input
            type="checkbox"
            name="Veg-only"
            id="Veg-only"
            checked={vegOnly}
            onChange={() => {
              //   console.log(vegOnly);
              setVegOnly(!vegOnly);
            }}
          />
        </div>
      </div>
      <ul className="res-menu-items">
        {itemCards?.map((item, i) => {
          if (vegOnly === true && item.card.info.isVeg === 1)
            return (
              <Item
                item={item.card.info.name}
                isVeg={item.card.info.isVeg}
                isBestseller={item.card.info.isBestseller}
                price={
                  (item.card.info.price || item.card.info.defaultPrice) / 100
                }
                description={item.card.info.description}
                imageId={item.card.info.imageId}
                key={item.card.info.id}
              />
            );
          else if (vegOnly === false)
            return (
              <Item
                item={item.card.info.name}
                isVeg={item.card.info.isVeg}
                isBestseller={item.card.info.isBestseller}
                price={
                  (item.card.info.price || item.card.info.defaultPrice) / 100
                }
                description={item.card.info.description}
                imageId={item.card.info.imageId}
                key={item.card.info.id}
              />
            );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
