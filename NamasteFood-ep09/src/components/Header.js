import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  function handleLogin() {
    if (btnName === "Login") setBtnName("Logout");
    else setBtnName("Login");
  }
  const onlineStatus = useOnlineStatus();
  return (
    <div className="Header">
      <div>
        <Link to="/">
          <img className="Logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="Nav-items">
        <ul>
          <li style={{ fontWeight: "bold" }}>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login" onClick={handleLogin}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
