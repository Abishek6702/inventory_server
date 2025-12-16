const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');

router.post('/', auth, upload.single('image'), productController.createProduct);
router.get('/', auth, productController.getProducts);
router.get('/:id', auth, productController.getProductById);
router.put('/:id', auth, upload.single('image'), productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
