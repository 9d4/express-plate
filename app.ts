import express from "express";
import { Router } from "express";
import http from "http";
import dotenv from "dotenv";
import { apiRoutes, webRoutes } from "./routes";
import { createServer, server } from "./app/core/server";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

/**
 * Setting routes
 *
 */
app.use("/", webRoutes);
app.use("/api", apiRoutes);

/**
 * Build and listen server
 */
createServer(app, port);
