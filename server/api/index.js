const router = require("express").Router();
const { prisma } = require("../db/common");

// Get all items
router.get("/items", async (req, res, next) => {
  try {
    const items = await prisma.items.findMany();
    res.send(items);
  } catch (error) {
    next(error);
  }
});



module.exports = router;