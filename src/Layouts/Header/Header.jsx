import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/Component 4.svg";
import profile from "../../assets/profileImg.svg";
const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.logo_container}>
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Sales</a>
        </li>
        <li>
          <a href="#">Delivery</a>
        </li>
        <li>
          <a href="#">Why us</a>
        </li>
      </ul>

      <div className={styles.searchBox}>
        <input type="text" placeholder="search" />
      </div>

      <div className={styles.Cart_Box}>
        <img src={cart} alt="" />
        <img className={styles.profile} src={profile} alt="" />
      </div>
      
    </div>
  );
};

export default Header;
