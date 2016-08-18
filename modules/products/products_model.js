var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productsSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  promotionalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Products', productsSchema);