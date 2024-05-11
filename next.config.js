const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        pathname: '/products/**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: '@import "styles/variables.scss";',
  },
};
