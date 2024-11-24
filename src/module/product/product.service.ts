import Book from './product.interface';
import BookProductModelSchema from './product.model';

const addSingleBookService = async (book: Book) => {
  const result = await BookProductModelSchema.create(book);
  return result;
};

const BookService = { addSingleBookService };
export default BookService;
