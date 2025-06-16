/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '', // REMOVE or comment out
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  // assetPrefix: '', // REMOVE or comment out
  // Add this to ensure all static files are included in the build
  distDir: 'out',
}

module.exports = nextConfig