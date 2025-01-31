import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mc-heads.net',
        port: '',
        pathname: '/avatar/**/**',
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com"
      }
    ],
  },
};

export default nextConfig;
