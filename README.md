# NestJS CRUD API for Product Management

This project is a complete backend API for a product management application, built with the NestJS framework. It provides all the necessary endpoints for CRUD (Create, Read, Update, Delete) operations on products and is configured for deployment on Vercel.

---

## ✨ Features

- **Full CRUD Functionality**: Endpoints for creating, reading, updating, and deleting products.
- **Database Integration**: Uses MongoDB with Mongoose and Typegoose for data modeling and persistence.
- **Validation**: Implements `class-validator` and `class-transformer` for robust request data validation.
- **CORS Enabled**: Configured to allow requests from a specific frontend application URL.
- **Ready for Deployment**: Includes a `vercel.json` file for easy deployment to Vercel.

---

## 🛠️ Technologies Used

- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database for storing product data.
- **[Mongoose](https://mongoosejs.com/)**: An elegant MongoDB object modeling tool for Node.js.
- **[Typegoose](https://typegoose.github.io/typegoose/)**: A library for creating Mongoose models with TypeScript classes.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Vercel](https://vercel.com/)**: A cloud platform for static sites and Serverless Functions.

---

## 📂 Project Structure

The project follows the standard NestJS project structure:

```
src/
├── app.controller.spec.ts  # Unit test for the main controller
├── app.controller.ts       # Main application controller
├── app.module.ts           # Main application module
├── app.service.ts          # Main application service
├── main.ts                 # Application entry file
└── products/               # Products module
    ├── dto/                # Data Transfer Objects for products
    │   ├── create-product.dto.ts
    │   └── update-product.dto.ts
    ├── models/             # Data models (Mongoose Schema)
    │   └── product.model.ts
    ├── products.controller.ts # Controller for product routes
    ├── products.module.ts     # Module that encapsulates product logic
    └── products.service.ts    # Service with business logic for products
```

---

## 🗄️ Database

This project uses **MongoDB** as its database. The connection is managed through the `MongooseModule` in `app.module.ts`. Product data is structured according to the schema defined in `src/products/schemas/product.schema.ts` using Typegoose.

---

## ↔️ API Endpoints

The following endpoints are available for the `products` resource. The base URL is `/products`.

| Method | Endpoint           | Description                  |
| :----- | :----------------- | :--------------------------- |
| `GET`    | `/products`                | Get a list of all products.  |
| `GET`    | `/:id`             | Get a single product by ID.  |
| `POST`   | `/products`                | Create a new product.        |
| `PATCH`  | `/:id`             | Update an existing product.  |
| `DELETE` | `/:id`             | Delete a product by ID.      |

---

## ⚙️ Environment Variables

To run this project, you need to create a `.env` file in the root directory with the following variables:

- `DATABASE_URL`: The connection string for your MongoDB database.
- `JWT_SECRET`: A secret key for JWT token generation (if you add authentication).
- `CORS_ORIGIN`: The URL of the frontend application that will be allowed to make requests (e.g., `http://localhost:3000`).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- A [MongoDB](https://www.mongodb.com/try/download/community) database instance (local or cloud).

### Installation and Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nestcrud.git
    cd nestcrud
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root and add the variables mentioned above.

4.  **Run the application:**
    ```bash
    # Development mode with watch
    npm run start:dev
    ```
    The application will be running on `http://localhost:3000`.

---

## ☁️ Deployment

This project is configured for deployment on **Vercel**. The `vercel.json` file ensures that the NestJS application is correctly built and served as a serverless function.

To deploy, simply connect your GitHub repository to Vercel and let it build and deploy automatically. Remember to set the environment variables in the Vercel project settings.

<br>

<p align="left">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
