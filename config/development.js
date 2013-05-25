// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    host: "outluch.dyndns.org:3000/api", // my own rest mini-service for test! It is on laptop.
    protocol: "http"
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
