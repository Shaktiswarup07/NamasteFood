import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Dishes } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Dish = ({ dish }) => {
  return (
    <div className="dish">
      <img
        className="dish-img"
        src={dish.url}
        alt={dish.name}
        width={130}
        height={130}
      />
      <p>{dish.name}</p>
    </div>
  );
};
// let LOR;
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  useEffect(() => {
    console.log("useEff called");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  function findTopRestro() {
    //filter logic here
    setFilteredListOfRestaurants(
      ListOfRestaurants?.filter((res) => res.info.avgRating > 4)
    );
  }
  if (ListOfRestaurants?.length === 0) return <Shimmer />;
  return (
    <div className="body">
      <div className="filter">
        <p style={{ fontSize: "30px" }}>Inspiration for your first order</p>
        <div className="dishes">
          {Dishes?.map((dish, i) => {
            return <Dish key={i} dish={dish} />;
          })}
        </div>
        <div className="filter-search">
          <button className="filter-btn" onClick={findTopRestro}>
            Find Top Rated Restaurants
          </button>
          <div className="Search">
            <input
              type="text"
              placeholder="Search restaurants🔍"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => {
                //filter the restaurant cards based on the search and update the UI
                //searchText
                // console.log(LOR);
                const updatedListOfRestaurants = ListOfRestaurants?.filter(
                  (res) => {
                    return res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  }
                );
                setFilteredListOfRestaurants(updatedListOfRestaurants);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="Res-container">
        {filteredListOfRestaurants?.map((res) => (
          <Link
            style={{ textDecoration: "none" }}
            to={"/restaurants/" + res.info.id}
            key={res.info.id}
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
