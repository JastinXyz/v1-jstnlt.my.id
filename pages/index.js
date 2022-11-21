import Head from 'next/head'
import Navbar from '../components/navbar'
import { BackToTop } from '../components/btt';
import Main from '../components/main';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <html data-theme="light" />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackToTop />
      <svg width="0" height="0">
        <linearGradient id="instagram-gradient" x2="0.35" y2="1">
          <stop offset="0%" stop-color="#f09433" />
          <stop offset="25%" stop-color="#e6683c" />
          <stop offset="50%" stop-color="#dc2743" />
          <stop offset="75%" stop-color="#cc2366" />
          <stop offset="100%" stop-color="#bc1888" />
        </linearGradient>
      </svg>
      <div className="w-full pb-12 antialiased">
        <div className="mx-auto">
          <Navbar />
          <main>
            <Main />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}