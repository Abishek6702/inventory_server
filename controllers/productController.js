const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const image = req.file ? req.file.path : '';
    const product = await Product.create({ ...req.body, image });
    res.status(201).json(product);
  } catch (e) {
    res.status(500).json({ message: 'Error creating product' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('supplier');
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};


exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  try {
    const update = req.file ? { ...req.body, image: req.file.path } : req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(product);
  } catch {
    res.status(500).json({ message: 'Error updating product' });
  }
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};
