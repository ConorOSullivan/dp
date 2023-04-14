import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import tanShape from '../styles/Shape.module.css';
import stripesShape from '../styles/Stripes.module.css';

const OutfitInspo = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const RSVPLink = "https://docs.google.com/forms/d/e/1FAIpQLSeFIOqKB-TlsehdTna6vVWYxmyVO7gbQg3517Ms1CEwJOCnlw/viewform";
  const IGLink = "https://www.instagram.com/reel/CdhUlP6IZ_x/?igshid=YmMyMTA2M2Y=";
  return (
    <div className={styles.container}>
      <Head>
        <title>Outfit Inspiration</title>
        <meta name="description" content="Find inspiration for your next outfit" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add the Pinterest script */}
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </Head>


      <div className={tanShape.shape}></div>
      <div className={stripesShape.stripe3}></div>
      <div className={stripesShape.stripe2}></div>
      <div className={stripesShape.stripe1}></div>

      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <div className={styles.hamburgerIcon}></div>
        <ul className={`${styles.menuList} ${menuVisible ? styles.visible : ''}`}>
          <li className={styles.menuItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.menuItem}><a href={RSVPLink}>RSVP Here</a></li>
          <li className={styles.menuItem}><a href={IGLink}>Get Stoked</a></li>
          <li className={styles.menuItem}>Lineup - Coming Soon</li>
          <li className={styles.menuItem}>
            <Link href="/outfit-inspo">
              <a>Outfit Inspiration</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.pinterestBoard}>
        <a
        data-pin-do="embedBoard"
        data-pin-board-width="90%"
        data-pin-scale-height="400"
        data-pin-scale-width="120"
        href="https://www.pinterest.com/manzerdancer/outside-manz/"
        ></a>
      </div>
    </div>
  );
};

export default OutfitInspo;
