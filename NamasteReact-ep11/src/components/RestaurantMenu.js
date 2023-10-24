import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Item from "./Item";
import Offer from "./Offer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
let p = 1;

const RestaurantMenu = () => {
  // const [vegOnly, setVegOnly] = useState(false); // [false, () => {}
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();
  //separation of concerns
  //custom hook
  //A good way of writing code
  const resInfo = useRestaurantMenu(resId);

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

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="Restaurant px-24 py-10">
      <div className="res-header flex justify-between border-b ">
        <div className="res-info">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="py-2 text-gray-500">{cuisines.toString()}</p>
          <p className="pb-2 text-gray-500">{`${areaName}, ${resInfo?.cards[0]?.card?.card?.info.sla.lastMileTravelString}`}</p>
        </div>
        <div className="res-rating  my-2 p-1  font-semibold text-green-700">
          <p className="avgRating text-center border-b mb-1">{avgRating}✡️</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="Restaurant2 ">
        <p className="costForTwo py-4 font-semibold">{costForTwoMessage}</p>
        <div className="offers flex gap-5 max-w-none flex-nowrap overflow-auto mb-6 py-4 rounded-lg">
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
        {/* <div className="vegForm flex gap-3 font-bold pb-6 border-b">
          <label htmlFor="Veg-only">Veg only </label>
          <input
            className="cursor-pointer w-5 "
            type="checkbox"
            name="Veg-only"
            id="Veg-only"
            checked={vegOnly}
            onChange={() => {
              //   console.log(vegOnly);
              setVegOnly(!vegOnly);
            }}
          />
        </div> */}
      </div>

      {/**Accorrdion logic here*/}
      {categories?.map((category, idx) => {
        return (
          <RestaurantCategory
            show={idx === showIndex ? true : false}
            key={category.card.card.title}
            data={category.card.card}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
            index={idx}
          />
        );
      })}

      {/* <ul className="res-menu-items">
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
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
