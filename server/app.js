const express = require("express");
const morgan = require("morgan");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3000;

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    req.user = null;
  }

  next();
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: "Something went wrong!" });
});

app.listen(PORT, async () => {
  console.log(`I am listening on port number ${PORT}`);
});

module.exports = app;
