const express = require('express');
const app = express();
const cusuarios = require('../controller/C_usuario');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Obtiene todos los usuarios
const{verificaToken} = require('../src/middleware/autenticacion')
app.get('/usuarios',verificaToken,function(req, res, next) {
    
    cusuarios.getAll()
    .then(function(users){
        res.json(users);
    })
    .catch(()=>{
        res.json(err);
    })
});

app.get('/usuario/:id',verificaToken,function(req, res, next) {
    let id = req.params.id;
    ccliente.getById(id)
    .then((usuario)=>{
        res.send(usuario);
    })
    .catch(err =>{
        res.send(err);
    })
});

app.post('/usuario', [verificaToken,urlencodedParser], function (req, res) {
    let body = req.body;
    cusuarios.saveUser(body)
    .then((response)=>{
        return res.status(200).json({
            ok:true,
            message:"Usuario guardado correctamente"
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            ok:false,
            message:"Error al guardar: "+err
        })
    })
});
module.exports = app;