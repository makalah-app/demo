/** @type {import('next').NextConfig} */
const nextConfig = {
  // Base path untuk deployment di subdirectory
  basePath: '/demo',
  
  // Asset prefix untuk static files
  assetPrefix: '/demo',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // Output configuration untuk static export jika diperlukan
  output: 'standalone',
}

export default nextConfig
