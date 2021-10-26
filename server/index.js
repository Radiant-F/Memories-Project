import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/post", postRoutes);

const CONNECTION_URL =
  "mongodb://exkoi:exkoi123@cluster0-shard-00-00.wfoqd.mongodb.net:27017,cluster0-shard-00-01.wfoqd.mongodb.net:27017,cluster0-shard-00-02.wfoqd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mwqui9-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
