import styles from "./CartItems.module.css";
import C1 from "../../assets/C1.svg";
import C2 from "../../assets/C2.svg";
import C3 from "../../assets/C3.svg";

import visa from "../../assets/visa.svg";
import master from "../../assets/master.svg";
import paypal from "../../assets/paypal.svg";
import applePay from "../../assets/applePay.svg";
import Gpay from "../../assets/Gpay.svg";
import afterPay from "../../assets/afterPay.svg";
import zip from "../../assets/zip.svg";

import { useState } from "react";

const CartItems = () => {
  const [quantity, setquantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setquantity(quantity + 1);
  };

  return (
    <>
      <div className={styles.CartItems_container}>
        <div className={styles.product_side}>
          <hr />
          <div className={styles.C_Image}>
            <img src={C1} alt="" />
            <div className={styles.info}>
              <h6>Puma and Lamelo sneakers</h6>
              <p>Size:45, Colour: Pink</p>
            </div>
          </div>



          <hr />
          <div className={styles.C_Image}>
            <img src={C1} alt="" />
            <div className={styles.info}>
              <h6>Puma and Lamelo sneakers</h6>
              <p>Size:45, Colour: Pink</p>
            </div>
          </div>



          <hr />
          <div className={styles.C_Image}>
            <img src={C1} alt="" />
            <div className={styles.info}>
              <h6>Puma and Lamelo sneakers</h6>
              <p>Size:45, Colour: Pink</p>
            </div>
          </div>



          <hr />
          <div className={styles.C_Image}>
            <img src={C1} alt="" />
            <div className={styles.info}>
              <h6>Puma and Lamelo sneakers</h6>
              <p>Size:45, Colour: Pink</p>
            </div>
          </div>
        </div>

        <div className={styles.payment_side}>
          <div className={styles.order_summary}>
            <h6>Order Summary</h6>
            <div className={styles.total}>
              <span>Sub Total</span>
              <span>$725.00</span>
            </div>
            <button>Checkout now</button>
          </div>

          <div className={styles.CardsAccepted}>
            <h6>We accept</h6>
            <div className={styles.banks}>
              <img src={visa} alt="" />
              <img src={master} alt="" />
              <img src={paypal} alt="" />
              <img src={applePay} alt="" />
              <img src={Gpay} alt="" />
              <img src={afterPay} alt="" />
              <img src={zip} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.suggestions}>
        <h5>We think you’ll like these</h5>
      </div>
    </>
  );
};

export default CartItems;
