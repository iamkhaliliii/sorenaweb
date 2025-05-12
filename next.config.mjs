/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimize for Vercel deployment
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Ensure output is optimized for Vercel
  output: 'standalone',
};

export default nextConfig;
