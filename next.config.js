/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio-next',
  assetPrefix: '/portfolio-next/',
}

module.exports = nextConfig
