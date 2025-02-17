import mongoose from "mongoose";
import { countConnect } from "../helpers/check.connect";
import config from "../configs/config.mongodb";

const connectString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

class Database {
  private static instance: null | Database = null;

  constructor() {
    this.connect();
  }

  connect() {
    // DEV ENV
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => {
        console.log(`Connected Mongodb Succesfully`, countConnect());
      })
      .catch((err) => console.log(`Error connect`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
export const instanceMongodb = Database.getInstance();
