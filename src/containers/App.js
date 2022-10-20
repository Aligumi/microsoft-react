import React from 'react';
import styles from "./App.module.css";
import  Navbar from "../components/Navbar.js";
import Promo from '../components/Promo.js';
import Header from "../components/Header.js";
import HomeCards from "../components/HomeCards.js";
import Android from '../components/Android.js';
import HomeCards2 from "../components/HomeCards2.js";
import Aid from "../components/Aid.js";
import SocialMedia from '../components/SocialMedia';
import Extra from '../components/Extra';
import Footer from "../components/Footer.js";



const App = () => {

    return (
          <div>
              <Navbar />
              <Promo />
              <Header />
              <HomeCards />
              <Android />
              <h3 id={styles.h3unique}>For Business</h3>
              <HomeCards2 />
              <Aid />
              <SocialMedia />
              <Extra />
              <Footer />
          </div>
        );    

    }

 
export default App;