import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={styles.showcase}>
      <h1>Designed for life today—and{<br/>} tomorrow</h1>
      <p>
       The next-generation of games. Your goals. Friends and {<br/>}
       family. Windows 11 was made to bring you closer to {<br/>}
       everything you love.{<br/>}
      </p>
      <a href={`https://www.microsoft.com/en-gb/windows/windows-11?
      icid=mscom_marcom_H1a_Win11PChlth#pchealthcheck`}
         className={styles.btn} >
          See if your PC is ready    
      </a>
        </header>
    </div>
  )
}

export default Header;
