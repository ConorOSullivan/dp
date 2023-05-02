import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import tanShape from '../styles/Shape.module.css';
import stripesShape from '../styles/Stripes.module.css';

const Recap = () => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Recap</title>
        <meta name="description" content="Event details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={tanShape.shape}></div>
        <div className={stripesShape.stripe3}></div>
        <div className={stripesShape.stripe2}></div>
        <div className={stripesShape.stripe1}></div>
    </div>
    );
};

export default Recap;