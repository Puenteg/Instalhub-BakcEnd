const express = require("express");
const Comentarios = require("../models/comentarios");

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.info(req.params.id)
    try {
        const getComentarios = await Comentarios.find({ idBedrooms: id})
        console.info(getComentarios)
        res.send(getComentarios)
    } catch(error) {
        console.info(error)
        res.status(400).send({message: 'Error obtener los comentarios', error})
    }
})

router.post('', async (req, res) => {
    const comentario = req.body;
    console.info(req)
    console.info(comentario)
    try {
        const newComentario = new Comentarios(comentario);
        const response = await newComentario.save();
        res.send(response)
    } catch (error) {
        console.info(error)
        res.status(400).send({message: 'Error al intentar guardar el comentario', error})
    }
});


module.exports = router;