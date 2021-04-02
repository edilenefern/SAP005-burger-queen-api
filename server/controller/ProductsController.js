const database = require("../db/models");
// const models = require("../db/models")
const { Products } = database;

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const getProducts = await database.Products.findAll();
      return res.status(200).json(getProducts);
    } catch (error) {
      return res.status(400).json({ error: "Produto não encontrado" });
    }
  }

  static async getProductsById(req, res) {
    const { id } = req.params;
    try {
      const productsId = await database.Products.findAll({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(productsId);
    } catch (error) {
      return res.status(400).json({ error: "Produto não encontrado" });
    }
  }

  static async createProducts(req, res) {
    try {
      const {
        name,
        flavor,
        complement,
        price,
        image,
        type,
        subType,
      } = req.body;

      const createProducts = await database.Products.create({
        name,
        flavor,
        complement,
        price,
        image,
        type,
        subType,
      });
      return res.status(200).json(createProducts);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao cadastrar produto" });
    }
  }

  static async updateProducts(req, res) {
    try {
      const {
        name,
        flavor,
        complement,
        price,
        image,
        type,
        subType,
      } = req.body;
      const updateProducts = await database.Products.update(
        {
          name,
          flavor,
          complement,
          price,
          image,
          type,
          subType,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).json(updateProducts);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao atualizar produto" });
    }
  }

  static async deleteProducts(req, res) {
    try {
      const deleteProducts = await database.Products.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(deleteProducts);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao deletar produto" });
    }
  }
}

module.exports = ProductsController;
