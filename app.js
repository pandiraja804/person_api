/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');  
require('dotenv').config();
const mongoose = require('mongoose');

const userRouter = require('./src/routers/user.router');

const app = express();
const PORT = process.env.port || 3001;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbURI  = process.env.dbURI;

mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use('/api', userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).json({
        message: 'No such route exists',
    });
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: 'Error Message',
    });
});


app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));
