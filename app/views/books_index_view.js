var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'books_index_view',

  postRender: function () {
    this.listenToOnce(this.collection, 'add', function () {
      this.render();
    //   console.log(this.collection.toJSON());
    });
    this.listenTo(this.collection, 'reset', this.render);
  },

  events: {
    'click .test1': 'test1',
    'click .test2': 'test2'
  },

  test1: function () {
    this.collection.create({
      title: 'creature',
      author: 'Some Man'
    }, {wait: true});
  },
  test2: function () {
    console.log(this);
  }
});
module.exports.id = 'BooksIndexView';