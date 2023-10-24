import Item from "./Item";
const ItemList = ({ itemCards }) => {
  return (
    <div>
      <ul className="res-menu-items">
        {itemCards?.map((item) => {
          return (
            <Item
              item={item.card.info.name}
              isVeg={item.card.info.isVeg}
              isBestseller={item.card.info.isBestseller}
              price={
                (item.card.info.price || item.card.info.defaultPrice) / 100
              }
              description={item.card.info.description}
              imageId={item.card.info.imageId}
              key={item.card.info.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ItemList;
