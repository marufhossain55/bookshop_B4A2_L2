import Book from './product.interface';
import BookProductModelSchema from './product.model';

const addSingleBookService = async (book: Book) => {
  const result = await BookProductModelSchema.create(book);
  return result;
};

// get all book by title author category
const getAllBooksService = async (searchTerm: string) => {
  if (!searchTerm) return [];
  const regex = new RegExp(searchTerm, 'i');
  const filter = {
    $or: [{ title: regex }, { author: regex }, { category: regex }],
  };
  return await BookProductModelSchema.find(filter);
};

const BookService = { addSingleBookService, getAllBooksService };
export default BookService;
