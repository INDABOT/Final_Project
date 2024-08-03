import styles from './Footer.module.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className={styles.footer_Container}>
        <div className={styles.logo_Container}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.F_info}>
            <h5>Shop</h5>
            <ul>
                <li><a href="#">Men</a></li>
                <li><a href="#">women</a></li>
                <li><a href="#">Kids</a></li>
            </ul>
        </div>



        <div className={styles.F_info}>
            <h5>Information</h5>
            <ul>
                <li><a href="#">Delivery information</a></li>
                <li><a href="#">Privacy and policy</a></li>
                <li><a href="#">Terms of service</a></li>
            </ul>
        </div>




        <div className={styles.F_info}>
            <h5>Company</h5>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Stores</a></li>
                <li><a href="#">Refund Policy</a></li>
            </ul>
        </div>



        <div className={styles.F_info}>
            <h5>Contact Us</h5>
            <ul>
                <li><a href="#">Barb@gmail.com</a></li>
                <li><a href="#">+2349157084446</a></li>
            </ul>
            
        </div>
        

    </div>
  )
}

export default Footer