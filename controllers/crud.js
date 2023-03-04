const conexion = require('../database/db');

require('../database/db');

// metodo registrar usuario 
exports.save=(req,res)=>{

    const Cedula = req.body.cedula;
    const Nombre = req.body.nombre;
    const Apellido = req.body.apellido;
    const Correo = req.body.correo;
    const Telefono = req.body.telefono;
    const User = req.body.nombuser;
    const Pass = req.body.pass;
    const Rol = req.body.rol;

    conexion.query('INSERT INTO usuarios SET ? ',{Cedula:Cedula,Nombre:Nombre,Apellido:Apellido,Correo:Correo,Telefono:Telefono,User:User,Pass:Pass,Rol:Rol},(error,result)=>{

        if (error) 
        {
            console.log(error);
        } else 
        {
            res.redirect('/loguin')
        }
    })

    }
    // console.log(Cedula+"-"+Nombre+"-"+Apellido+"-"+Email+"-"+Telefono+"-"+Nombuser+"-"+Pass+"-"+Rol); 
   

