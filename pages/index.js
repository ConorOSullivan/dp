import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const apiSource = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://arenas-express-heroku.herokuapp.com';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <div className="bg"></div>
        <div className="image-container">
          <Image
            src="/outside-manz-invite.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="cta-container">
            <Link href="https://docs.google.com/forms/d/1XC8lm6gycGh1jGdZ4-0Bql559nuUrDiATMyMqnKfs0I">
              <a className="cta">RSVP here</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          background-color: rgba(9,14,39,255);
        }
        .container {
          position: relative;
          height: 100vh;
        }
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(9,14,39,255);
          z-index: -1;
        }
        .image-container {
          position: relative;
          height: 100%;
          padding: 2rem;
        }
        .cta-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          text-align: center;
          padding: 2rem;
          background-color: rgba(9,14,39,255);
          color: white;
        }
        .cta {
          display: inline-block;
          padding: 1rem 2rem;
          background-color: white;
          color: black;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 1rem;
        }
        @media only screen and (min-width: 768px) {
          .image-container {
            max-width: 960px;
            margin: 0 auto;
            padding: 5rem;
          }
        }
      `}</style>
    </>
  );
}
