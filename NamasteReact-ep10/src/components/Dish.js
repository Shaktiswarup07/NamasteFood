const Dish = ({ dish }) => {
  return (
    <div className=" flex flex-col items-center">
      <img
        className="dish-img max-w-none"
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
