import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tanShape from '../styles/Shape.module.css';
import stripesShape from '../styles/Stripes.module.css';

const Lineup = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const RSVPLink = "https://docs.google.com/forms/d/e/1FAIpQLSeFIOqKB-TlsehdTna6vVWYxmyVO7gbQg3517Ms1CEwJOCnlw/viewform";
  const IGLink = "https://www.instagram.com/reel/CdhUlP6IZ_x/?igshid=YmMyMTA2M2Y=";
  return (
    <div className={styles.container}>
      <Head>
        <title>Lineup</title>
        <meta name="description" content="The Lineup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={tanShape.shape}></div>
      <div className={stripesShape.stripe3}></div>
      <div className={stripesShape.stripe2}></div>
      <div className={stripesShape.stripe1}></div>

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
      <div className={styles.lineupImageContainerOuter}>
        <div className={styles.lineupImageContainer}>
            <img src="/lineup.png" alt="Lineup" className={styles.lineupImage} />
        </div>
      </div>
    </div>
  );
};

export default Lineup;
