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
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const orderSingleBookService = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const findBookId = yield product_model_1.default.findById(order === null || order === void 0 ? void 0 : order.product);
    if (!findBookId) {
        const result = {
            status: false,
            message: 'book not found!',
        };
        return result;
    }
    //   if (findBookId.quantity < order.quantity) {
    //     return result: any = { status: false, message: 'insufficient stock' }
    //   }
    if (findBookId.quantity < order.quantity) {
        return {
            status: false,
            message: 'Insufficient stock',
        };
    }
    if (order.totalPrice !== (findBookId === null || findBookId === void 0 ? void 0 : findBookId.price) * order.quantity) {
        const result = {
            status: false,
            message: 'please correct total price!',
        };
        return result;
    }
    findBookId.quantity -= order.quantity;
    if (findBookId.quantity === 0) {
        findBookId.inStock = false;
    }
    yield findBookId.save();
    const result = yield order_model_1.default.create(order);
    return {
        success: true,
        message: 'Order created successfully',
        data: result,
    };
});
// Calculate Revenue
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
        { $project: { _id: 0, totalRevenue: 1 } },
    ]);
    if (result.length === 0) {
        return { totalRevenue: 0 };
    }
    return result[0];
});
const orderService = { orderSingleBookService, calculateRevenue };
exports.default = orderService;
