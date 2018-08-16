
/* Configuration to Next.js
 * - assetPrefix can be used to set a prefix for the site, but it was not
 *   enough, the links+ajax calls would also need the prefix, did not go
 *   that route */

const withSass = require('@zeit/next-sass')

//const isProd = process.env.NODE_ENV === 'production'

module.exports = withSass({
    cssModules: false
//    assetPrefix: isProd ? '/tm-nextjs-starter' : ''
})

