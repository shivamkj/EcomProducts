# API Authentication using NodeJs

The REST API application for managing products for E-Commerce site. It based on Node.js & Express. Architecture is mix of MVC and clean architecture.

## Steps to setup the project

Step 1: Clone the repo & install the npm packages

```bash
git clone https://github.com/trulymittal/API-Authentication-NodeJs.git   # clone the repository
# cd into the directory/folder
npm i # install npm packages
npm i -g nodemon # install nodemon globally (if not installed)
```

Step 2: Configure environment variables by creating .env file and adding following values

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=YOUR_DB_NAME
ACCESS_TOKEN_SECRET=GENERATE_FROM_GENERATE_KEYS_FILE_IN_HELPER
REFRESH_TOKEN_SECRET=GENERATE_FROM_GENERATE_KEYS_FILE_IN_HELPER
```

Step 3: Start the devlopment server by running `npm start`

## Author

- [**Shivam Kumar Jha**](https://github.com/shivamkj)
