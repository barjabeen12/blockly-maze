const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
var cors = require('cors');

app.listen(port, () => console.log(`App is live on port ${port}!`));
const corsConfig = {
  credentials: true,
  origin: true
};
app.use(cors(corsConfig));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'appengine', 'maze.html'));
  });
}
