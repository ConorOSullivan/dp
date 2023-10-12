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
        <Link href="https://www.dropbox.com/scl/fi/fkbaiktnvfhnpemophnr1/U-Pitch-PitchDeck_OSullivan_TransientHighGammaRay_202308_Final.pdf?dl=0&oref=e&r=ACDJTPZCS5dz7jgD91GzYVKs65zFliYJnT5SzUzvOeEc0dk0DHXL-HGpZTEtfT9Ug3FlbwM9uqYRR5-yPXYhENotXhUEKArm_BZwuFir2k99iejiRMRhBlSW3E5T3FEn9HWfLimhBkwnWgCMT-_eJDEgoP2201H308XyGobvnRvf6Zej5XsDd5fjCmHED3bKKdY&sm=1" passHref>
          <a className={styles.linkButton}>Click here to see slide deck</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
