import { model, Schema } from 'mongoose';

const BookModelSchema = new Schema<Book>({});

export default const BookModelSchema=model<Book>('Book',BookModelSchema)

// Product Model (Book)
// title (string): The title of the book.
// author (string): The author of the book.
// price (number): Price of the book.
// category (string): The genre or category of the book (e.g., Fiction, Science). use enum, exact value (Fiction, Science, SelfDevelopment, Poetry, Religious)
// description (string): A brief description of the book.
// quantity (number): Quantity of the book available.
// inStock (boolean): Indicates if the book is in stock.
