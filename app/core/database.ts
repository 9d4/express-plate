import mongoose from "mongoose";

const host: string = process.env.MONGODB_HOST || "mongodb://localhost:27017";
const options = {
  autoCreate: true,
  autoIndex: true,
};

async function setupDb(): Promise<any> {
  console.log("[database] connecting...");

  await mongoose
    .connect(host, options)
    .then(() => console.log("[database] connected"))
    .catch((e) => {
      console.log("[database] Unable to connect");
      process.exit(1);
    });
}

export { mongoose, setupDb };
