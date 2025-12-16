const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  name: String,
  product: String,
  category: String,
  email:String,
  buyingPrice: Number,
  contactNumber: String,
  type: { type: String, enum: ['taking return', 'no return'] },
  image: String
});
module.exports = mongoose.model('Supplier', SupplierSchema);
