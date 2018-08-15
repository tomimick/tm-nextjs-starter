
const withSass = require('@zeit/next-sass')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withSass({
    cssModules: false,
    assetPrefix: isProd ? '/tm-nextjs-starter' : ''
})

