import React from 'react';
import styles from './Extra.module.css';

const Extra = () => {
  return (
    <div>
       <section className={styles.extraSection}>
              <div className={styles.extraInner}>
                  <ul>
                      <li><h3>What's New</h3></li>
                      <li><a href={"#"}>Surface Laptop Go 2</a></li>
                      <li><a href={"#"}>Durface Pro 8</a></li>
                      <li><a href={"#"}>Surface Laptop Studio</a></li>
                      <li><a href={"#"}>Surface Pro X</a></li>
                      <li><a href={"#"}>Surface Go 3</a></li>
                      <li><a href={"#"}>Surface Duo 2</a></li>
                      <li><a href={"#"}>Surface Pro 7+</a></li>
                      <li><a href={"#"}>Windows 11 apps</a></li>
                  </ul>
                  <ul>
                    <li><h3>Microsoft Stores</h3></li>
                    <li><a href="#">Account profile</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Order tracking</a></li>
                    <li><a href="#">Download Center</a></li>
                    <li><a href="#">Flexible Payments</a></li>
                </ul>
                <ul>
                    <li><h3>Education</h3></li>
                    <li><a href="#">Microsoft in education</a></li>
                    <li><a href="#">Devices for education</a></li>
                    <li><a href="#">Microsoft Teams for Education</a></li>
                    <li><a href="#">Microsoft 365 Education</a></li>
                    <li><a href="#">Office Education</a></li>
                    <li><a href="#">Educator training and development</a></li>
                    <li><a href="#">Deals for students and parents</a></li>
                    <li><a href="#">Azure for students</a></li>
            </ul>
            <ul>
                    <li><h3>Business</h3></li>
                    <li><a href="#">Microsoft Cloud</a></li>
                    <li><a href="#">Microsoft Security</a></li>
                    <li><a href="#">Azure</a></li>
                    <li><a href="#">Dynamics 365</a></li>
                    <li><a href="#">Microsoft 365</a></li>
                    <li><a href="#">Microsoft Advertising</a></li>
                    <li><a href="#">Microsoft Industry</a></li>
                    <li><a href="#">Microsoft Teams</a></li>
            </ul>
            <ul>
                    <li><h3>Developer & IT</h3></li>
                    <li> <a href="#">Developer Center</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Microsoft Learn</a></li>
                    <li><a href="#">Microsoft Tech Community</a></li>
                    <li><a href="#">Azure Marketplace</a></li>
                    <li><a href="#">AppSource</a></li>
                    <li><a href="#">Microsoft Power Platform</a></li>
                    <li><a href="#">Visual Studio</a></li>
            </ul>
            <ul>
                    <li><h3>Company</h3></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">About Microsoft</a></li>
                    <li><a href="#">Company news</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Sustainability</a></li>
            </ul>
              </div>
       </section> 
    </div>
  )
}

export default Extra;