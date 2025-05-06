const express = require("express");
const router = express.Router();
const singerController = require("../controllers/singerController");

router.get("/singers", singerController.getAllSingers);
router.get("/singers/:id", singerController.getSinger);
router.post("/singers", singerController.createSinger);
router.put("/singers/:id", singerController.updateSinger);
router.delete("/singers/:id", singerController.deleteSinger);

module.exports = router;