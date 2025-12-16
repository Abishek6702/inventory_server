const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');

router.post('/', auth, upload.single('image'), supplierController.createSupplier);
router.get('/', auth, supplierController.getSuppliers);
router.get('/:id', auth, supplierController.getSupplierById);
router.put('/:id', auth, upload.single('image'), supplierController.updateSupplier);
router.delete('/:id', auth, supplierController.deleteSupplier);

module.exports = router;
