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
  // Change from standalone to server to fix SSR issues
  output: 'export',
  // Disable static optimization to prevent document not defined errors
  experimental: {
    // This prevents the error with document/window references
    appDocumentPreloading: false,
  },
};

export default nextConfig;
