const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");

router.get("/musics", musicController.getMusics);
router.get("/musics/:id", musicController.getMusicById);
router.post("/musics", musicController.createMusic);
router.put("/musics/:id", musicController.updateMusic);
router.delete("/musics/:id", musicController.deleteMusic);

module.exports = router;