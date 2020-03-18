const path = require('path')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withTm = require('next-transpile-modules')(['arkade'])

const config = withCss(withSass(withTm({
  cssLoaderOptions: { url: false },
  webpack: (c) => {
      c.resolve.modules.push(path.resolve(__dirname));
      c.resolve.modules.push(path.resolve(__dirname, 'node_modules'));

      return c;
  }
})))

module.exports = config
