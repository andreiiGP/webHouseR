// los router son los que nos van apermitir llamar nustras vetanas de ususrio o nustro fronend


const { error } = require('console');
const express = require ('express');
const router = express.Router();
const conexion = require('./database/db');


// se llama a la ventana de principal en la reiz del directorio  
router.get('/',(req,res)=>{

        res.render('index.ejs')

})
// se llama a la ventana de loguin 
router.get('/loguin',(req,res)=>{

    res.render('loguin')
})
// se llama a la ventana de registro  
router.get('/registro',(req,res)=>{

    res.render('registro')
})
// se llama a la ventana inicio de ususarios 
router.get('/inicio',(req,res)=>{

    res.render('inicio')
})
// se llama el archivo controller a el app para ejecutar
const crud = require('./controllers/crud');

    router.post('/save',crud.save) // se trae el metodo guardar("save") para que se ejecute eel codigo de la ventana crud 

module.exports = router;