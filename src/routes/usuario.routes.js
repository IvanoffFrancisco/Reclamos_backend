import {Router} from 'express';
import {pool} from '../conexionDB.js';

const router=Router();

router.post("/api/login",async (req,res)=>{
    const {usuario,password}=req.body;
    const [results]=await pool.query('SELECT * FROM usuario WHERE usuario=? AND password=?',[usuario,password]);
    res.json(results);
});

router.post("/api/registro",async(req,res)=>{
    const {nombre, apellido, usuario, password, numeroLegajo, tipoDeUsuario}=req.body;
    const [results]=await pool.query("INSERT INTO usuario (nombre, apellido, usuario, password, numeroLegajo, tipoDeUsuario) VALUES (?,?,?,?,?,?)",[nombre, apellido, usuario, password, numeroLegajo, tipoDeUsuario]);
    res.json(results);
})

export default router;
