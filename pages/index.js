import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import tanShape from '../styles/Shape.module.css';
import stripesShape from '../styles/Stripes.module.css';


const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const RSVPLink = "https://docs.google.com/forms/d/e/1FAIpQLSeFIOqKB-TlsehdTna6vVWYxmyVO7gbQg3517Ms1CEwJOCnlw/viewform";
  const IGLink = "https://www.instagram.com/reel/CdhUlP6IZ_x/?igshid=YmMyMTA2M2Y=";

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Project</title>
        <meta name="description" content="Next.js project with a custom background color and diagonal separation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={tanShape.shape}></div>
      <div className={stripesShape.stripe3}></div>
      <div className={stripesShape.stripe2}></div>
      <div className={stripesShape.stripe1}></div>
      
      <img src="/OutsideManzLogo.svg" alt="Outside Manz Logo" className={styles.logo} />

      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.hamburgerIcon}></div>
          <ul className={`${styles.menuList} ${menuVisible ? styles.visible : ''}`}>
            <li className={styles.menuItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/event-details">
                <a>Event Details</a>
              </Link>
            </li>
            <li className={styles.menuItem}><a href={RSVPLink}>RSVP Here</a></li>
            <li className={styles.menuItem}><a href={IGLink}>Get Stoked</a></li>
            <li className={styles.menuItem}>
              <Link href="/outfit-inspo">
                <a>Outfit Inspiration</a>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/lineup">
                <a>Lineup</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <a href={RSVPLink}>
        <button className={styles.rsvpButton}>RSVP here</button>
      </a>

      <img src="/EventDate.svg" alt="Event Date" className={styles.eventDate} />
      
    </div>
  
  );
};

export default Home;
