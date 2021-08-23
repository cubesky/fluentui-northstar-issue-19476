module.exports = {
    flags: {
        DEV_SSR: false,
    },
    siteMetadata: {
        title: `Hello`,
        author: {
            name: `Foo`,
            summary: `Bar`,
        },
        description: `Hi Everyone`,
        siteUrl: `https://example.com`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: "static",
            },
        },
        {
            resolve: 'gatsby-plugin-layout'
        },
        {
            resolve: "gatsby-plugin-react-helmet"
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `tomato`,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    {
                        resolve: `gatsby-remark-copy-linked-files`,
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                    },
                ],
            }
        }
    ]
}