import { Request, Response } from 'express';
import orderService from './order.service';

const orderSingleBook = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.orderSingleBookService(order);
    res.status(200).json({
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'create oder went wrong',
      error: error,
    });
  }
};

const totalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenue();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Revenue calculated went wrong',
      error: error,
    });
  }
};

const orderController = { orderSingleBook, totalRevenue };
export default orderController;
