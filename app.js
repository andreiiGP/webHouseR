// creasion de costant y requerimos express
const { json } = require('express');
const express = require('express');
const dotenv = require('dotenv'); //llamamos valiables de entorno 

const jwt = require('jsonwebtoken')// inicio de sesion 

// express nos retorna una costante app o servidor 
const app = express();
// llamamos a la plantilla de visualizacion ejs 
const session = require('express-session') // variables de sesion 
 app.use(session({
     secret:'secret',
     resave:true,
     saveUninitialized:true
}));


app.set('view engine','ejs')

// funcion interna de express apra capturar datos  
app.use(express.urlencoded({extended:false}));
app.use(express(json));
//
// traemos las varibles de entorno  
dotenv.config({path: './env/.env'})

// se llama a mi extencion router que es el que llma las vistas y sean funcionales . desdeaca se pueden correr 
app.use('/',require('./router'))
// nos permite usar los estilos (CSS) en nustro servidor 
app.use(express.static('public')); 

// ponemos el puerto deonde va a escuchar nuestra paina web 
app.listen(5000,()=>{
    // cuando aranque dejamos mensaje en consola que se ejecuta en el puerto 
    console.log('Server corriendo en http://localhost:5000');
});
