import {Router} from 'express';
import {pool} from '../conexionDB.js';

const router=Router();

router.post("/api/login",async (req,res)=>{
    const {usuario,contraseña}=req.body;
    const [results]=await pool.query('SELECT * FROM usuario WHERE usuario=? AND contraseña=?',[usuario,contraseña]);
    res.json(results);
});

router.post("/api/registro",async(req,res)=>{
    const {nombre, apellido, usuario, contraseña, numero_legajo, tipo_de_usuario}=req.body;
    const [results]=await pool.query("INSERT INTO usuario (nombre, apellido, usuario, contraseña, numero_legajo, tipo_de_usuario) VALUES (?,?,?,?,?,?)",[nombre, apellido, usuario, contraseña, numero_legajo, tipo_de_usuario]);
    res.json(results);
})

export default router;