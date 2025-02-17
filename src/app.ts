import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import "../src/dbs/init.mongodb";
export const app = express();
dotenv.config();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init routes

app.get("/", (req, res, next) => { });

// init db
