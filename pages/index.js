import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const apiSource =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://arenas-express-heroku.herokuapp.com';

export default function Home() {
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
      </div>
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          background-color: rgba(9, 14, 39, 255);
        }
        .container {
          position: absolute;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
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
          // position: relative;
          // height: 100vh;
          // width: 100vw;
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
          .cta-container {
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}    

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
//       </Head>
//       <body>
//         <div className="container">
//           <div className="image-container">
//             <Image
//               src="/outside-manz-invite.svg"
//               layout="fill"
//               // objectFit="cover"
//               quality={100}
//             />
//           </div>
//           <div className="cta-container">
//             <div className="links-container">
//               <Link href="https://docs.google.com/forms/d/1XC8lm6gycGh1jGdZ4-0Bql559nuUrDiATMyMqnKfs0I">
//                 <a className="cta">RSVP here</a>
//               </Link>
//               <Link href="https://www.instagram.com/reel/CdhUlP6IZ_x/?igshid=YmMyMTA2M2Y=">
//                 <a className="cta">Media</a>
//               </Link>
//             </div>
//           </div>
//           <audio src="/02. Tame Impala - Endors Toi_sample.mp3" autoPlay />
//         </div>
//       </body>
//       <style jsx>{`
//         html {
//           height: -webkit-fill-available;
//         }
//         body {
//           margin: 0;
//           padding: 0;
//           background-color: rgba(9, 14, 39, 255);
//           // height: 100vh;
//           // overflow: hidden;
//         }
//         #body-content {
//           padding: env(safe-area-inset-top)
//              env(safe-area-inset-right)
//              env(safe-area-inset-bottom)
//              env(safe-area-inset-left);
//         }
//         .container {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background-color: rgba(9, 14, 39, 255);
//           padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
//           z-index: -1;
//         }
//         .image-container {
//           position: relative;
//           height: calc(100% - env(safe-area-inset-top));
//           padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
//         }
//         .links-container {
//           display: flex;
//           flex-direction: row;
//           justify-content: space-between;
//           align-items: center;
//           width: 100%;
//           max-width: 400px;
//           margin: 0 auto;
//         }
//         .cta-container {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           text-align: center;
//           background-color: rgba(9,14,39,255);
//           color: white;
//           padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
//         }
//         .cta {
//           display: inline-block;
//           padding: 1rem 2rem;
//           background-color: white;
//           color: black;
//           border-radius: 5px;
//           text-decoration: none;
//           font-weight: bold;
//           margin-top: 1rem;
//         }
//         @media only screen and (min-width: 768px) {
//           .image-container {
//             max-width: 450px;
//             margin: 0 auto;
//             padding: 10% 5rem;
//           }
//           .cta-container {
//             margin: 0 auto;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
