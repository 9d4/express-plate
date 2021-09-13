import dotenv from "dotenv";
import express from "express";
import { createServer } from "./app/core/server";
import bootstrap from "./app/core/bootstrap";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

/**
 * BOOTSTRAP
 */
bootstrap(app)
  .then(() => {
    /**
     * Build and listen server
     */
    createServer(app, port);
  })
  .catch((e) => {
    throw new Error(e);
  });
