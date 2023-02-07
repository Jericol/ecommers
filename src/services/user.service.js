const Product = require("../models/Product");


class productServices {
    static async  getAll() {
        try {
            const result = await Product.findAll();
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
           const result = await Product.findByPk(id);
           return result 
        } catch (error) {
            throw error;
        }
    }

    static async getWithTasks(id) {
        try {
            const result = await Product.findOne({
                where: { id },
                attributes: [ "username", "email"],
                include: {
                    model: Todos,
                    attributes: ["title", "description"],
                    as: "task"
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user) {
        try {
            const result = await Product.create(user);
            return result
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id) {
        try {
            const result = await Product.update(field, { where: { id }})
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
           const result = await Product.destroy({ where: { id } });
           return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = productServices;
