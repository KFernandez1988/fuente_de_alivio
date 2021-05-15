// application main mechanics
// importing section
const express = require('express');
// const ejs = require('ejs');

const log = require('debug')('web:logging');
const error = require('debug')('web:error');

const API = require('./utils/API');
const publicRoutes = require('./routes/public');
const adminDecisionsRoute = require('./routes/adminDecisions');
const adminOptionRoute = require('./routes/adminOptions');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(API);

app.set('view engine', 'pug');

app.set('views', `${__dirname}/views`);

app.use('/', publicRoutes);

app.use('/admin/decisions', adminDecisionsRoute);
app.use('/admin/options', adminOptionRoute);

// configuration section
app.use(express.static('public'));

app.use((req, res, next) => {
  log('\nRUNS ONCE FOR EVERY REQUEST');
  setTimeout(() => { next(); }, 2000);
}, (req, res, next) => {
  log('WILL RUN WHEN NEXT IS CALLED');
  next();
});

app.use('/about', (req, res, next) => {
  log('RUNS ONLY ON the about page');
  next(new Error(' Not authorize'));
});

app.use((err, req, res) => {
  error('ERROR FOUND: ', err);
  res.sendStatus(500);
});
// exporting main application
module.exports = app;
