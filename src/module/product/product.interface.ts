type Book = {
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default Book;

// title (string): The title of the book.
// author (string): The author of the book.
// price (number): Price of the book.
// category (string): The genre or category of the book (e.g., Fiction, Science). use enum, exact value (Fiction, Science, SelfDevelopment, Poetry, Religious)
// description (string): A brief description of the book.
// quantity (number): Quantity of the book available.
// inStock (boolean): Indicates if the book is in stock.
