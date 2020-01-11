const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const Usuario = require('../controller/C_login');

app.post('/login',(req,res)=>{
    let body = req.body;
    console.log("body",body);
    Usuario.getLogin(body.email,body.password)
    .then((resp)=>{
        if(!resp.exito){
            res.status(401).json({
                exito:false,
                message:resp.message
            })
        }else{
            res.status(200).json({
                exito:true,
                message:resp.message,
                usuario: resp.usuario_logueado,
                token:resp.token
            })
        }
    })
    .catch((err)=>{
        res.status(401).json({
            exito:false,
            message:err
        })
    })
});



module.exports = app;