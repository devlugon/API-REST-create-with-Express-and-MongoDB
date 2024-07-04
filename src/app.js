 import express from "express";
 import databaseConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await databaseConnection();

connection.on("error", (erro) => {
   console.log("Connection refused", erro);
});

connection.once("open", () => {
   console.log("Connection to database completed!");
});

 const app = express();
 routes(app);

 export default app;

