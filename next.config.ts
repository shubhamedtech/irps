import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "iitseducation.org",
      },
      {
        protocol: "https",
        hostname: "*.iitseducation.org",
      },
      {
        protocol: "https",
        hostname: "cdn.iitseducation.org",
      },
      {
        protocol: "https",
        hostname: "assets.iitseducation.org",
      },
      {
        protocol: "https",
        hostname: "www.edtechinnovate.com",
      },
      {
        protocol: "https",
        hostname: "edtechinnovate.com",
      },
      {
        protocol: "https",
        hostname: "*.edtechinnovate.com",
      }
    ],
  },
};

export default nextConfig;
