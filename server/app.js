const express = require("express");
const morgan = require("morgan");
const app = express();

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());

// Backend routes
app.use("/api", require("./api"));

// Check requests for a token and attach the decoded id to the request
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;

  try {
    req.user = jwt.verify(token, process.env.JWT);
  } catch {
    req.user = null;
  }

  next();
});

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ error: "Something went wrong!" });
  });

module.exports = app;
