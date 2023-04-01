/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "ipfs.io",
  //       port: "",
  //     },
  //   ],
  // },
  images: {
    domains: ["ipfs.io"],
  },
};

module.exports = nextConfig;
