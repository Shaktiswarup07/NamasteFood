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
    <div className="my-8 mx-4 w-[208px] rounded-xl shadow-xl pb-4 hover:bg-[#ECEAD5]">
      <div
        className="w-full h-[150px] border-none rounded-xl overflow-hidden"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <img
          className="w-full mx-auto bg-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="card"
        />
      </div>
      <div className="px-2 mt-2">
        <h3 className="font-bold text-lg my-2">
          {name.slice(0, 14)}
          {name.length > 14 ? "..." : ""}
        </h3>
        <p>{cuisines.slice(0, 2).join(", ")}...</p>
        <p>{avgRating}✡️</p>
        <p>{costForTwo}</p>
        <p>{resData.info.sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
