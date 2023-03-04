const conexion = require('../database/db');
require('../database/db'); // requerimos la base de datos 
// creacion de una costante para encriptar las cotraseñas 
const  bcryptjs =require('bcryptjs')



// metodo registrar usuario 
exports.registro= async(req,res)=>{
    
    const Cedula = req.body.cedula;
    const Nombre = req.body.nombre;
    const Apellido = req.body.apellido;
    const Correo = req.body.correo;
    const Telefono = req.body.telefono;
    const User = req.body.nombuser;
    const Pass = req.body.pass;
    const Rol = req.body.rol;
    let passswordHas= await bcryptjs.hash(Pass,8)
    conexion.query('INSERT INTO usuarios SET ? ',{Cedula:Cedula,Nombre:Nombre,Apellido:Apellido,Correo:Correo,Telefono:Telefono,User:User,Pass:passswordHas,Rol:Rol},(error,result)=>{

        if(error){
            console.log(error)
                             
        }
        else{
            res.render('registro',{

                alert:true,
                alertTitle:'Registro',
                alertMessage:'Registro Exitoso!!!',
                alertIcon:'success',
                showConfirmButton:false,
                timer:4000,
                ruta:'loguin'
            })
        }
    })
    }
    // console.log(Cedula+"-"+Nombre+"-"+Apellido+"-"+Email+"-"+Telefono+"-"+Nombuser+"-"+Pass+"-"+Rol); 
   
exports.ingre= async(req,res)=>{}
/* 
    const User = req.body.user;
    const Pass = req.body.pass;

    if (!User || !Pass) {
        res.redirect('/inicio')
    }
    else
    {
        conexion.query('SELECT * FROM usuarios =?',[User],(error,result)=>{

            if(result.length== 0 || ! (bcryptjs.compare(Pass,result[0].Pass))){

                res.reder('/index')
            }
        })

        }   
    }

 */