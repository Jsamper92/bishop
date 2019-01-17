const app = require('./app');
const bodyParser   = require('body-parser');


app
  .use(bodyParser.json())
  .use('/items', require('./controllers/items'))
  .all('*', (req, res) => res.sendStatus(404))
  .listen(3000);
