const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
var bodyParser = require('body-parser')

// routes
const books = require('./routes/api/books');
const product = require('./routes/api/product');
const pay_product = require('./routes/api/pay_product');
const get_transaction = require('./routes/api/get_transaction');

const app = express();

// Connect Database
// connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);
// app.use('/api/get_transaction', get_transaction);
// app.use('/api/pay_product', pay_product);
app.use('/api/product', product);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));