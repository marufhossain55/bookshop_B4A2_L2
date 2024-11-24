#Book Shop Management System 🚲
A full-stack application built with TypeScript, Express.js, and MongoDB to manage bike inventory, orders, and revenue calculation seamlessly.

## 🚀 Live Demo

Bike Store Live Application

([live URL ](https://2nd-assignment-mongo-db.vercel.app/))

## ✨ Features

- Product Management:
  - Create, read, update, and delete bikes (CRUD).
  - Filter bikes by name, category, or brand.
- Order Management:
  - Place an order for bikes.
  - Automatic inventory update after order placement.
  - Handle insufficient stock gracefully.
- Revenue Calculation:
  - Aggregate total revenue from orders.
- Error Handling:
  - Custom error messages for validation, missing resources, or server issues.

## 🛠 Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Language: TypeScript
- Tools: Postman, Git, Visual Studio Code
- Hosting: (Vercel)

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v22)
- MongoDB installed or access to a cloud MongoDB instance (e.g., MongoDB Atlas).
- Git installed.

### Installation

1. Clone the repository:

```
git clone https://github.com/marufhossain55/bookshop_B4A2_L2.git
cd bookshop_B4A2_L2
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables:
   Create a .env file in the root directory and add the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_uri
```

### Running Locally

1. Start the server:

```
npm run dev
```

2. Visit the application:
   Open http://localhost:5000 in your browser.

📖 API Documentation

1. Create a Book
   Endpoint: POST /api/products
   Request Body:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}
```

2. Get All Books
   Endpoint: GET /api/products

3. Get a Specific Book
   Endpoint: GET /api/products/:productId

4. Update a Books
   Endpoint: PUT /api/products/:productId

```json
{
  "price": 15,
  "quantity": 25
}
```

5. Delete a Book
   Endpoint: DELETE /api/products/:productId

6. Order a Book
   Endpoint: POST /api/orders

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
}
```

7. Calculate Revenue from Orders
   Endpoint: GET /api/orders/revenue
