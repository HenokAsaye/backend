# Task Manager API

A simple RESTful API for managing tasks, built with Node.js, Express, and MongoDB.

## Features

*   Create, Read, Update, and Delete tasks.
*   Stores data in a MongoDB database.
*   Provides a simple HTML status page at the root URL.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14.x or later recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)
*   [MongoDB](https://www.mongodb.com/try/download/community) instance (local or a cloud service like MongoDB Atlas).

## Setup

1.  **Clone the repository (if applicable) or download the files.**

2.  **Navigate to the project directory:**
    ```bash
    cd path/to/your/backend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

4.  **Create a `.env` file** in the root of the project directory ([c:\Users\hp\backend\.env](cci:7://file:///Users/hp/backend/.env:0:0-0:0)) with the following content:
    ```env
    MongoDB Connection URI
    Replace with your local MongoDB URI or your MongoDB Atlas connection string
    Example for local MongoDB:
    MONGO_URI=mongodb://localhost:27017/TaskManager 
    Example for MongoDB Atlas (ensure password is URL encoded if it contains special characters):
    MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database_name?retryWrites=true&w=majority

    # Port for the server
    PORT=5000
    ```
    *   Update `MONGO_URI` with your actual MongoDB connection string. If using a local MongoDB, ensure it's running.
    *   The `PORT` variable defines the port on which the server will run.

## Running the Application

To start the server with automatic restarts on file changes (using nodemon):

```bash
npx nodemon server.js
