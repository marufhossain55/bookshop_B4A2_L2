import express from 'express';
import bookController from './product.controller';
const router = express.Router();

router.post('/addBook', bookController.addSingleBook);
router.get('/', bookController.getAllBooks);
router.get('/:bookId', bookController.getSpecificBook);
router.put('/:bookId', bookController.updateSingleBook);
router.delete('/:bookId', bookController.deleteSingleBook);

const BookRouter = router;
export default BookRouter;
