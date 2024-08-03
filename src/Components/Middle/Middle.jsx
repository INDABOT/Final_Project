import styles from "./Middle.module.css";
import Nova from "../../assets/circum_delivery-truck.svg";
import Call from "../../assets/call-centre-outline.svg";
import discount from "../../assets/discount.svg";
const Collections = () => {
  return (
    <div className={styles.Collections}>

      <div className={styles.Outer}>

        <div className={styles.services}>
          <div className={styles.Delivery}>
            <img src={Nova} alt="" />
            <div className={styles.writeUp}>
              <h4>Free Delivery</h4>
              <small>On every order over $100</small>
            </div>
          </div>
        </div>


        <div className={styles.services}>
          <div className={styles.Delivery}>
            <img src={Call} alt="" />
            <div className={styles.writeUp}>
              <h4>Online Support</h4>
              <small>A 24hours customer care</small>
            </div>
          </div>
        </div>

        <div className={styles.services}>
          <div className={styles.Delivery}>
            <img src={discount} alt="" />
            <div className={styles.writeUp}>
              <h4>Discounted Sale</h4>
              <small>20% discount off sales above $250</small>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Collections;
