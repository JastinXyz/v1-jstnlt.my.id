import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 700,
    });
  }, []);

  return (
    <>
      <Head>
        <title>JstnLT — Home</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
