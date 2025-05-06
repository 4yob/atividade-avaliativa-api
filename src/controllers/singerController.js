const singerModel = require("../models/singerModel");

const getAllSingers = async (req, res) => {
    try {
        const singers = await singerModel.getSingers();
        res.json(singers);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar cantores." });
    }
};

const getSinger = async (req, res) => {
    try {
        const singer = await singerModel.getSingerById(req.params.id);
        if (!singer) {
            return res.status(404).json({ message: "Cantor não encontrado." });
        }
        res.json(singer);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar cantor." });
    }
};

const createSinger = async (req, res) => {
    try {
        const { name, age, genre } = req.body;
        const newSinger = await singerModel.createSinger(name, age, genre);
        res.status(201).json(newSinger);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao adicionar cantor." });
    }
};

const updateSinger = async (req, res) => {
    try {
        const { name, age, genre } = req.body;
        const updatedSinger = await singerModel.updateSinger(req.params.id, name, age, genre);
        if (!updatedSinger) {
            return res.status(404).json({ message: "Cantor não encontrada." });
        }
        res.json(updatedSinger);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar cantor." });
    }
};

const deleteSinger = async (req, res) => {
    try {
        const message = await singerModel.deleteSinger(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar cantor." });
    }
};

module.exports = { getAllSingers, getSinger, createSinger, updateSinger, deleteSinger };