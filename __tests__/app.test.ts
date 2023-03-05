import { app } from "@src/app";
import request from "supertest";

describe("Test the root path", () => {
  it("should resoinse the GET method", async () => {
    await request(app).get("/").expect(200);
  });
});
