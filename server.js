const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// flow check
app.use((req, res, next) => {
  console.log(`
  🍒🍒🍒 FLOW METHOD 🍒🍒🍒
  URL: ${req.url}\n
  METHOD: ${req.method}\n`);
  return next();
});

/*** MAIN PAGE ***/
app.use(express.static(path.resolve(__dirname, './public')));

// catch all
app.use('*', (req, res, next) => {
  return res.status(404).send('Sorry, wrong page! Try again! 🤪');
});

// default error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'Internal Server Error' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`👀 Server listening on port: ${PORT}... 👀 `);
});

module.exports = app;