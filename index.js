import express from "express";
import helloWorld from "./app.js";
const app = express();

const PORT = 4000;
console.log(helloWorld());

app.get("/", function (request, response) {
  response.send("Welcome");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
