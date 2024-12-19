const nextTranslate = require("next-translate-plugin");

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: "https",
        hostname: "www.dpreview.com",
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  //experimental: { images: { allowFutureImage: true } },
  async redirects() {
    return [
      {
        source: "/concerts",
        destination: "/gallery/concerts",
        permanent: true,
      },
      {
        source: "/musical",
        destination: "/gallery/musical",
        permanent: true,
      },
      {
        source: "/city",
        destination: "/gallery/city",
        permanent: true,
      },
      {
        source: "/nature",
        destination: "/gallery/nature",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/gallery/concerts",
        destination: "/gallery?type=concerts",
      },
      {
        source: "/gallery/musical",
        destination: "/gallery?type=musical",
      },
      {
        source: "/gallery/city",
        destination: "/gallery?type=city",
      },
      {
        source: "/gallery/nature",
        destination: "/gallery?type=nature",
      },
      {
        source: "/gallery/all",
        destination: "/gallery?type=all",
      },
    ];
  },
};
