/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/ravelate",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/fianardeviants",
        permanent: true
      },
      {
        source: "/npm",
        destination: "",
        permanent: true
      }
    ];
  },
};

module.exports = nextConfig
