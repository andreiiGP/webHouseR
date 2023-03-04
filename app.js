// creasion de costant y requerimos express
const { json } = require('express');
const express = require('express');
// express nos retorna una costante app o servidor 
const app = express();
// llamamos a la plantilla de visualizacion ejs 
app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/',require('./router'))

app.use(express.static('public'));

// ponemos el puerto deonde va a escuchar nuestra paina web 
app.listen(3000,()=>{
    // cuando aranque dejamos mensaje en consola que se ejecuta en el puerto 
    console.log('Server corriendo en http://localhots:3000');
});

