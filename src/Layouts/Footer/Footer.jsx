import React, { useState } from 'react';
import styles from './Footer.module.css';
import down from '../../assets/down.svg';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (section) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={styles.footer_Container}>
      <div className={styles.logo_Container}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.accordion}>
        <div className={styles.accordion_header} onClick={() => toggleAccordion('shop')}>
          <h5>Shop</h5>
          <span className={openAccordions.shop ? styles.dropdown_arrow_open : styles.dropdown_arrow}>
            <img src={down} alt="Dropdown Arrow" />
          </span>
        </div>
        <ul className={`${styles.accordion_content} ${openAccordions.shop ? styles.open : ''}`}>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
        </ul>
      </div>

      <div className={styles.accordion}>
        <div className={styles.accordion_header} onClick={() => toggleAccordion('information')}>
          <h5>Information</h5>
          <span className={openAccordions.information ? styles.dropdown_arrow_open : styles.dropdown_arrow}>
            <img src={down} alt="Dropdown Arrow" />
          </span>
        </div>
        <ul className={`${styles.accordion_content} ${openAccordions.information ? styles.open : ''}`}>
          <li><a href="#">Delivery information</a></li>
          <li><a href="#">Privacy and policy</a></li>
          <li><a href="#">Terms of service</a></li>
        </ul>
      </div>

      <div className={styles.accordion}>
        <div className={styles.accordion_header} onClick={() => toggleAccordion('company')}>
          <h5>Company</h5>
          <span className={openAccordions.company ? styles.dropdown_arrow_open : styles.dropdown_arrow}>
            <img src={down} alt="Dropdown Arrow" />
          </span>
        </div>
        <ul className={`${styles.accordion_content} ${openAccordions.company ? styles.open : ''}`}>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Stores</a></li>
          <li><a href="#">Refund Policy</a></li>
        </ul>
      </div>

      <hr />


      <div className={styles.F_info}>
        <h5>Shop</h5>
        <ul>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
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
          <li><a href="mailto:Barb@gmail.com">Barb@gmail.com</a></li>
          <li><a href="tel:+2349157084446">+2349157084446</a></li>
        </ul>
        
      </div>
    </div>
  );
};

export default Footer;
