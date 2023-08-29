import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Project</title>
        <meta name="description" content="Next.js project with a custom background color and diagonal separation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <img src="/dynamic-petrophysics-logo.svg" alt="Dynamic Petrophysics Logo" className={styles.logo} />
      
      <div className={styles.linkContainer}>
        <Link href="https://www.dropbox.com/scl/fi/vubeblkppayy4slhuui5k/U-Pitch-PitchDeck_OSullivan_TransientHighGammaRay_202308_Final.pdf?dl=0&rlkey=vbatipa72ehm8at7qdl5f9hvi" passHref>
          <a className={styles.linkButton}>Click here to see slide deck</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
