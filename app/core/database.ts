import mongoose from "mongoose";
import dbConfig from "../../config/database";

const host: string = process.env.MONGODB_HOST || "mongodb://localhost:27017";
const options = {
  autoCreate: true,
  autoIndex: true,
};

const usedDbEngine = dbConfig.dbEngine;
let DB;

function setupDb(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (!dbConfig.useDB) {
      console.log("[database] not used");
      return resolve();
    }

    console.log("[database] connecting...");

    switch (usedDbEngine) {
      case "mongodb":
        return mongoose
          .connect(host, options)
          .then(() => {
            console.log("[database] connected");
            DB = mongoose;
            return resolve();
          })
          .catch((e) => {
            console.log("[database] Unable to connect");
            throw e;
          });
      default:
        console.log("[database] unknown database");
        return resolve();
    }
  });
}

export { DB, setupDb };
