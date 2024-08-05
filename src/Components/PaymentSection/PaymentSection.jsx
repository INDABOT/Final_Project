import styles from "./PaymentSection.module.css";
import C1 from "../../assets/C1.svg";
import visa from "../../assets/visa.svg";
import master from "../../assets/master.svg";
import zip from "../../assets/zip.svg";

const PaymentSection = () => {
  return (
    <div className={styles.PaymentSection}>
      <div className={styles.payment_left}>
        <div className={styles.top}>
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
        <div className={styles.bottom}>
          <h5>Delivery details</h5>

          <div className={styles.name_field}>
            <label className={styles.labelText} htmlFor="firstName">
              First Name*
              <input
                placeholder="Enter here"
                type="text"
                name="firstName"
                id="firstName"
              />
            </label>

            <label className={styles.labelText} htmlFor="lastName">
              {" "}
              Last Name*
              <input
                placeholder="Enter here"
                type="text"
                name="lastName"
                id="lastName"
              />
            </label>
          </div>

          <div className={styles.address}>
            <label className={styles.labelText} htmlFor="address">
              Address*
              <input
                placeholder="Enter here"
                type="text"
                name="address"
                id="address"
              />
            </label>
          </div>

          <div className={styles.name_field}>
            <label className={styles.labelText} htmlFor="city">
              City*
              <input
                placeholder="Enter here"
                type="text"
                name="city"
                id="city"
              />
            </label>

            <label className={styles.labelText} htmlFor="country">
              Country*
              <input
                placeholder="Enter here"
                type="text"
                name="country"
                id="country"
              />
            </label>
          </div>

          <div className={styles.name_field}>
            <label className={styles.labelText} htmlFor="emailAddress">
              Email address*
              <input
                placeholder="Enter here"
                type="text"
                name="emailAddress"
                id="emailAddress"
              />
            </label>

            <label className={styles.labelText} htmlFor="phoneNumber">
              Phone number*
              <input
                placeholder="Enter here"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
              />
            </label>
          </div>
        </div>
      </div>

      <div className={styles.payment_right}>
        <div className={styles.top}>
          <h5>Payment details</h5>

          <div className={styles.method}>
            <label className={styles.Rlabel} htmlFor="payPal">
              <input type="radio" name="payPal" id="payPal" />
              Paypal
            </label>

            <label className={styles.Rlabel} htmlFor="googlePay">
              <input type="radio" name="googlePay" id="googlePay" />
              Google pay
            </label>

            <label className={styles.Rlabel} htmlFor="afterPay">
              <input type="radio" name="afterPay" id="afterPay" />
              After pay
            </label>

            <label className={styles.Rlabel} htmlFor="debitCredit">
              <input type="radio" name="debitCredit" id="debitCredit" />
              Debit or credit card
            </label>

            <div className={styles.cardImages}>
              <img src={visa} alt="" />
              <img src={master} alt="" />
              <img src={zip} alt="" />
            </div>

            <label className={styles.labelText} htmlFor="address">
              Address*
              <input
                className={styles.input}
                placeholder="Enter here"
                type="text"
                name="address"
                id="address"
              />
            </label>

            <label className={styles.labelText} htmlFor="cardholderName">
              Card holder's name*
              <input
                className={styles.input}
                placeholder="Enter here"
                type="text"
                name="cardholderName"
                id="cardholderName"
              />
            </label>

            <label className={styles.labelText} htmlFor="cardNumber">
              Card Number*
              <input
                className={styles.input}
                placeholder="4676 89****90 3421"
                type="text"
                name="cardNumber"
                id="cardNumber"
              />
            </label>
          </div>

          <div className={styles.expiry_field}>
            <label className={styles.labelText} htmlFor="firstName">
              Expiry date*
              <input
                placeholder="09/20"
                type="text"
                name="firstName"
                id="firstName"
              />
            </label>

            <label className={styles.labelText} htmlFor="lastName">
              CVV*
              <input
                placeholder="000"
                type="text"
                name="lastName"
                id="lastName"
              />
            </label>
          </div>
        </div>

        <div className={styles.bottom}>
            <h5>Order Summary</h5>


            <table>
                <tr>
                    <td>Sub Total</td>
                    <td>$855.00</td>
                </tr>
                <tr>
                    <td>Delivery Fee</td>
                    <td>$53.00</td>
                </tr>
                <tr className={styles.Total}>
                    <td>Total</td>
                    <td>$907.00</td>
                </tr>
            </table>

            <button>Pay $900.00</button>
        </div>

        <div className={styles.terms}>
            <span>By proceeding, you are automatically accepting the</span>
            <small>Terms & Conditions</small>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
