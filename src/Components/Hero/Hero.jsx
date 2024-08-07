/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.css";
import HeroImg from "../../assets/HeroImg.svg";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.Text_Area}>
        <h1>
          {" "}
          Discover <br /> your perfect <br className={styles.hide} /><span>sneakers</span> here
        </h1>

        <p>
          Explore the latest trends and timeless classics in sneakers, all in
          one place: from casual kicks to high-performance athletic shoes. We've
          got your feet covered
        </p>

        <button className={styles.Button}>Explore now</button>
      </div>
      <div className={styles.hero_Img}>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
