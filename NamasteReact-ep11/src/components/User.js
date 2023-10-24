import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  useEffect(() => {
    //API CALLS
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("useEffect called");

    //This fn will be called when the component is unmounted
    //works same as componentWillUnmount
    return () => {
      // clearInterval(this.timer);
      clearInterval(timer);
      console.log("useEffrct return");
    };
  }, []);
  console.log("render");
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
