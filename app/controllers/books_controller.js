var _ = require('underscore');

module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Books', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'books_index_view', result);
    });
  }
};
