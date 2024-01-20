/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '"qreczqmdywepfpcwjbst.supabase.co"',
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
