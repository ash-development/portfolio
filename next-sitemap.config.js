const sitemapConfig = { 
    siteUrl: 'https://ashie.pics',
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
