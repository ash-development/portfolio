module.exports = {
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
      // shortcuts for current categories
      {
        source: "/concerts",
        destination: "/gallery/concerts",
        permanent: true,
      },
      {
        source: "/acoustic",
        destination: "/gallery/acoustic",
        permanent: true,
      },
      {
        source: "/portraits",
        destination: "/gallery/portraits",
        permanent: true,
      },
      {
        source: "/scapes",
        destination: "/gallery/scapes",
        permanent: true,
      },
      // old category names
      {
        source: "/musical",
        destination: "/gallery/concerts",
        permanent: true,
      },
      {
        source: "/gallery/musical",
        destination: "/gallery/concerts",
        permanent: true,
      },
      {
        source: "/city",
        destination: "/gallery/scapes",
        permanent: true,
      },
      {
        source: "/gallery/city",
        destination: "/gallery/scapes",
        permanent: true,
      },
      {
        source: "/nature",
        destination: "/gallery/scapes",
        permanent: true,
      },
      {
        source: "/gallery/nature",
        destination: "/gallery/scapes",
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
        source: "/gallery/acoustic",
        destination: "/gallery?type=acoustic",
      },
      {
        source: "/gallery/portraits",
        destination: "/gallery?type=portraits",
      },
      {
        source: "/gallery/scapes",
        destination: "/gallery?type=scapes",
      },
      {
        source: "/gallery/all",
        destination: "/gallery?type=all",
      },
    ];
  },
};
