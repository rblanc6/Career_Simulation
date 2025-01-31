const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT = process.env.JWT || "1234";
const { prisma } = require("../db/common");
const { getUser } = require("../db/db");

router.use("/auth", require("./auth"));
router.use("/items", require("./items"));
router.use("/comments", require("./comments"));
router.use("/reviews", require("./reviews"));

const isLoggedIn = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.slice(7);
  if (!token) return next();
  try {
    const { id } = jwt.verify(token, JWT);
    console.log(id);
    const user = await getUser(id);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

router.post("/items/:id/reviews", isLoggedIn, async (req, res, next) => {
  try {
    const reviews = await prisma.reviews.create({
      data: {
        user: { connect: { id: parseInt(req.user.id) } },
        item: { connect: { id: parseInt(req.params.id) } },
        review: req.body.review,
        rating: parseInt(req.body.rating),
      },
    });

    res.status(201).send(reviews);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
