"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderModel = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'email field is required'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email'],
        trim: true,
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: [true, 'Product reference is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'product must have single quantity'],
        min: [1, 'Quantity must be at least 1'],
        max: [100, 'please keep Quantity limit under 100 units'],
        validate: {
            validator: Number.isInteger,
            message: 'Quantity must be an integer number',
        },
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required'],
        min: [0, 'Total price must be positive'],
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.__v;
        },
    },
});
const orderModelSchema = (0, mongoose_1.model)('Order', orderModel);
exports.default = orderModelSchema;
