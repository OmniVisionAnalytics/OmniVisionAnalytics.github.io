/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '', // or '' if you're deploying to a user/organization page
};

module.exports = nextConfig;
