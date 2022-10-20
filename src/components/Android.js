import React from 'react';
import styles from './Android.module.css';

const Android = () => {
  return (
    <div>
        <section className={styles.android}>
          <div className={styles.content}>
            <h2>Outlook for iOS and Android</h2>
              <p>Connect. Organize. Get things done.</p>
                 <a href="#" className={styles.btn}>
                    Download now <i class="fas fa-chevron-right "></i>
                  </a>
          </div>
        </section>
    </div>
  );
}

export default Android;
