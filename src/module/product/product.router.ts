import express from 'express';
import bookController from './product.controller';
const router = express.Router();

router.post('/', bookController.addSingleBook);
router.get('/', bookController.getAllBooks);
router.get('/:productId', bookController.getSpecificBook);
router.put('/:productId', bookController.updateSingleBook);
router.delete('/:productId', bookController.deleteSingleBook);

const BookRouter = router;
export default BookRouter;
