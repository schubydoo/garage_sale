/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "drive.google.com" }],
  },
};
