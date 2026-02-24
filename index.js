import axios from "axios";
import http from "node:http";
import fs from "fs";

const PORT = 8080;

const server = http.createServer();

axios.get("/").then((res) => {});

console.log("Server Running on Port 8080");
server.listen(PORT);
