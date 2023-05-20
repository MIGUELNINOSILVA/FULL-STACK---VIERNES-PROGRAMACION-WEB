import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/ruta1.js";

const app = express();

app.set("port", 4000);
app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);

export default app;
