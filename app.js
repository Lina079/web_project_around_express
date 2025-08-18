const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', routes);

app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});
// 500 genérico
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
