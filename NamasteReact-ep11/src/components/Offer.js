const Offer = ({ discount, couponCode, description, offerLogo }) => {
  return (
    <div className="offer flex-col border-gray-200 rounded-lg p-2 border-2">
      <div className="offer-top flex font-bold gap-0 ">
        <img
          className="w-5 h-5"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/" +
            offerLogo
          }
          width={20}
          height={20}
        />
        <p>{discount}</p>
      </div>
      <div className="offer-bottom flex text-gray-400 font-medium">
        <p>{couponCode}</p>
        <p> | </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Offer;
