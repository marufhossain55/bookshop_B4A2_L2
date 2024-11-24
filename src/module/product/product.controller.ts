// req and res management

import { Request, Response } from 'express';
import BookService from './product.service';

const addSingleBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    const result = await BookService.addSingleBookService(book);
    res.status(200).json({
      success: true,
      message: 'book added successfully',
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error,
    });
  }
};

//get all book
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await BookService.getAllBooksService(searchTerm as string);
    res.status(200).json({
      success: true,
      message: 'operation successful',
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error,
    });
  }
};

//get Specific Book

const getSpecificBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const result = await BookService.getSpecificBookService(bookId);
    res
      .status(200)
      .json({ success: true, message: 'book found', data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error,
    });
  }
};

//update Single Book
const updateSingleBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const body = req.body;
    const result = await BookService.updateSingleBookService(bookId, body);
    res.status(200).json({
      success: true,
      message: 'update successfully',
      data: result,
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error,
    });
  }
};

// delete a book

const deleteSingleBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const result = await BookService.deleteSingleBookService(bookId);
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error,
    });
  }
};

const bookController = {
  addSingleBook,
  getAllBooks,
  getSpecificBook,
  updateSingleBook,
  deleteSingleBook,
};
export default bookController;
