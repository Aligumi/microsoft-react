import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
       <footer className={styles.footer}>
        <div className={styles.footerInner}>
            <div><i className="fas fa-globe fa-2x"></i><a href="#">      English (Nigeria)</a></div>
        <uL>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Contact Microsoft</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Saftey & Eco</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Trademarks</a></li>
            <li><a href="#">About our ads</a></li>
            <li>&copy; Microsoft 2022</li>
        </uL>
        </div>
    </footer>
    </div>
  );
}

export default Footer;
