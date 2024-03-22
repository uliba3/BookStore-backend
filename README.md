<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">BOOKSTORE-BACKEND</h1>
</p>
<p align="center">
    <em>Empowering Your Readings, One Backend at a Time</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/uliba3/BookStore-backend?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/uliba3/BookStore-backend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/uliba3/BookStore-backend?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/uliba3/BookStore-backend?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running BookStore-backend](#-running-BookStore-backend)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

BookStore-backend is a server-side application that powers an online bookstore. It leverages Node.js and Express for handling HTTP requests, interfaces with MongoDB for data management, and utilizes JSON Web Tokens for user authentication. Hosted on fly.io, and dockerized for streamlined deployment, the project ensures secure, responsive browsing, user authentication and interaction with diverse book inventory via Google Books API integration. [Live demo](https://bookstore-backend.fly.dev/)

<div style="display: flex; justify-content: space-between;">
  <img src="dist\assets\bookStoreListTransparent-xv8MKAH4.gif" alt="book store books gif" width="400">
  <img src="dist\assets\bookStoreSearchResultTransparent-0kovegeJ.gif" alt="book store book gif" width="400">
</div>

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project follows an **MVC architecture**, with a clear separation between data management and application layers. Built on Node.js and Express.js |
| 🔩 | **Code Quality**  | Logical layout, consistent coding style, and clear comments suggest **good code quality**. |
| 📄 | **Documentation** | Lacks proper documentation, explanations about the API routes, or comments in the code make it a challenge to understand the business logic. |
| 🔌 | **Integrations**  | Key integrations include **MongoDB** for data storage, **Google Books API** for book searching, and **fly.io platform** for deployment. |
| 🧩 | **Modularity**    | Code is structured into modules for ease of maintenance and reuse, promoting good **modularity** and **reusability**. |
| 🧪 | **Testing**       | Uses **Jest** for testing in conjunction with **supertest** for endpoint testing and **jsdom** for JavaScript testing in a browser-like environment. |
| ⚡️  | **Performance**   | CPU and memory allocation managed by the `fly.toml` configuration file ensuring good performance. |
| 🛡️ | **Security**      | Implemented security measures include **jsonwebtoken** for access control, **bcrypt** for password hashing, and **cors** to prevent cross-site request forgery attacks. |
| 📦 | **Dependencies**  | Key dependencies: **toml**, **axios**, **mongodb-memory-server**, **mongoose**, **express**, **jsonwebtoken**, and **bcrypt**. |
| 🚀 | **Scalability**   | Able to handle increased traffic due to event-driven, non-blocking nature of **Node.js**. Architecture allows **easy scaling horizontally**. |


---

##  Repository Structure

```sh
└── BookStore-backend/
    ├── Dockerfile
    ├── README.md
    ├── dist
    │   ├── assets
    │   │   ├── bookStoreListTransparent-xv8MKAH4.gif
    │   │   ├── bookStoreSearchResultTransparent-0kovegeJ.gif
    │   │   ├── bookStoreSearchTransparent-Ft5nrM7Q.gif
    │   │   ├── favicon-mnqlIUdA.ico
    │   │   ├── fewBooksLeftTransparent-nOddKqCy.png
    │   │   ├── fewBooksRightTransparent-3BRpY0za.png
    │   │   ├── index-Vetnxr0g.js
    │   │   ├── index-viiGMvsL.css
    │   │   ├── stackOfBooksTransparent-325Lcrd2.png
    │   │   └── stack_of_books_transparent-65z_GRK_.png
    │   └── index.html
    ├── fly.toml
    ├── index.js
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── requests
    │   ├── get_all_books.rest
    │   └── post_new_book.rest
    └── src
        ├── controllers
        │   ├── GoogleBooks.js
        │   ├── History.js
        │   ├── Login.js
        │   ├── Users.js
        │   └── Wishlist.js
        ├── models
        │   └── user.js
        └── utils
            └── verify.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [fly.toml](https://github.com/uliba3/BookStore-backend/blob/master/fly.toml)                   | This code is a configuration file for the bookstore-backend application, hosted on the fly.io platform. It determines the primary server region, server ports, and other environment variables, like Google Books API's URL. It aids in managing HTTP services, like enforcing HTTPS and controlling server behavior. Plus, it sets parameters for the virtual machine, such as CPU and memory allocation. All these contribute to maintaining the backend's performance and functionality.                                                                            |
| [Dockerfile](https://github.com/uliba3/BookStore-backend/blob/master/Dockerfile)               | The code snippet is a Dockerfile that defines the process for creating a Docker image for the BookStore-backend application. It adopts a multi-stage build process to reduce the final image size. After setting a working directory, defining environment variables, and installing necessary dependencies, it copies and installs the application code. Lastly, it exposes port 3000 and sets the default command to start the server using Node.js.                                                                                                                 |
| [package.json](https://github.com/uliba3/BookStore-backend/blob/master/package.json)           | The specified code represents the package.json from the BookStore-backend repository. It outlines key details about this application, including its name, version, and main file. It also contains the scripts for development and testing. The project’s dependencies highlight that it is a Node.js application, using express for handling requests, mongoose for interacting with MongoDB, and jsonwebtoken for user authentication. The devDependencies specify tools used for development, including jest for testing and nodemon for continuous server updates. |
| [index.js](https://github.com/uliba3/BookStore-backend/blob/master/index.js)                   | The code initiates the backend of a Bookstore application, which links to a MongoDB database and enables different API routes for GoogleBook search, user management, login, browsing history, and wishlist. It uses Express for server operations, applies middlewares for CORS, static file serving, and JSON parsing, and depends on environment variables for configuration.                                                                                                                                                                                       |
| [jest.config.js](https://github.com/uliba3/BookStore-backend/blob/master/jest.config.js)       | This `jest.config.js` file is the configuration setup for the Jest testing framework used in the BookStore-backend repository. Its purpose is to specify running Jest tests in a Node.js environment, crucial for testing the Node.js backend functionalities such as controllers for GoogleBooks, History, Login, Users, and Wishlist, and the utility functions.                                                                                                                                                                                                     |
| [package-lock.json](https://github.com/uliba3/BookStore-backend/blob/master/package-lock.json) | This code snippet is part of the structure of BookStore-backend. It defines the organization of various elements and files, like the Dockerfile for containerization, README, and a dist directory that contains assorted assets such as imagery and icons. It is crucial for understanding and navigating the repository's structure as it provides a visual overview of the backend codebase for the BookStore application.                                                                                                                                          |

</details>

<details closed><summary>requests</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                         |
| [get_all_books.rest](https://github.com/uliba3/BookStore-backend/blob/master/requests/get_all_books.rest) | This code snippet details an API endpoint that's central to the BookStore's backend repository. Its primary function is to retrieve all books in the database, serving as a crucial medium for any front-end calls desiring a full list of the available books. It structures the server's responses and its interactions with the book data model.         |
| [post_new_book.rest](https://github.com/uliba3/BookStore-backend/blob/master/requests/post_new_book.rest) | The code snippet is a RESTful request script from the BookStore-backend repository. It is used for adding a new book to the database using the POST method. This occurs via the /api/books endpoint and is integral for updating the repository's content dynamically. The data structure includes key book fields like title, authors, and identification. |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [verify.js](https://github.com/uliba3/BookStore-backend/blob/master/src/utils/verify.js) | This code snippet is found in the verify.js file under utils in the BookStore-backend repository. The function verifyRequest is crucial as it authenticates requests by checking if the incoming request has a valid JSON Web Token. If the token is valid, the function allows the request to proceed; if not, it sends a 401 Unauthorized response. This contributes to the secure operation of the system, ensuring only authorized transactions occur. |

</details>

<details closed><summary>src.models</summary>

| File                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [user.js](https://github.com/uliba3/BookStore-backend/blob/master/src/models/user.js) | This code snippet, located in src/models/user.js, outlines the data model for a User within the BookStore-backend repository. Each User has unique username, password hash, history and wishlist attributes. The history and wishlist both include arrays of book objects. A special transformation occurs when converting a User object to JSON to safeguard sensitive data, such as password hashes, from exposure. The User schema uses a unique validator to ensure usernames are distinct. |

</details>

<details closed><summary>src.controllers</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [History.js](https://github.com/uliba3/BookStore-backend/blob/master/src/controllers/History.js)         | This code in History.js is part of the BookStore-backend repository, which predominantly serves as the backend for a book store application. Specifically, History.js handles operations related to a user's books history in the Book Store.                                                         |
| [Users.js](https://github.com/uliba3/BookStore-backend/blob/master/src/controllers/Users.js)             | The `Users.js` in the `src/controllers` directory handles user-related functionalities in the BookStore-backend repository. It includes critical features like user creation with hashed passwords, retrieval of all users, deletion of all users, or a single user by id. The code mainly helps in managing user data with proper security measures and exposes necessary routes for the app's frontend.                                              |
| [Login.js](https://github.com/uliba3/BookStore-backend/blob/master/src/controllers/Login.js)             | The referenced snippet, found in src/controllers/Login.js, is integral to user authentication in the BookStore-backend repository. It securely handles user login requests by verifying the user's credentials, generates a JWT for authenticated users, and returns the token along with user information in response. Incorrect credentials result in an error message. The JWT expiration time is set to one hour.                                  |
| [GoogleBooks.js](https://github.com/uliba3/BookStore-backend/blob/master/src/controllers/GoogleBooks.js) | The GoogleBooks.js script is an integral part of the backend application within the context of the BookStore system. This file creates a router leveraging Express.js to fetch book data from Google Books API based on user's search keywords or a specific book ID. Besides the basic information, it also scrapes and manipulates raw HTML data to extract book descriptions. In case of errors, it responds with an internal server error message. |
| [Wishlist.js](https://github.com/uliba3/BookStore-backend/blob/master/src/controllers/Wishlist.js)       | The code in the Wishlist.js file plays a key role in the BookStore-backend repository, primarily responsible for managing user wishlists. Within the broader architecture, it interfaces with the user model and handles fetch, add, and delete operations for books on the user's wishlist.                                                                                                                                                           |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the BookStore-backend repository:

```sh
git clone https://github.com/uliba3/BookStore-backend
```

2. Change to the project directory:

```sh
cd BookStore-backend
```

3. Install the dependencies:

```sh
npm install
```

###  Running BookStore-backend

Use the following command to run BookStore-backend:

```sh
node app.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/uliba3/BookStore-backend/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/uliba3/BookStore-backend/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/uliba3/BookStore-backend/issues)**: Submit bugs found or log feature requests for Bookstore-backend.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/uliba3/BookStore-backend
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---