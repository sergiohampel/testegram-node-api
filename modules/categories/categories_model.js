var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Categories', categoriesSchema);