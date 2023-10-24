import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  function handleLogin() {
    if (btnName === "Login") setBtnName("Logout");
    else setBtnName("Login");
  }
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);

  return (
    <div className="flex justify-between items-center sticky top-0 z-10 bg-custom ">
      <div>
        <Link to="/">
          <img className="w-24 ml-2" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex justify-center items-center m-4 [&>li]:px-4 [&>li]:py-2">
          <li style={{ fontWeight: "bold" }}>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link className="hover:text-red-200" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-200" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-200" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-200" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-200" to="/cart">
              Cart
            </Link>
          </li>
          <button
            className="px-4 py-2 bg-orange-200 rounded-lg hover:bg-red-200"
            onClick={handleLogin}
          >
            {btnName}
          </button>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
