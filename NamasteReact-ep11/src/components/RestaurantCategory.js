import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, show, showIndex, setShowIndex, index }) => {
  // const [show, setShow] = useState(false);
  const on = showIndex === index;
  // console.log(on, index);
  const handleClick = () => {
    if (on) setShowIndex(null);
    else setShowIndex(index);
  };
  return (
    <div>
      {/* {Header} */}
      <div className="py-5 my-2 shadow-lg border-b-8  px-2 border-orange-50 rounded-lg">
        <div
          className="flex justify-between py-3  cursor-pointer"
          onClick={handleClick}
        >
          <div className="font-bold text-base">
            {data.title + " (" + data.itemCards.length + ")"}
          </div>
          {!show && <div className="text-lg">+</div>}
          {show && <div className="text-lg">-</div>}
        </div>
        {show && <ItemList itemCards={data.itemCards} />}
      </div>
      {/* {Accordion Body} */}
    </div>
  );
};
export default RestaurantCategory;
