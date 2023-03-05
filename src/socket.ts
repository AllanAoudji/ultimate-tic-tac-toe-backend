import type https from "http";
import { Server } from "socket.io";

export const socket = (httpServer: https.Server): Server => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  return io;
};
