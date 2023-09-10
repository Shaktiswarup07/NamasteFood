import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [LOR, setLOR] = useState(resList);
  function findTopRestro() {
    //filter logic here
    setLOR((prevLOR) => prevLOR.filter((res) => res.info.avgRating > 4));
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={findTopRestro}>
          Find Top Rated Restaurants
        </button>
      </div>
      <div className="Res-container">
        {/* <RestaurantCard
            resName="Meghana Foods"
            cuisine="Biryani, North Indian, Asian"
            imgURL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"
          />*/}
        {LOR.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
