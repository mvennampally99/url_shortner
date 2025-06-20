import mongoose from "mongoose";
import config from "config";

async function db() {
  const dbUri = config.get("dbUri") as string;
  try {
    await mongoose
      .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log(`DB connected to ${dbUri}`);
      });
  } catch (ex) {
    console.error(ex);
  }
}

export default db;
