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
  // Use standard server rendering instead of static export
  output: 'standalone',
  experimental: {
    // This prevents the error with document/window references by using proper server/client separation
    serverComponentsExternalPackages: ['react-icon-cloud', 'gsap', 'lottie-react'],
  },
};

export default nextConfig;
