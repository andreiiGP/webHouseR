// creasion de costant y requerimos express
const express = require('express')
// express nos retorna una costante app o servidor 
const app = express()

app.get('/',(req,res)=>{

     
})


// ponemos el puerto deonde va a escuchar nuestra paina web 
app.listen(3000)
// cuando aranque dejamos mensaje en consola que se ejecuta en el puerto 
console.log('server on port ${3000}')