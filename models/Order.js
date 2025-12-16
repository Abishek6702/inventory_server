const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  productName: String,
  productId: String,
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  category: String,
  orderValue: Number,
  quantity: Number,
  unit: String,
  buyingPrice: Number,
  dateOfDelivery: Date,
  status: { type: String, enum: ["ordered", "received", "canceled", "returned", "delayed"], default: "out for delivery" },
});
module.exports = mongoose.model('Order', OrderSchema);
