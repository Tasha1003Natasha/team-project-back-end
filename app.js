const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const usersRouter = require("./routes/api/auth");
const testRoute = require("./routes/api/test");
const passport = require("passport");
const session = require("express-session");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", usersRouter);
app.use("/api/tests", testRoute);

// api-doc
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", (req, res) => {
  res.status(200).json({ message: "Express on Vercel" });
});

// default @uses
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
