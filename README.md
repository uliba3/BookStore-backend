# Book Store Web Application

This is a web application for searching books, managing wishlists and history. Users can create accounts, log in, and perform various book-related actions. [Live demo](https://bookstore-backend.fly.dev/)

<div style="display: flex; justify-content: space-between;">
  <img src="dist\assets\bookStoreListTransparent-xv8MKAH4.gif" alt="book store books gif" width="400">
  <img src="dist\assets\bookStoreSearchResultTransparent-0kovegeJ.gif" alt="book store book gif" width="400">
</div>

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Book search: Users can search for books using the Google Books API.
- Wishlist management: Users can add books to their wishlist for future reference.
- History management: Users can view their history to keep track of previously read books.

## Technologies Used

- **Frontend**: React.js, React Router, Redux, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB
- **API**: Google Books API
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB with Mongoose ODM
- **Others**: Axios (HTTP client), bcrypt (password hashing), dotenv (environment variables)

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-folder>`
3. Install dependencies for both frontend and backend:
4. Set up environment variables:
- Create a `.env` file in the `server` directory.
- Add the following variables:
  ```
  PORT=<port-number>
  MONGODB_URI=<mongodb-uri>
  JWT_SECRET=<jwt-secret>
  ```
5. Run the backend server: `npm start` inside the `server` directory.
6. Run the frontend development server: `npm start` inside the `client` directory.

## API Endpoints

- `/api/history`: Manage search history (GET, POST, DELETE)
- `/api/wishlist`: Manage wishlist (GET, POST, DELETE)
- `/api/booksSearch`: Search books using Google Books API (GET)
- `/api/users`: Manage user accounts (GET, POST)
- `/api/login`: User authentication (POST)

## Usage

- Visit the website and sign up for a new account or log in if you already have one.
- Use the search bar to search for books.
- Click on a book to view details.
- Add books to your wishlist or history.
- Log out when done.