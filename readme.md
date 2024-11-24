Features
Product Management (Books)
Create a Book
Add a new book with details such as title, author, price, category, description, and stock quantity.

Get All Books
Retrieve all books or filter by title, author, or category using a search term.

Get a Specific Book
Fetch detailed information about a specific book using its ID.

Update a Book
Update book details such as price, quantity, and stock status.

Delete a Book
Remove a book from the store.

Order Management
Place an Order

Create an order by specifying the book ID, quantity, and customer email.
Automatically reduces the stock of the book.
Marks the book as out of stock if quantity reaches zero.
Handles insufficient stock gracefully with error messages.
Calculate Revenue

Aggregates total revenue from all orders placed in the store.
Error Handling
Detailed error messages with validation errors and stack traces.
Custom error responses for validation and resource not found scenarios.
Tech Stack
Backend: Express.js with TypeScript
Database: MongoDB (with Mongoose ODM)
Environment Management: dotenv
Runtime: Node.js
Installation and Setup

1. Clone the Repository
   bash
   Copy code
   git clone https://github.com/yourusername/bookstore-api.git
   cd bookstore-api
2. Install Dependencies
   bash
   Copy code
   npm install
3. Set Up Environment Variables
   Create a .env file in the root directory and add the following:

makefile

PORT=5000
MONGODB_URI=your-mongodb-connection-string 4. Run the Application

For development mode:

npm run dev
For production mode:

npm run build
npm start
API Endpoints

1. Product Routes
   Create a Book: POST /api/products
   Request Body:

json

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

json

{
"message": "Book created successfully",
"success": true,
"data": { ...book details }
}
Get All Books: GET /api/products
Query: /api/products?searchTerm=Fiction

Get a Specific Book: GET /api/products/:productId

Update a Book: PUT /api/products/:productId
Request Body:

json

{
"price": 15,
"quantity": 25
}
Delete a Book: DELETE /api/products/:productId

2. Order Routes
   Place an Order: POST /api/orders
   Request Body:

json

{
"email": "customer@example.com",
"product": "648a45e5f0123c45678d9012",
"quantity": 2,
"totalPrice": 30
}
Calculate Revenue: GET /api/orders/revenue
Response:

json

{
"message": "Revenue calculated successfully",
"status": true,
"data": {
"totalRevenue": 450
}
}
