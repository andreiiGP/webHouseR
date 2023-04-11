const conexion = require('../database/db');
require('../database/db'); // requerimos la base de datos 
// creacion de una costante para encriptar las cotraseñas 
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const { request, response } = require('express');



// metodo registrar usuario 
exports.registro = async (req, res) => {

  const Cedula = req.body.cedula;
  const Nombre = req.body.nombre;
  const Apellido = req.body.apellido;
  const Correo = req.body.correo;
  const Telefono = req.body.telefono;
  const User = req.body.nombuser;
  const Pass = req.body.pass;
  const Rol = req.body.rol;
  let passswordHas = await bcryptjs.hash(Pass, 8)
  conexion.query('INSERT INTO users SET ? ', { Cedula: Cedula, Nombre: Nombre, Apellido: Apellido, Correo: Correo, Telefono: Telefono, User: User, password: passswordHas, Rol: Rol }, (error, result) => {

    if (error) {
      console.log(error)

    }
    else {
      res.render('registro', {

        alert: true,
        alertTitle: 'Registro',
        alertMessage: 'Registro Exitoso!!!',
        alertIcon: 'success',
        showConfirmButton: false,
        timer: 2000,
        ruta: 'loguin'
      })
    }
  })
}

exports.registroclas = async (req, res) =>{

  const Nombre=req.body.nombre;
  const Informacion= req.body.informacion;
  const Contacto= req.body.contacto;
  const Cedula= req.body.cedula;
  conexion.query('INSERT INTO clasificados SET ? ',{Nombre:Nombre,Informacion:Informacion,Contacto:Contacto,Cedula:Cedula},(error, result) => {
    
    if (error) {
      console.log(error)

    }
      res.render('inicio')
  })
}

// console.log(Cedula+"-"+Nombre+"-"+Apellido+"-"+Email+"-"+Telefono+"-"+Nombuser+"-"+Pass+"-"+Rol); 
exports.ingre = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;

  if (user && pass) {
    conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results) => {
      if (results.length > 0) {
        // Si hay resultados, verificar la contraseña
        const veri = await bcryptjs.compare(pass, results[0].password);
        if (veri == true) {
          // Contraseña válida
          res.render('loguin', {
            alert: true,
            alertTitle: 'Conexion Exitosa!!',
            alertMessage: 'LOGUIN CORRECTO  ',
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 1500,
            ruta: 'inicio'
          })
        } else {
          // Contraseña incorrecta
          res.render('loguin', {
            alert: true,
            alertTitle: 'Error',
            alertMessage: 'Contraseña Incorrecta ',
            alertIcon: 'error',
            showConfirmButton: true,
            timer: false,
            ruta: 'loguin'
          })
        }
      } else {
        // Usuario no encontrado
        res.render('loguin', {
          alert: true,
          alertTitle: 'Error',
          alertMessage: 'Usuario no encontrado ',
          alertIcon: 'error',
          showConfirmButton: true,
          timer: false,
          ruta: 'loguin'
        })
      }
    });
  } else {
    // Datos incompletos
    res.render('loguin', {
      alert: true,
      alertTitle: 'Advertencia',
      alertMessage: 'INGRESE USUARIO O CONTRASEÑA  ',
      alertIcon: 'warning',
      showConfirmButton: true,
      timer: 1500,
      ruta: 'loguin'
    })
  }
};

/* codigo de la consulta de la tabal clasificados  */
