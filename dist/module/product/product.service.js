"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("./product.model"));
//create a book
const addSingleBookService = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(book);
    return result;
});
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
const getAllBooksService = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    const regex = new RegExp(searchTerm, 'i');
    filter = {
        $or: [{ title: regex }, { author: regex }, { category: regex }],
    };
    const result = yield product_model_1.default.find(filter);
    return result;
});
//get single book
const getSpecificBookService = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(_id);
    return result;
});
//Update a Book
const updateSingleBookService = (_id, book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(_id, book, {
        new: true,
    });
    return result;
});
// Delete a Book
const deleteSingleBookService = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(_id);
    return result;
});
const BookService = {
    addSingleBookService,
    getAllBooksService,
    getSpecificBookService,
    updateSingleBookService,
    deleteSingleBookService,
};
exports.default = BookService;
