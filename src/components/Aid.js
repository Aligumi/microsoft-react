import React from 'react'
import styles from './Aid.module.css';
const Aid = () => {
  return (
    <div>
        <section className={styles.aid}>
            <div class={styles.aidContent}>
                <h1>Leveraging tech in times of trouble</h1>
                <p>
                  From catastophic storms to COVID-19 and the war in Ukraine,
                  find out how Microsoft and its {<br/>} employees are among the
                  firts to respond when disasters strike 
                </p>
                <a href="#" class={styles.btn}>Learn more</a>
            </div>
        </section>
    </div>
  )
}

export default Aid;