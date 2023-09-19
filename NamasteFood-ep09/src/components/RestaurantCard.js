import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="card">
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="card"
        />
      </div>
      <h3>{name}</h3>
      <p>{cuisines.slice(0, 2).join(", ")} . . .</p>
      <h4>{avgRating}✡️</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
