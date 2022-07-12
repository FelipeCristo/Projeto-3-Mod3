const express = require('express');
const cors = require('cors');

const routes = require('./src/routes/personagens.route');
const connectDatabase = require('./src/database/database.js');

const port = 3000;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());
app.use('/personagens', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
