import React from 'react'
import styles from './HomeCards.module.css';
import image1 from './images/card1.webp';
import image2 from './images/card2.webp';
import image3 from './images/card3.webp';
import image4 from './images/card4.webp';

const HomeCards = () => {
  return (
    <div>
        <section className={styles.homeCards}>
            <div>
                <img src={image1}
                     alt={`App icons for Office apps 
                     that are part of Microsoft 365`}/>
                <h3>Microsoft 365</h3>
                <p>
                    Premium Office apps, extra cloud storage, advanced security,
                     and more—all in one convenient subscription.                
                </p>
                <a href={"#"}>For 1 person 
                    <i class="fas fa-chevron-right"></i>
                </a>{<br/>}
                <a href={"#"}>For up to 6 people
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            <div>
                <img src={image2}
                     alt="A landscape with the Microsoft Edge
                      logo hovering over water."/>
                <h3>Microsoft Edge</h3>
                <p>
                    World-class performance with more privacy, more productivity,
                     and more value while you browse.    
                </p>
                <a href="#">Download now
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            <div>
                <img src={image3}
                     alt="A woman using a Windows 10 laptop with OneDrive"/>
                <h3>Microsoft OneDrive</h3>
                <p>
                    Save your files and photos to OneDrive
                     and access them from any device, anywhere.
                </p>
                <a href="#">Learn more
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            <div>
                <img src={image4}
                     alt="OneNote on a tablet screen"/>
                <h3>OneNote8</h3>
                <p>
                    Organize your notes and your life.
                </p>
                <a href="#">Sign up for free
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </section>
    </div>
  );
}

export default HomeCards;