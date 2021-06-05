const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares');

const app = express();

app.use(morgan('common'));

app.use(helmet());

// client app url
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello! No content here atm ;)',
  });
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening at 'htttp://localhost:${port}`);
});
