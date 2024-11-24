import Book from './product.interface';
import BookProductModelSchema from './product.model';

const addSingleBook = async (book: Book) => {
  const result = BookProductModelSchema.create(book);
  return result;
};

const BookService = { addSingleBook };
export default BookService;
