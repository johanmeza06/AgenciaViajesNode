import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";



const app = express();

// conectar la base de datos
db.authenticate()
.then(()=> console.log('Base de datos conectada'))
.catch(error => console.log(error));

// definir puerto
// process.env.PORT (Variables de entorno)
const port = process.env.PORT || 4000;
// habilitar pug
app.set('view engine', 'pug');
// middleware - year actual
app.use((req,res,next)=>{
  const year = new Date().getFullYear();
  res.locals.yearActual = year;
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
})
// agregar Body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));
// definir carpeta publica
app.use(express.static('public'));
// importar rutas
app.use('/', router);

app.listen(port, () => {
  console.log(`el servidor esta funcionando en el puerto ${port}`);
});
