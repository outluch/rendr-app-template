var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'book_view',
  events: {
    'click .delete': 'deleteBook',
    'click .debug': 'debug'
  },

  deleteBook: function() {
    console.log(this);
    //Delete model
    this.model.destroy();

    //Delete view
    this.remove();
  },
  debug: function () {
    console.log(this);
  }

});
module.exports.id = 'BookView';
