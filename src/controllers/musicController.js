const musicModel = require("../models/musicModel");

const getMusics = async (req, res) => {
    try {
        const { name } = req.query;
        const songs = await musicModel.getMusics(name);
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar músicas." });
    }
};

const getMusicById = async (req, res) => {
    try {
        const song = await musicModel.getMusicById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Música não encontrada." });
        }
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar música." });
    }
};

const createMusic = async (req, res) => {
    try {
        const { name, duration } = req.body;
        const photo = req.file ? req.file.filename : null
        const newSong = await musicModel.createMusic(name, duration, photo);
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar música." });
    }
};

const updateMusic = async (req, res) => {
    try {
        const { name, duration, photo } = req.body;
        const updatedSong = await musicModel.updateMusic(req.params.id, name, duration, photo);
        if (!updatedSong) {
            return res.status(404).json({ message: "Música não encontrada." });
        }
        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar música." });
    }
};

const deleteMusic = async (req, res) => {
    try {
        const message = await musicModel.deleteMusic(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar música." });
    }
};

module.exports = { getMusics, getMusicById, createMusic, updateMusic, deleteMusic };