import express from 'express';
import orderController from './order.controller';

const router = express.Router();

router.post('/placeOrder', orderController.orderSingleBook);
router.get('/', orderController.totalRevenue);

const orderRoute = router;
export default orderRoute;
