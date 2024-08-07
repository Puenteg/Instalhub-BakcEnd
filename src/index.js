
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const homeRoute = require('./routes/homeRoutes');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json()); // Para parsear JSON en las solicitudes

// Rutas
app.get('/', (req, res) => {
  res.send('Api funcionando! :D');
});
app.use('/api/home', homeRoute);

// Conexión a MongoDB
mongoose
  .connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos en MongoDB'))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log('El servidor está corriendo en el puerto', port);
});