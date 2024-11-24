"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = __importDefault(require("./order.controller"));
const router = express_1.default.Router();
router.post('/placeOrder', order_controller_1.default.orderSingleBook);
router.get('/', order_controller_1.default.totalRevenue);
const orderRoute = router;
exports.default = orderRoute;
