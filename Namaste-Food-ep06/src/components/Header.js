import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  function handleLogin() {
    if (btnName === "Login") setBtnName("Logout");
    else setBtnName("Login");
  }
  return (
    <div className="Header">
      <div>
        <img className="Logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login" onClick={handleLogin}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
