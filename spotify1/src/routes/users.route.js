const express = require("express");
const router = express.Router();

const controller = require("../controllers/users.controller");

router.get("/users", controller.get);
router.post("/users", controller.post);
router.put("/users", controller.put);

module.exports = router;
