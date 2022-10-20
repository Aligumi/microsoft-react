import React from 'react'
import styles from './HomeCards2.module.css';
import image5 from './images/card5.webp';
import image6 from './images/card6.webp';
import image7 from './images/card7.webp';
import image8 from './images/card8.webp';

const HomeCards2 = () => {
    return (
      <div>
          <section className={styles.homeCards}>
              <div>
              <img src={image5}
                     alt="A woman at home accessing
                      Windows 365 Cloud services"/>
                <h3>Welcome to your Windows 365 Cloud PC</h3>
                <p>
                    Securely stream your Windows experience from the Microsoft cloud to any device.                    
                </p>
                <a href="#">Get it today
                    <i class="fas fa-chevron-right"></i>
                </a>
              </div>
              <div>
              <img src={image6}
                     alt="A computer on a desk in a home
                      office showing Word and Outlook windows on screen"/>
                <h3>Microsoft 365 for business</h3>
                <p>                    
                    Stay a step ahead with powerful
                     apps for productivity,
                     connection, and security.
                </p>
                <a href="#">Shop now
                    <i class="fas fa-chevron-right"></i>
                </a>
              </div>
              <div>
              <img src={image7}
                     alt="Microsoft Viva employee experience platform."/>
                <h3>Microsoft Viva</h3>
                <p>                    
                    Discover the new employee experience
                     platform designed to help people connect,
                      focus, learn, and thrive at work.    
                </p>
                <a href="#"> Learn more
                    <i class="fas fa-chevron-right"></i>
                </a>
              </div>
              <div>
              <img src={image8}
                     alt="Microsoft Teams on a tablet."/>
                <h3>Get Microsoft Teams for free</h3>
                <p>
                    Online meetings, chat,
                     and shared cloud storage—all in one place.
                </p>
                <a href="#">Sign up for free
                    <i class="fas fa-chevron-right"></i>
                </a>
              </div>
          </section>
      </div>
    );
  }
  
  export default HomeCards2;