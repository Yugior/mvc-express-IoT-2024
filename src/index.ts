import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";

//Para poder acceder a las variables del ambiente (.env)
config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.use("/student", studentRouter);

app.listen(3000, function () {
  console.log("Escuchando puerto " + 3000);
});
