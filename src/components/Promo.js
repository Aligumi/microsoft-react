import React from 'react';
import styles from './Promo.module.css';

const Promo = () => {
  return (
    <div className={styles.promo}>
            <a href="https://ali.com">
                <p>
                    Free 2-3 Day Shipping +
                    Extended Returns + 
                    Flexible Payment Options +
                    Low Price Promise
                </p>
            </a>
    </div>
  )
}

export default Promo;