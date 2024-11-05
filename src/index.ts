import dotenvFlow from "dotenv-flow";
import express from "express";
import studentRouter from "./routes/student";
import testRoutes from "./routes/test";
import unknownResource from "./middlewares/unknown-resources";
import unknownError from "./middlewares/unknown-error";
import validationError from "./middlewares/validation-error";
//Para poder acceder a las variables del ambiente (.env)
//if(process.env.NODE_ENV!=="production"){
if (process.env.NODE_ENV !== "production") {
  dotenvFlow.config();
}

const app = express();

// Middleware para parsear JSON
app.use(express.json());
// Rutas de api
app.use("/api/v1/student", studentRouter);

//Rutas de prueva
app.use("/error", testRoutes);

// Middlewares
app.use(validationError);
app.use(unknownResource); //Error 404

//Middleware de error
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
