import Book from './product.interface';
import BookProductModelSchema from './product.model';

//create a book
const addSingleBookService = async (book: Book) => {
  const result = await BookProductModelSchema.create(book);
  return result;
};

// get all book by title author category
// const getAllBooksService = async (searchTerm: string) => {
//   if (!searchTerm) return [];
//   const regex = new RegExp(searchTerm, 'i');
//   const filter = {
//     $or: [{ title: regex }, { author: regex }, { category: regex }],
//   };
//   return await BookProductModelSchema.find(filter);
// };
// get all book by title author category
const getAllBooksService = async (searchTerm: string) => {
  let filter = {};
  const regex = new RegExp(searchTerm as string, 'i');
  filter = {
    $or: [{ title: regex }, { author: regex }, { category: regex }],
  };
  const result = await BookProductModelSchema.find(filter);
  return result;
};

//get single book
const getSpecificBookService = async (_id: string) => {
  const result = await BookProductModelSchema.findById(_id);
  return result;
};

//Update a Book
const updateSingleBookService = async (_id: string, book: Book) => {
  const result = await BookProductModelSchema.findByIdAndUpdate(_id, book, {
    new: true,
  });
  return result;
};

// Delete a Book
const deleteSingleBookService = async (_id: string) => {
  const result = await BookProductModelSchema.findByIdAndDelete(_id);
  return result;
};

const BookService = {
  addSingleBookService,
  getAllBooksService,
  getSpecificBookService,
  updateSingleBookService,
  deleteSingleBookService,
};
export default BookService;
