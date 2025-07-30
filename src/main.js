import "dotenv/config";
import express from "express";
import { router } from "./route.js";

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use((_, response, next) => {
  // Middleware to handle CORS
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router);

app.use((_, response) => response.status(404).send({ error: "Not Found" }));

app.listen(port, () => console.log(`🚀 server is running on http://localhost:${port}`));
