import { model, Schema } from 'mongoose';
import Book from './product.interface';

const BookModelSchema = new Schema<Book>(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      maxlength: [30, 'title must be maximum 30 character'],
    },
    author: {
      type: String,
      required: [true, 'Book author is required'],
      minlength: [4, 'name must be minimum 4 character'],
      maxlength: [15, 'name must be maximum 15 character'],
    },
    price: {
      type: Number,
      required: [true, 'please give a minimum price of this book'],
      min: [1, 'currency will be at least 1'],
      max: [50000, 'currency cannot exceed 50000'],
    },
    category: {
      type: String,
      required: [true, 'please chose a category'],
      max: [15, 'please chose under 15 character'],
      enum: {
        values: [
          'Fiction',
          'Science',
          'SelfDevelopment',
          'Poetry',
          'Religious',
        ],
        message:
          'please chose between (Fiction, Science, SelfDevelopment, Poetry, Religious) ',
      },
    },
    description: {
      type: String,
      required: [true, 'please write down description of your book'],
      max: [15000, 'please chose under 15000 character'],
    },
    quantity: {
      type: Number,
      required: [true, 'please write down description of your book'],
      min: [1, 'minimum Book quantity has to be 1'],
      max: [100, 'maximum quantity will be 100'],
      validate: {
        validator: Number.isInteger,
        message: 'Quantity can`t be a partial number',
      },
    },
    inStock: {
      type: Boolean,
      required: [true, 'InStock field is required'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  },
);

export const BookProductModelSchema = model<Book>('Book', BookModelSchema);

// export const BikeModel = model<Bike>('Bike', bikeSchema);

// Product Model (Book)
// title (string): The title of the book.
// author (string): The author of the book.
// price (number): Price of the book.
// category (string): The genre or category of the book (e.g., Fiction, Science). use enum, exact value (Fiction, Science, SelfDevelopment, Poetry, Religious)
// description (string): A brief description of the book.
// quantity (number): Quantity of the book available.
// inStock (boolean): Indicates if the book is in stock.
