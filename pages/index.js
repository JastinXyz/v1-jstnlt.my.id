import Navbar from '../components/navbar'
import { BackToTop } from '../components/btt';
import Main from '../components/main';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <BackToTop />
      <svg width="0" height="0">
        <linearGradient id="instagram-gradient" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
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