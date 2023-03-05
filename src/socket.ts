import type http from "http";
import { Server } from "socket.io";

export const socket = (httpServer: http.Server): Server => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  return io;
};
