import express from 'express';
import router from './routes/index.js'; // Importar las rutas definidas en el archivo index.js
import db from './config/db.js'; // Importar la configuración de la base de datos

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(error => console.log(error)); // Manejo de errores en la conexión a la base de datos

const app = express();
const port = process.env.PORT || 3000;

// Habilitar el procesamiento de datos de formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Establecer Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware global para variables compartidas
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes"; // Nombre del sitio web
    next();
});

// Usar las rutas definidas en el archivo index.js
app.use('/', router);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});