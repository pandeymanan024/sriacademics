/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/sri-academics' : '',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // Add this to ensure static files are copied correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sri-academics' : '',
}

module.exports = nextConfig