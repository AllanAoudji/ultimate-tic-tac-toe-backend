import { io, server } from "@src/app";
import { type Socket as SocketServer } from "socket.io";
import { io as client, type Socket as SocketClient } from "socket.io-client";
import request from "supertest";

describe("Default tests", () => {
  let serverSocket: SocketServer;
  let clientSocket: SocketClient;

  beforeAll(done => {
    server.listen(() => {
      const serverAdress = server.address();
      const port = typeof serverAdress === "object" && serverAdress !== null ? serverAdress.port : "8000";

      clientSocket = client(`http://localhost:${port}`);

      io.on("connection", socket => {
        serverSocket = socket;
      });

      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  it("should response the GET method", async () => {
    await request(server)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual({ hello: "world" });
      });
  });

  it("should emit hello -> world to the client", done => {
    serverSocket.emit("hello", "world");
    clientSocket.on("hello", arg => {
      expect(arg).toBe("world");
      done();
    });
  });
});
