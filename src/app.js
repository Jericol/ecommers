const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("../models/init-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const authRouter = require("./routes/auth.routes");
const productRouter = require("./routes/product.routes")
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels();

db.authenticate()
  .then(() => console.log("Base de datos authenticada"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "hola soy canelo" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/auth/login", );
app.use("/api/v1/product", productRouter);


module.exports = app;
