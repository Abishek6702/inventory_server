const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  name: String,
  productId: String,
  category: String,
  buyingPrice: Number,
  quantity: Number,
  unit: String,
  expiryDate: Date,
  thresholdValue: Number,
  image: String, 
});
module.exports = mongoose.model('Product', ProductSchema);
