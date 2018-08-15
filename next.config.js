
const withSass = require('@zeit/next-sass')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withSass({
    cssModules: false,
    assetPrefix: isProd ? 'https://tomimick.github.io/tm-nextjs-starter/' : ''
})

