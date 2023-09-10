import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
