import express from "express";
import morgan from "morgan";


// Cargar ficheros rutas
import contactameRoutes from "./routes/contactame.routes";
import educacionRoutes from "./routes/educacion.routes";
import proyectosRoutes from "./routes/proyectos.routes";
import usuarioRoutes from "./routes/usuario.routes";
import imagenRoutes from "./routes/imagenes.routes";

// Ejecutar express (http)
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

// Settings
app.set("port", 3900);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes contactame
app.use("/api/contactame", contactameRoutes);

// Routes educacion
app.use("/api/educacion", educacionRoutes);

// Routes proyectos
app.use("/api/proyectos", proyectosRoutes);

// Routes usuario
app.use("/api/usuario", usuarioRoutes);

// Routes Imagen prueva
app.use("/api/imagenes", imagenRoutes);


export default app;
