import express from 'express';
import bookController from './product.controller';
const router = express.Router();

router.post('/api/products', bookController.addSingleBook);
router.get('/api/products', bookController.getAllBooks);
const BookRouter = router;
export default BookRouter;
