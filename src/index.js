const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require("dotenv").config();

const usersRoute = require("./routes/users");
const comentariosRoute = require('./routes/comentarios');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors())
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send("Api funcionando! :D")
});

app.use('/api', usersRoute);
app.use('/api/comentarios', comentariosRoute);

//Conexion a MongoDB
mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Conectado a la base de datos en MongoDB"))
    .catch((eror) => console.log(error));

app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto", port);
});