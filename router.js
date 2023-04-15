// los router son los que nos van apermitir llamar nustras vetanas de ususrio o nustro fronend


const { error } = require('console');
const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

// se llama a la ventana de principal en la reiz del directorio  
router.get('/', (req, res) => {

    res.render('index.ejs')

})
// se llama a la ventana de loguin 
router.get('/loguin', (req, res) => {

    res.render('loguin')
})
// se llama a la ventana de registro  
router.get('/registro', async (req, res) => {

    res.render('registro')
})
// se llama a la ventana inicio de ususarios y se pone la tabal desde mysql para mostar los clasificados
router.get('/inicio', (req, res) => {

    conexion.query('SELECT * FROM clasificados', (error, result) => {
        if (error) {
            throw error;
        }
        else {

            res.render('inicio', { results: result })
        }
    })


})

router.get('/in', (req, res) => {

    res.render('in.ejs')
})

// se llama el archivo controller a el app para ejecutar
const crud = require('./controllers/crud');

router.post('/registro', crud.registro) // se trae el metodo guardar("registro") para que se ejecute eel codigo de la ventana crud 
router.post('/ingre', crud.ingre)
router.post('/registroclas', crud.registroclas)
router.post('/eliminarclas', crud.eliminarclas)


const dotenv = require('dotenv')


router.get('/prueba', (req, res) => {



})




module.exports = router; // se exporta el modulo para poder utilizarlo donde lo requiera en este caso crudjs