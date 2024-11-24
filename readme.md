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

tsx
git clone https://github.com/marufhossain55/bookshop_B4A2_L2.git
cd bookshop_B4A2_L2 2. Install dependencies:

tsx
npm install 3. Set up environment variables:
Create a .env file in the root directory and add the following variables:

tsx
PORT=5000
MONGO_URI=your_mongodb_uri

### Running Locally

1. Start the server:

tsx
npm run dev

2. Visit the application:
   Open http://localhost:5000 in your browser.

📖 API Documentation

1. Create a Bike
   Endpoint: POST /api/addBook
   Request Body:

tsx
{
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"price": 10,
"category": "Fiction",
"description": "A story about the American dream.",
"quantity": 100,
"inStock": true
}
Response:

tsx

{
"message": "Book created successfully",
"success": true,
"data": {
"\_id": "648a45e5f0123c45678d9012",
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"price": 10,
"category": "Fiction",
"description": "A story about the American dream.",
"quantity": 100,
"inStock": true,
"createdAt": "2024-11-19T10:23:45.123Z",
"updatedAt": "2024-11-19T10:23:45.123Z",
}
}

2. Get All Bikes
   Endpoint: GET /api/products

3. Get a Bike by ID
   Endpoint: GET /api/products/:bookId

4. Update a Bike
   Endpoint: PUT /api/products/:bookId

5. Delete a Bike
   Endpoint: DELETE /api/products/:bookId

6. Place an Order
   Endpoint: POST /api/orders/placeOrder

7. Get Total Revenue
   Endpoint: GET /api/orders

(For detailed API documentation, refer to the /docs directory or API testing collection shared.)

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
