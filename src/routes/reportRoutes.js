const express = require("express");
const router = express.Router();
const apiKeyMiddleware = require("../config/apiKey");

const reportController = require("./../controllers/reportController");

//Rota para gerar PDF
router.use(apiKeyMiddleware);
router.get("/report/pdf", reportController.exportSingerPDF);

module.exports = router;