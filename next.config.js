/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [{
      source: "/api/:path*",
      destination: "https://todo-api-t7yv.vercel.app/api/:path*"
    }]
  }
}

module.exports = nextConfig
