import dotenv from "dotenv";
dotenv.config();

export default {
  useDB: true,
  dbEngine: "mongodb",
  mongodbUri: process.env.MONGODB_URI || "mongodb://127.0.0.0:27017",
};
