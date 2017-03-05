const express = require('express');
//  middlewares
const errorHandler = require('./middlewares/error_handler');
// routers
const searchRouter = require('./routes/search_router');

const app = new express();
app.use('/search', searchRouter);
app.use(errorHandler);

module.exports = app;
