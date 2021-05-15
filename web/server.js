// appliction server
const log = require('debug')('web:logging');

const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  log(`WEB listening on port ${port}`);
});
