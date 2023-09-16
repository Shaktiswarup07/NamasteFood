const Offer = ({ discount, couponCode, description, offerLogo }) => {
  return (
    <div className="offer">
      <div className="offer-top">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/" +
            offerLogo
          }
          width={20}
          height={20}
        />
        <p>{discount}</p>
      </div>
      <div className="offer-bottom">
        <p>{couponCode}</p>
        <p> | </p>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Offer;
