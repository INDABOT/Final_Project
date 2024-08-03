/* eslint-disable react/no-unescaped-entities */
import Dimage from "../../assets/DImage.svg";
import styles from "./Details.module.css";
import star from "../../assets/star.svg";

const Details = () => {
  return (
    <>
      <div className={styles.details_Container}>
        <div className={styles.left}>
          <img src={Dimage} alt="" />
          <p className={styles.review}>Reviews</p>

          <div className={styles.review_box}>
            <p>Okanu Chinonso</p>
            <div className={styles.days}>
              <img src={star} alt="" /> <small>3days ago</small>
            </div>
            <span>
              I recently purchased a pair of running shoes from this site, the
              sneakers are incredibly comfortable. The delivery was fast, and
              the customer service was outstanding. Highly recommend!
            </span>
          </div>

          <div className={styles.review_box}>
            <p>Okanu Chinonso</p>
            <div className={styles.days}>
              <img src={star} alt="" /> <small>3days ago</small>
            </div>
            <span>
              I recently purchased a pair of running shoes from this site, the
              sneakers are incredibly comfortable. The delivery was fast, and
              the customer service was outstanding. Highly recommend!
            </span>
          </div>

          <div className={styles.review_box}>
            <p>Okanu Chinonso</p>
            <div className={styles.days}>
              <img src={star} alt="" /> <small>3days ago</small>
            </div>
            <span>
              I recently purchased a pair of running shoes from this site, the
              sneakers are incredibly comfortable. The delivery was fast, and
              the customer service was outstanding. Highly recommend!
            </span>
          </div>

          <div className={styles.review_box}>
            <p>Okanu Chinonso</p>
            <div className={styles.days}>
              <img src={star} alt="" /> <small>3days ago</small>
            </div>
            <span>
              I recently purchased a pair of running shoes from this site, the
              sneakers are incredibly comfortable. The delivery was fast, and
              the customer service was outstanding. Highly recommend!
            </span>
          </div>

          <div className={styles.review_box}>
            <p>Okanu Chinonso</p>
            <div className={styles.days}>
              <img src={star} alt="" /> <small>3days ago</small>
            </div>
            <span>
              I recently purchased a pair of running shoes from this site, the
              sneakers are incredibly comfortable. The delivery was fast, and
              the customer service was outstanding. Highly recommend!
            </span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.container_top}>
            <h5>Nike G.T. Hustle 3 Blueprint</h5>
            <img src={star} alt="" />
            <span>$280.00</span>
          </div>

          <div className={styles.sizes}>
            <span>Sizes</span>
            <div className={styles.numbers}>
              <a href="">
                <button>40</button>
              </a>
              <a href="">
                <button>41</button>
              </a>
              <a href="">
                <button>42</button>
              </a>
              <a href="">
                <button>43</button>
              </a>
              <a href="">
                <button>44</button>
              </a>
              <a href="">
                <button>45</button>
              </a>
              <a href="">
                <button>46</button>
              </a>
              <a href="">
                <button>46.5</button>
              </a>
            </div>
            <button className={styles.Cart_btn}>Add to Cart</button>
            <small>Free delivery for order over $100</small>
          </div>

          <div className={styles.productDescription}>
            <h5>Product Description</h5>
            <p>
              These Nike G.T. Hustle 3 Blueprint shoes give the classic Samba
              silhouette a stylish, elevated update. The premium leather upper
              features embroidered 3-Stripes for a fresh edge while metallic
              accents add a touch of shine. The thick rubber outsole stands on
              its own but references the iconic look of the original style.
              Whether you pair them with jeans, tights or a maxi dress, they're
              perfect for adding a retro-cool vibe to any outfit. As
              recreational running established widespread popularity in the
              1970s, the benchmark for running footwear shifted from mere
              existence to performance. While the era’s designs would be
              considered simple by today’s standards, the decade stands out as
              the moment when running shoes truly came into their own. The New
              Balance 327 sheds new light on the ‘70s as a time of innovation by
              boldly reshaping classic design elements with a thoroughly
              contemporary outlook. With an angular reworking of the
              tried-and-true wedge silhouette, outsize, asymmetrically applied
              ‘N’ branding, and wraparound, trail-inspired lug outsole, the New
              Balance 327 provides nothing less than a complete reimagination of
              our running heritage.
            </p>
            <h5>Product Details</h5>
            <div className={styles.d_list}>
              <ul className={styles.detail_list}>
                <li>Regular fit</li>
                <li>Lace closure</li>
                <li>Leather upper</li>
                <li>Textile and synthetic lining</li>
                <li>Rubber outside</li>
              </ul>

              <ul className={styles.detail_list}>
                <li>Imported</li>
                <li>Product color: Off white / Halo blue / Rose gold</li>
                <li>Textile and synthetic lining</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.similar}>
        <h4>Similar items you might like</h4>
      </div>
    </>
  );
};

export default Details;
