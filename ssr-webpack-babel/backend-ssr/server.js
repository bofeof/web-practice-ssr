require('dotenv').config();

import path from 'path';
import fs from 'fs';

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import express from 'express';

import App from '../frontend-ssr/src/components/App/App.js';

const process = require('process');

const { PORT = 3000, NODE_ENV = 'development' } = process.env;

const app = express();

app.get('/', (req, res) => {
  const htmlApp = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('./build-ssr/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: err });
    }
    res.send(data.replace('<div id="root"></div>', `<div id="root">${htmlApp}</div>`));
  });
});

app.use(express.static('./frontend-ssr/public'));
app.use(express.static(path.join(__dirname, '../build-ssr')));

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}, env: ${NODE_ENV}`);
});
