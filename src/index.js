import app from './server.js';
import "./config.js";

//inicio del servidor
app.listen(app.get('PORT'),()=>{
    console.log("server en ",app.get('PORT'));
});

