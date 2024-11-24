import Order from './order.interface';
import BookProductModelSchema from '../product/product.model';
import orderModelSchema from './order.model';

const orderSingleBookService = async (order: Order) => {
  const findBookId = await BookProductModelSchema.findById(order?.product);
  if (!findBookId) {
    const result = {
      status: false,
      message: 'book not found!',
    };
    return result;
  }

  //   if (findBookId.quantity < order.quantity) {
  //     return result: any = { status: false, message: 'insufficient stock' }
  //   }

  if (findBookId.quantity < order.quantity) {
    return {
      status: false,
      message: 'Insufficient stock',
    };
  }

  if (order.totalPrice !== findBookId?.price * order.quantity) {
    const result = {
      status: false,
      message: 'please correct total price!',
    };
    return result;
  }

  findBookId.quantity -= order.quantity;
  if (findBookId.quantity === 0) {
    findBookId.inStock = false;
  }
  await findBookId.save();
  const result = await orderModelSchema.create(order);
  return {
    success: true,
    message: 'Order created successfully',
    data: result,
  };
};

// Calculate Revenue
const calculateRevenue = async () => {
  const result = await orderModelSchema.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  if (result.length === 0) {
    return { totalRevenue: 0 };
  }
  return result[0];
};

const orderService = { orderSingleBookService, calculateRevenue };
export default orderService;
