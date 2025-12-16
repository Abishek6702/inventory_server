const Supplier = require('../models/Supplier');

exports.createSupplier = async (req, res) => {
  try {
    const image = req.file ? req.file.path : '';
    const supplier = await Supplier.create({ ...req.body, image });
    res.status(201).json(supplier);
  } catch {
    res.status(500).json({ message: 'Error creating supplier' });
  }
};

exports.getSuppliers = async (req, res) => {
  const suppliers = await Supplier.find();
  res.json(suppliers);
};

exports.getSupplierById = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  if (!supplier) return res.status(404).json({ message: 'Not found' });
  res.json(supplier);
};

exports.updateSupplier = async (req, res) => {
  try {
    const update = req.file ? { ...req.body, image: req.file.path } : req.body;
    const supplier = await Supplier.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(supplier);
  } catch {
    res.status(500).json({ message: 'Error updating supplier' });
  }
};

exports.deleteSupplier = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.json({ message: 'Supplier deleted' });
};
