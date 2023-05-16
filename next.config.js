/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   console.log("Rewrites called");
  //   return [
  //     {
  //       source: "/app/components/pages/signin/signin",
  //       destination : "/signin"
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: "/signin",
        destination: "/app/components/pages/signin/signin",
      },
      {
        source: "/signup",
        destination: "/app/components/pages/signin/signin",
      },
    ];
  },
}

module.exports = nextConfig
