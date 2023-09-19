const Dish = ({ dish }) => {
  return (
    <div className="dish">
      <img
        className="dish-img"
        src={dish.url}
        alt={dish.name}
        width={130}
        height={130}
      />
      <p>{dish.name}</p>
    </div>
  );
};
export default Dish;
