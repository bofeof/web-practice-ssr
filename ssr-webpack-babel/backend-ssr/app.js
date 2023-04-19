import path from 'path';
import fs from 'fs';

import ReactDOMServer from 'react-dom/server';
import express from 'express';

const process = require('process');

import App from '../frontend-ssr/src/components/App/App';

const { PORT = 3003 } = process.env;

const app = express();

app.get('/', (req, res) => {
  const htmlApp = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('../frontend-ssr/public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: err });
    }
    res.send(data.replace('<div id="root"></div>', `<div id="root">${htmlApp}</div>`));
  });
});

app.use(express.static(path.resolve(__dirname, '..', '/build')));

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
