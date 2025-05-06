const PDFDocument = require("pdfkit");

const singerModel = require("../models/singerModel");

const exportSingerPDF = async (req, res) => {
    try {
        const singers = await singerModel.getSingers();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=heros.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //Título
        doc.fontSize(20).text("Relatório de Cantores", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Nome | Idade | Gênero", {underline: true});
        doc.moveDown(0.5);

        //Add dados dos cantores
        singers.forEach((singer) => {
            doc.text(
                `${singer.id} | ${singer.name} | ${singer.age} | ${singer.genre || "Sem gênero"}`,
                {align: "left"}
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF" });
    }
}

module.exports = { exportSingerPDF };