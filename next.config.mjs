/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export mode
  images: {
    unoptimized: true, // Disable image optimization for export mode
  },
};

export default nextConfig;
