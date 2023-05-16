/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/app/components/pages/signin/signin",
        destination : "/sigin"
      },
    ];
  },
}

module.exports = nextConfig
