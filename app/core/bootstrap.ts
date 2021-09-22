import { Express, json, urlencoded, static as expressStatic } from "express";
import expressLayouts from "express-ejs-layouts";
import webRoutes from "../../routes/web";
import apiRoutes from "../../routes/api";
import { setupDb } from "./database";
import { createServer } from "./server";

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

export default async function bootstrap(app: Express): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    /**
     * Setting express utilities
     */
    app.use(json());
    app.use(urlencoded({ extended: true }));

    /**
     * Setting view engine
     */
    app.use(expressLayouts);
    app.set("view engine", "ejs"); // specify template engine
    app.set("views", "resources/views"); // views directory
    app.set("layout", "layouts/baseof"); // specify path for layout base template in views directory

    /**
     * Setting routes for web and api endpoint
     *
     */
    app.use("/", webRoutes);
    app.use("/api", apiRoutes);

    resolve();
  })

    .then(() => {
      /**
       * Setting database
       */
      return setupDb();
    })

    .then(() => {
      /**
       * Setting static file directory
       * first argument is where the static uri can be accessed from webserver
       * and the argument inside @function expressStatic is the root folder of statics
       * TODO: configure static dir based on config/filesystem
       * TODO: implement local directory mechanism, how to store private file and how to get it.
       */
      app.use("/public", expressStatic("./public"));
    })

    .then(() => {
      createServer(app, PORT);
    });
}
