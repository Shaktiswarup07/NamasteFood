import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Dishes } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dish from "./Dish";
import useOnlineStatus from "../utils/useOnlineStatus";
// let LOR;
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

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
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <div className="offline">
        <h1>Unable to connect to the internet!</h1>
        <p>Looks like your internet ditched you!</p>
        <p>Check your connection and try again.</p>
      </div>
    );
  if (ListOfRestaurants?.length === 0) return <Shimmer />;
  return (
    <div className="body">
      <div className="filter p-4 my-4">
        <p className="font-semibold text-4xl my-3">Eat what makes you happy</p>
        <div className="dishes flex gap-20 flex-nowrap overflow-auto mb-8">
          {Dishes?.map((dish, i) => {
            return <Dish key={i} dish={dish} />;
          })}
        </div>
        <div className="flex justify-start">
          <button
            className="rounded-full bg-black text-white py-3 px-4 shadow-xl"
            onClick={findTopRestro}
          >
            Find Top Rated Restaurants
          </button>
          <div className="Search">
            <input
              className=" bg-custom p-4 mx-3 rounded-full shadow-2xl border-black border-2"
              type="text"
              placeholder="Search restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="rounded-full bg-black text-white py-3 px-4 shadow-xl"
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
      <div className="flex justify-around flex-wrap bg-[#F2F1E3] ">
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
