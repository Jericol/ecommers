const productServices = require('../services/user.service');

const getAllProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getAll(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json(error.menssage);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createProduct = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await userServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await userServices.update(field, id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllProduct,
    getUserById,
    createProduct,
    updateProduct
}