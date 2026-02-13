/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/games/:path*',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'gzip',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;