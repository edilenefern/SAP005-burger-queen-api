const database = require("../db/models");

class OrdersController {
  static async getAllOrder(req, res) {
    try {
      const orders = await database.Orders.findAll();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ error: "Orders não encontrados" });
    }
  }

  static async getOrder(req, res) {
    const { id } = req.params;
    try {
      const orders = await database.Orders.findAll({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ error: "getOrder não encontrado" });
    }
  }

  static async postOrder(req, res) {
    const createOrders = req.body;
    try {
      const orders = await database.Orders.create(createOrders);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ error: "Order não foi criada" });
    }
  }

  static async putOrder(req, res) {
    const updateOrders = req.body;
    try {
      const { id } = req.params;
      const products = await database.Orders.update(updateOrders, {
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao atualizar order" });
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params;
    const orders = await database.Orders.destroy({
      where: {
        id: Number(id),
      },
    });
    return res.status(201).json(orders);
  }
}

module.exports = OrdersController;
