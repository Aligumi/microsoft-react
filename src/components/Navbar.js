import React from 'react';
import styles from "./Navbar.module.css";
import logo from './images/logo.png';
// const logo = require('./images/logo.png');

const Navbar = () => {
  return (
    <div>      
        <nav className={styles.mainNav}>
            <img src={logo}
                alt={`Microsoft Logo`} className={styles.logo} />
            <ul className={styles.mainMenu}>
                <li><a href="https://www.microsoft.com/microsoft-365">Microsoft365</a></li>
                <li><a href="https://www.microsoft.com/microsoft-teams/group-chat-software">Teams</a></li>
                <li><a href="https://www.microsoft.com/microsoft-365/microsoft-office">Office</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="https://www.microsoft.com/en-us/windows/">Windows</a></li>
                <li><a href="#">Small Bussines</a></li>
                <li><a href="https://www.xbox.com/">Xbox</a></li>                <li><a href="https://support.microsoft.com/">Support</a></li>
            </ul>
            <ul className={styles.rightMenu}>
                <li className={styles.msDropdown}>
                    <a href={"#www.com"}>
                    All Microsoft<select></select>
                    </a>
                </li>
                <li>
                    <a href={"#www.com"}>
                        <i className="fas fa-search search fa-2x">.</i>

                    </a>
                </li>
                <li>

                    <a href={"#www.com"}>
                        <i className="fas fa-shopping-cart fa-2x">.</i>
                    </a>
                </li>
                <li>
                    <a href={"#www.com"}>
                        <i className="fas fa-user">.</i>
                    </a>
                </li>
            </ul>        
        </nav>
    </div>
  )
}

export default Navbar;