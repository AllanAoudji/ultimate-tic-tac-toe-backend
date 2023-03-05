import { socket } from "@src/socket";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.get("/", (_, res) => {
  res.send({
    hello: "world",
  });
});

export { io, server };
