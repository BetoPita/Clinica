const express = require('express')
const app = express()
const ccliente = require('../controller/C_cliente');

//require('../controller/C_cliente').Save();


//Obtiene todos los clientes
app.get('/clientes', function(req, res, next) {
    ccliente.getAll().then(function(users) {
        res.json(users);
    }).catch(function(err) {
        // your error handling code here
    });
});
app.get('/cliente/:id', function(req, res, next) {
    let id = req.params.id;
    ccliente.getById(id)
    .then((cliente)=>{
        res.send(cliente);
    })
    .catch(err =>{
        res.send(err);
    })
});


var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/cliente', urlencodedParser, function (req, res) {
    let body = req.body;
    ccliente.saveCliente(body).then((response)=>{
        return res.status(200).json({
            ok:true,
            message:"Registro guardado correctamente"
        })
    }).catch((err)=>{
        return res.status(401).json({
            ok:false,
            message:"Error al guardar: "+err
        })
    })
    
    
    // // Table created
    // User.sync({force: true}).then(() => {
    //         User.create({
    //         nombre: body.nombre,
    //         apellido_paterno: body.apellido_paterno,
    //         apellido_materno: body.apellido_materno,
    //         fecha_nacimiento: body.fecha_nacimiento,
    //         telefono: body.telefono,
    //         ocupacion: body.ocupacion
    //     }).then((usuarioDB)=>{
    //         console.log(usuarioDB);
    //         return res.status(200).json({
    //             ok:true,
    //             user:usuarioDB
    //         });
    //     }).catch((err)=>{
    //         return res.status(400).json({
    //             ok:false,
    //             err
    //         });
    //     })
    // })
})
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id

    })
    return res;
})
app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
})


module.exports = app;