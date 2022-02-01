const express = require('express')
const mysql = require('mysql2');
const bcriptjs = require('bcryptjs')
const router = express.Router;


// agregar usuario
const addUser = (req, res)=>{
    req.getConnection((err, conn)=>{
        if (err) return(err);

        var salt =bcriptjs.genSaltSync(10);
        req.body.password = bcriptjs.hashSync(req.body.password.toString(), salt);
        console.log(req.body);
        
        conn.query('INSERT INTO usuario set ?',[req.body], (err, rows)=>{
            if (err) return res.send(err);

            res.send('Usuario agregado...');
        });
    });
}

// actualizar usuario
const updateUser = (req, res)=>{
    req.getConnection((err, conn)=>{
        if (err) return (err);

        var salt = bcriptjs.genSaltSync(10);
        req.body.password = bcriptjs.hashSync(req.body.password.toString(), salt);
        console.log(req.body);
        conn.query('UPDATE usuario set ? WHERE user_id=?', [req.body, req.params.id], (err, rows)=>{
            if (err) return res.send(err);

            res.send('Usuario actualizado...');
        });
    });
}


//listar todo
const findAllUser =(req, res)=>{
    req.getConnection((err,conn)=>{
        if (err) return(err);

        conn.query('SELECT * FROM product', (err, rows)=>{
            if (err) return (err);

            res.json(rows);
        })
    })
}

module.exports = {findAllUser, addUser, updateUser}; 