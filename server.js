require("dotenv").config();
const express = require("express");
const cors = require("cors");

const musicRoutes = require("./src/routes/musicRoutes");
const singerRoutes = require("./src/routes/singerRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", musicRoutes);
app.use("/api", singerRoutes);
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🎺 Servidor rodando em http://localhost:${PORT}`);
});
