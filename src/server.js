import express, { json } from 'express';

import Usuario from './routes/usuario.routes.js';
import Reclamo from './routes/reclamo.routes.js';

const app=express();
import "./config.js";

//configuraciones
app.set("PORT",process.env.PORT || 4000);

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,access-token ,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas
app.use(Usuario);
app.use(Reclamo);



export default app;