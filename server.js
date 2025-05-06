require("dotenv").config();
const express = require("express");
const cors = require("cors");
const musicRoutes = require("./src/routes/musicRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", musicRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🎺 Servidor rodando em http://localhost:${PORT}`);
});
