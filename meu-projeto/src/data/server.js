const express = require("express");
const fs = require("fs");
const Papa = require("papaparse");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors()); 
app.get("http://localhost:5000/acomodacoes", (req, res) => {
    const filePath = path.join(__dirname, "data", "api.csv"); 

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo CSV:", err);
            return res.status(500).json({ error: "Erro ao ler o arquivo CSV" });
        }
        let jsonData = Papa.parse(data, { header: true, skipEmptyLines: true }).data;
        jsonData = jsonData.map(item => ({
            id: item.id?.trim(),
            descricao: item.descricao?.replace(/"/g, "").trim(),
            image: item.image?.replace(/"/g, "").trim(),
            preco: item.preco?.trim(),
            localizacao: item.localizacao?.replace(/"/g, "").trim()
        }));

        res.json(jsonData);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/api/acomodacoes`);
});
