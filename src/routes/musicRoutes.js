const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);
router.get("/musics", musicController.getMusics);
router.get("/musics/:id", musicController.getMusicById);
router.post("/musics", upload.single("photo"), musicController.createMusic);
router.put("/musics/:id", musicController.updateMusic);
router.delete("/musics/:id", musicController.deleteMusic);

module.exports = router;