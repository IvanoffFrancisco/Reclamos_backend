import {Router} from 'express';
import {pool} from '../conexionDB.js';

const router=Router();

router.get("/api/reclamo/id/:id",async (req,res)=>{
    const {id}=req.params;
    const [results]=await pool.query("SELECT reclamo.domicilio,reclamo.nombre,reclamo.apellido,reclamo.telefono, reclamo.dni,reclamo.fecha,reclamo.reclamo,reclamo.idUsuario,reclamo.actuacion_simple,reclamo.area,reclamo.estado,reclamo.coordenadasReclamo, usuario.usuario FROM reclamo INNER JOIN usuario ON reclamo.idUsuario = usuario.idUsuario WHERE idReclamo=?",[id]);
    res.json(results);
});
router.get("/api/reclamo/:area",async(req,res)=>{
    const {area}=req.params;
    const [results]=await pool.query("SELECT * FROM `reclamo` WHERE area=?",[area]);
    res.json(results);
})

router.post("/api/reclamo",async (req,res)=>{
    const {domicilio, nombre, apellido,telefono,dni,fecha,reclamo,idUsuario,actuacion_simple,area,estado, coordenadasReclamo}=req.body;
    const [results]=await pool.query("INSERT INTO reclamo(domicilio,nombre,apellido,telefono,dni,fecha,reclamo,idUsuario,actuacion_simple,area,estado,coordenadasReclamo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[domicilio, nombre, apellido,telefono,dni,fecha,reclamo,idUsuario,actuacion_simple,area,estado,coordenadasReclamo]);
    res.json(results);
})


export default router;