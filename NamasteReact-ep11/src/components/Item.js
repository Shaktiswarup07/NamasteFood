const Item = ({ item, isVeg, isBestseller, price, description, imageId }) => {
  return (
    <div className="menu-card flex py-5 border-b border-gray-300">
      <div className="res-menu basis-4/5">
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
          <p className="font-medium">{item}</p>
        </li>
        <p className="item-price py-2">₹{price}</p>
        <p className="item-description text-gray-500 text-sm">{description}</p>
      </div>
      <div className="res-menu-add ">
        {imageId && (
          <img
            className="item-logo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
              imageId
            }
            width={150}
            alt="item-logo"
          />
        )}
        {imageId ? (
          <button className="add-item relative cursor-pointer bottom-16 left-14 bg-black p-2 rounded-xl w-20  text-white font-medium">
            ADD
          </button>
        ) : (
          <button className="cursor-pointer  bg-black p-2 rounded-xl w-20 border text-white font-medium">
            ADD
          </button>
        )}
      </div>
    </div>
  );
};
export default Item;
