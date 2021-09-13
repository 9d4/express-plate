import { Express } from "express";
import http from "http";

let server: any = null;

function createServer(app: Express, port: number | string) {
  server = http.createServer(app).listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export { server, createServer };
