/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "http://192.168.3.147:3332",
      "github.com",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
