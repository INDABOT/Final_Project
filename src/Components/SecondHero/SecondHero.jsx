/* eslint-disable react/no-unescaped-entities */
import styles from "./SecondHero.module.css";
import shoe_1 from "../../assets/shoe-1.svg";
import shoe_2 from "../../assets/shoe-2.svg";
import shoe_3 from "../../assets/shoe-3.svg";
import shoe_4 from "../../assets/shoe-4.svg";
import vector from "../../assets/Vector.svg";
import Black from "../../assets/black_shoe.svg";

const BestSeller = () => {
  return (
    <>
    <div className={styles.second_Container}>
      <div className={styles.H_Container}>
        <h2>Explore Our New Collection</h2>
        <p>
          Discover our latest arrivals featuring the freshest designs and
          cutting-edge styles. Elevate your sneaker game with our new
          collection, crafted for comfort and built for performance
        </p>
      </div>

      <div className={styles.display_Section}>
        {/* <img className={styles.heart} src={heart} alt="" /> */}
        <div className={styles.display_left}>
          <a href="/ItemDescription"><img src={shoe_1} alt="" /></a>
          <img src={shoe_3} alt="" />
        </div>

        <div className={styles.display_right}>
          <img src={shoe_2} alt="" />
          <img src={shoe_4} alt="" />
        </div>
      </div>

      <div className={styles.page_Number}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span><img src={vector} alt="" /></span>
      </div>


      

    </div>

    <div className={styles.advantage}>
        <div className={styles.take}>
          <div className={styles.left}>
            <h4>Take advantage of the  <br />ongoing ‘Buy one Get <br /> One free’</h4>
            <p>Don't miss out on our incredible 'Buy One, Get One Free' offer! <br /> Double your style and savings with this limited-time deal</p>
            <button>Buy Now</button>

          </div>

          <div className={styles.right}>
            <img src={Black} alt="" />
            
          </div>

        </div>
      </div>
    </>
  );
};

export default BestSeller;
