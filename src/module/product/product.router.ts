import express from 'express';
import bookController from './product.controller';
const router = express.Router();

router.post('/api/products', bookController.addSingleBook);
router.get('/api/products', bookController.getAllBooks);
router.get('/api/products/:productId', bookController.getSpecificBook);
router.put('/api/products/:productId', bookController.updateSingleBook);
router.delete('/api/products/:productId', bookController.deleteSingleBook);

const BookRouter = router;
export default BookRouter;
