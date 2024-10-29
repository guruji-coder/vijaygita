import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GOOGLE_TRANSLATE_API_KEY: process.env.GOOGLE_TRANSLATE_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "krishnastore.in",
        port: "",
      },
    ],
  },
};

export default nextConfig;
