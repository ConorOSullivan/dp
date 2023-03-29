import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const apiSource =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://arenas-express-heroku.herokuapp.com';

export default function Home() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const intervalTime = (Math.random() * 7) * 1000;
    const interval = setInterval(() => {
      // Generate a random x-coordinate for the bubble
      const x = Math.floor(Math.random() * 100);
      // Generate a new bubble with a unique key
      const newBubble = <div 
        key={bubbles.length}
        className="bubble"
        style={
          { 
            left: `${x}%`,
            position: `absolute`,
            "background-color": `white`,
            background: `radial-gradient(circle at top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))`,
            "border-radius": `50%`,
            "box-shadow": `0 0 1px rgba(255, 255, 255, 0.5), 0 1px 3px rgba(0, 0, 0, 0.2)`,
            opacity: `0.8`,
            "pointer-events": `none`,
            animation: `bubble-rise 10s infinite`,
            width: `50px`,
            height: `50px`,
            transform: `translateX(-50%)`
          }
        }
      />;
      // Add the new bubble to the array of bubbles
      setBubbles([...bubbles, newBubble]);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [bubbles]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#090E27" />
      </Head>
      <div className="container">
        <div className="bg"></div>
        <div className="image-container">
          <Image
            src="/outside-manz-invite.svg"
            layout="fill"
            objectFit="contain"
            quality={100}
            width="100%"
          />
        </div>
        <div className="left-cta-container">
          <Link href="https://docs.google.com/forms/d/1XC8lm6gycGh1jGdZ4-0Bql559nuUrDiATMyMqnKfs0I">
            <a className="cta-button">RSVP Here</a>
          </Link>
        </div>
        <div className="right-cta-container">
          <Link href="https://www.instagram.com/reel/CdhUlP6IZ_x/?igshid=YmMyMTA2M2Y=">
            <a className="cta-button-opposite">Get Stoked</a>
          </Link>
        </div>
        <div className="bubbles-container">{bubbles}</div>
      <audio src="/02. Tame Impala - Endors Toi_sample.mp3" autoPlay />
      </div>
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          background-color: rgba(9, 14, 39, 255);
        }
        .left-cta-container {
          position: absolute;
          top: 40%;
          left: 10%;
          transform: translateY(-50%);
        }
        .right-cta-container {
          position: absolute;
          bottom: 28%;
          right: 10%;
          transform: translateY(-50%);
        }
        .cta-button {
          display: inline-block;
          padding: 1rem 1rem;
          background-color: rgba(9,14,39,255);
          color: #fff5d4;
          border-radius: 3px;
          text-decoration: none;
          margin-top: 1rem;
          border: 2px solid #fff5d4;
          width: 30vw;
          text-align: center;
        }
        .cta-button-opposite {
          display: inline-block;
          padding: 1rem 1rem;
          background-color: #fff5d4;
          background: #fff5d4;
          color: rgba(9,14,39,255);
          border-radius: 3px;
          text-decoration: none;
          margin-top: 1rem;
          border: 2px solid rgba(9,14,39,255);
          width: 30vw;
          text-align: center;
        }
        .container {
          position: absolute;
          width: 100vw;
          height: 100vh;
          overflow: auto;
          padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(9, 14, 39, 255);
          z-index: -1;
        }
        .image-container {
          position: relative;
          height: 100vh;
          width: 100vw;
          // padding: env(safe-area-inset-top) 0 env(safe-area-inset-bottom) 0;
          background-color: rgba(9, 14, 39, 255);
          // margin-top: env(safe-area-inset-top, 20px);
        }
        @media only screen and (min-width: 444px) {
          .image-container {
            max-width: 450px;
            margin: 0 auto;
            padding: 10% 5rem;
          }
          .cta-button {
            width: 100px;
          }
          .cta-button-opposite {
            width: 100px;
          }
        }
        .bubble-container {
          position: relative;
          height: 100vh; /* Set the height of the container to the full viewport height */
          overflow: hidden; /* Hide any bubbles that float too high */
        }
        @keyframes bubble-rise {
          0% {
            bottom: 0; /* Start the bubble at the bottom of the container */
            opacity: 0; /* Set the opacity to 0 so the bubble fades in */
            transform: translateX(-50%) translateY(0); /* Move the bubble to the center */
          }
          10% {
            opacity: 1; /* Increase the opacity to 1 */
          }
          90% {
            opacity: 1; /* Keep the opacity at 1 */
          }
          100% {
            bottom: 100%; /* Move the bubble to the top of the container */
            opacity: 0; /* Set the opacity to 0 so the bubble fades out */
            transform: translateX(-50%) translateY(-100%); /* Move the bubble to the top */
          }
        }
      `}</style>
    </>
  );
}    
