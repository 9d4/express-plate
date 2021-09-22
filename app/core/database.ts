import mongoose from "mongoose";
import dbConfig from "../../config/database";

const host: string = dbConfig.mongodbUri;
const usedDbEngine = dbConfig.dbEngine;
let DB;

enum Messages {
  CONNECTING = "connecting...",
  CONNECTED = "connected",
  NOT_USED = "not used",
  UNABLE_CONNECT = "unable to connect database",
  UNKNOWN = "unknown database",
}

function genMsg(msgEnum: Messages) {
  return "[database] " + msgEnum;
}

function setupDb(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (!dbConfig.useDB) {
      console.log("[database] not used");
      resolve();
      return;
    }

    console.log("[database] connecting...");

    switch (usedDbEngine) {
      case "mongodb":
        return mongoose
          .connect(host, { autoCreate: true, autoIndex: true })
          .then(() => {
            console.log("[database] connected");
            DB = mongoose;
            resolve();
          })
          .catch((e) => {
            console.log(genMsg(Messages.UNABLE_CONNECT));
            reject(new Error(e.message));
          });
      default:
        console.log(genMsg(Messages.UNKNOWN));
        reject(genMsg(Messages.UNKNOWN));
    }
  });
}

export { DB, setupDb };
