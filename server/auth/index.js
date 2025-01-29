const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { prisma } = require("../db/common");

// Register a new user
app.post("/api/auth/register", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.users.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    });

    // Create a token with the user id
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.status(201).send({ token });
  } catch (error) {
    next(error);
  }
});
