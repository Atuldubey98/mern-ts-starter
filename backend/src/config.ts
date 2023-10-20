import dotenv from "dotenv";

const dotenvFilePath = `../.env${
  process.env.NODE_ENV !== "production" ? `.${process.env.NODE_ENV}` : ""
}`;
dotenv.config({
  path: dotenvFilePath,
});

export const PORT = isNaN(Number(process.env.PORT))
  ? 9000
  : Number(process.env.PORT);
export const NODE_ENV = process.env.NODE_ENV;
export const MONGO_URI = process.env.MONGO_URI || "";
export const isEnvDev = NODE_ENV === "development";
