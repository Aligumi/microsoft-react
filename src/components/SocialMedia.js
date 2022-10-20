import React from 'react';
import styles from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <div>
        <section className={styles.socialMedia}>
              <p>Follow Me :)</p>
              <a href={"https://github.com/Aligumi"}>
                <i className="fab fa-github fa-2x">.</i>
             </a>
             <a href={"https://twitter.com//alithecoder_"}>
                <i className="fab fa-twitter fa-2x">.</i>
             </a>
             <a href={"https://linkedin.com./in/ali-gumi-6584891b6"}>
                <i className="fab fa-linkedin fa-2x">.</i>
             </a>
        </section>
    </div>
  )
}

export default SocialMedia;