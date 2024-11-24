const sitemapConfig = { 
    siteUrl: 'https://ashie.lol',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/gallery/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}

module.exports = sitemapConfig;
