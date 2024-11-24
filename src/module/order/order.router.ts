import express from 'express';
import orderController from './order.controller';

const router = express.Router();

router.post('/', orderController.orderSingleBook);
router.get('/revenue', orderController.totalRevenue);

const orderRoute = router;
export default orderRoute;
