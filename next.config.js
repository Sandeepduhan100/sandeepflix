/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir : true,
    serverComponentsExternalPackages:["mongoose"]
  }
}

module.exports = nextConfig
// next.config.js

module.exports = {
    images: {
      domains: ['occ-0-3933-116.1.nflxso.net'],
    },
  };
  