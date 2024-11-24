"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("./product.controller"));
const router = express_1.default.Router();
router.post('/addBook', product_controller_1.default.addSingleBook);
router.get('/', product_controller_1.default.getAllBooks);
router.get('/:bookId', product_controller_1.default.getSpecificBook);
router.put('/:bookId', product_controller_1.default.updateSingleBook);
router.delete('/:bookId', product_controller_1.default.deleteSingleBook);
const BookRouter = router;
exports.default = BookRouter;
