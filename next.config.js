/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devarthurribeiro.github.io",
      },
    ],
  },
};

module.exports = nextConfig;
