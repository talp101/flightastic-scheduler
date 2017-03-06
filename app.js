const express = require('express');
const bodyParser = require('body-parser');
const agenda = require('./lib/agenda');
var Agendash = require('agendash');

//  middlewares
const errorHandler = require('./middlewares/error_handler');
// routers
const searchRouter = require('./routes/search_router');

const app = new express();
app.use(bodyParser.json());
app.use('/agendash', Agendash(agenda));
app.use('/search', searchRouter);
app.use(errorHandler);

module.exports = app;
