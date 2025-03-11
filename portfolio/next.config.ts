import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures Next.js can generate static files
  trailingSlash: true, // Needed for GitHub Pages
  images: {
    unoptimized: true, // ✅ Fixes the image export error
  },
};

export default nextConfig;
