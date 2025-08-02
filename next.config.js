/** @type {import('next').NextConfig} */
const nextConfig = {
  // config options here
  eslint: {
    ignoreDuringBuilds: true, // Optional: Disable ESLint on Vercel builds
  },
};

module.exports = nextConfig;
