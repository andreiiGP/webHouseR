const mysql = require('mysql')  // se crea la conexion para la base dedatps 

// se crea una costante a la uel se le pasa la creacion de la conexion y sus parametros 
const conexion= mysql.createConnection({ 

    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE

 })
// se valida se hay errores de conexxion o no 
 conexion.connect((error)=>{

    if(error){

        console.error('Error de Conexion a base de datos : '+error);
    }
    else{
        console.log("Conexion a la base de datos exitosa");
    }
    
 })
 module.exports= conexion;