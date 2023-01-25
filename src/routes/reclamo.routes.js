import {Router} from 'express';
import {pool} from '../conexionDB.js';

const router=Router();

router.get("/api/reclamo/id/:id",async (req,res)=>{
    const {id}=req.params;
    const [results]=await pool.query("SELECT reclamo.titulo,reclamo.domicilio,reclamo.nombre,reclamo.apellido,reclamo.telefono, reclamo.fecha,reclamo.mensaje,reclamo.idUsuario,reclamo.actuacion_simple,reclamo.division,reclamo.estado, usuario.usuario FROM reclamo INNER JOIN usuario ON reclamo.idUsuario = usuario.idUsuario WHERE idReclamo=?",[id]);
    res.json(results);
});
router.get("/api/reclamo/:division",async(req,res)=>{
    const {division}=req.params;
    const [results]=await pool.query("SELECT * FROM `reclamo` WHERE division=?",[division]);
    res.json(results);
})

router.post("/api/reclamo",async (req,res)=>{
    const {titulo, domicilio, nombre, apellido,telefono,fecha,mensaje,idUsuario,actuacion_simple,division,estado}=req.body;
    const [results]=await pool.query("INSERT INTO reclamo(titulo,domicilio,nombre,apellido,telefono,fecha,mensaje,idUsuario,actuacion_simple,division,estado) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[titulo, domicilio, nombre, apellido,telefono,fecha,mensaje,idUsuario,actuacion_simple,division,estado]);
    res.json(results);
})


export default router;