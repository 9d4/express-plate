import dotenv from "dotenv";
import express from "express";
import bootstrap from "./app/core/bootstrap";

dotenv.config();

const app = express();

/**
 * BOOTSTRAP
 */
bootstrap(app).catch((e) => {
  console.error("Error: " + e.message);
  process.exit(1);
});
