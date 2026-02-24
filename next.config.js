/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    enabled: false,
  },
  images: {
    domains: ["iitseducation.org","images.unsplash.com","edtechinnovate.com","www.edtechinnovate.com"],
  },
};

module.exports = nextConfig;