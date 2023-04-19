import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import eventStyles from '../styles/EventDetails.module.css';
import tanShape from '../styles/Shape.module.css';
import stripesShape from '../styles/Stripes.module.css';

const PASSWORD = 'manzer';

const EventDetails = () => {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setAuthorized(true);
    }
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const RSVPLink = "https://docs.google.com/forms/d/e/1FAIpQLSeFIOqKB-TlsehdTna6vVWYxmyVO7gbQg3517Ms1CEwJOCnlw/viewform";
  const IGLink = "https://www.instagram.com/reel/CdhUlP6IZ_x/?igshid=YmMyMTA2M2Y=";

  return (
    <div className={styles.container}>
      <Head>
        <title>Event Details</title>
        <meta name="description" content="Event details page" />
        <link rel="icon" href="/favicon.ico" />
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

      {authorized ? (
        <>
            <div className={eventStyles.textBox}>
                <p>You’ve got a ticket to the least exclusive festival of the year! Get ready for food, drinks, music, and vibes. Make sure to don your best festival fit!</p>
                <b />
                <b>When<b />: 4pm April 22
                <br />
                <br />
                <b>Where<b />: 518 Arenas
                <br />
                <br />
                <b>What<b />: Live DJs and a Disco Cave
                <br />
                <br />
                <b>Entrance<b />:
                <br />
                Parking: Park on Arenas St, and walk around to the back alley.
                Ubering: Use 518 Glenview Ln as your destination.
            </div>
        </>
      ) : (
        <div className={eventStyles.passwordContainer}>
          <h2>Password Required. What's Amanda's IG Handle?:</h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

    </div>
  );
};

export default EventDetails;
