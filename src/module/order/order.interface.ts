import { ObjectId } from 'mongoose';

type Order = {
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
};
export default Order;
// email (string): The email address of the customer.
// product (ObjectId): The book ordered. (unused ref )(enter the created productId from your database which product you would love to buy)
// quantity (number): The quantity of the ordered book.
// totalPrice (number): The total price (product price * quantity).
