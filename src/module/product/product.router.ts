import express from 'express';
import bookController from './product.controller';
const router = express.Router();

router.post('/api/products', bookController.addSingleBook);
const BookRouter = router;
export default BookRouter;
// router.post('/create-bike', bikeController.createBike);
// router.get('/:bikeId', bikeController.singleGetBike);
// router.put('/:bikeId', bikeController.updateBike);
// router.delete('/:bikeId', bikeController.deleteBike);
// router.get('/', bikeController.getAllBike);
// export const bikeRouter = router;
