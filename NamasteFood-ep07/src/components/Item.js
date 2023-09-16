const Item = ({ item, isVeg, isBestseller, price, description, imageId }) => {
  return (
    <div className="menu-card">
      <div className="res-menu">
        {isVeg && (
          <p>
            🟢{isBestseller && <span className="bestSeller">⭐Bestseller</span>}
          </p>
        )}
        {!isVeg && (
          <p>
            🔴{isBestseller && <span className="bestSeller">⭐Bestseller</span>}
          </p>
        )}
        <li className="menu-item">
          <p>{item}</p>
        </li>
        <p className="item-price">₹{price}</p>
        <p className="item-description">{description}</p>
      </div>
      <div className="res-menu-add">
        <img
          className="item-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imageId
          }
          width={150}
          alt="item-logo"
        />
        <button className="add-item">ADD</button>
      </div>
    </div>
  );
};
export default Item;
