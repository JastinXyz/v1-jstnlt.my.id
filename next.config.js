/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/JastinXyz",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://web.facebook.com/jastin.lt",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/c/JastinCh",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/jstn.lt",
        permanent: true
      },
      {
        source: "/npm",
        destination: "https://npmjs.com/~jastinlt",
        permanent: true
      }
    ];
  },
};

module.exports = nextConfig
