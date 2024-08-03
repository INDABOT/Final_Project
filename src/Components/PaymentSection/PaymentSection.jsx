import styles from "./PaymentSection.module.css";
import C1 from "../../assets/C1.svg";

const PaymentSection = () => {
  return (
    <div className={styles.PaymentSection}>
      <div className={styles.payment_left}>
        <h5>Review Product</h5>
        <div className={styles.C_Image}>
          <img src={C1} alt="" />
          <div className={styles.info}>
            <h6>Puma and Lamelo sneakers</h6>
            <p>Size:45, Colour: Pink</p>
          </div>
        </div>

        <div className={styles.C_Image}>
          <img src={C1} alt="" />
          <div className={styles.info}>
            <h6>Puma and Lamelo sneakers</h6>
            <p>Size:45, Colour: Pink</p>
          </div>
        </div>


        <div className={styles.C_Image}>
          <img src={C1} alt="" />
          <div className={styles.info}>
            <h6>Puma and Lamelo sneakers</h6>
            <p>Size:45, Colour: Pink</p>
          </div>
        </div>
      </div>

      <div className={styles.payment_right}></div>
    </div>
  );
};

export default PaymentSection;
