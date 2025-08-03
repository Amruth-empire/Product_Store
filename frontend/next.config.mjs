/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",         // frontend:  /api/products
        destination: "http://localhost:5000/:path*", // backend:  http://localhost:5000/products
      },
    ];
  },
};

export default nextConfig;
