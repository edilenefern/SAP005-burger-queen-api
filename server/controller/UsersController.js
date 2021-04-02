const database = require("../db/models");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const getUsers = await database.Users.findAll();
      return res.status(200).json(getUsers);
    } catch (error) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }
  }
  

  static async getUserById(req, res) {
    const { id } = req.params;
    try {
      const userId = await database.Users.findAll({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(userId);
    } catch (error) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }
  }

  static async createUsers(req, res) {
    const { name, email, password, role, restaurant } = req.body;
    try {
      const createUsers = await database.Users.create({
        name,
        email,
        password,
        role,
        restaurant,
      });
      return res.status(200).json(createUsers);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao cadastrar usuário" });
    }
  }

  static async updateUsers(req, res) {
    try {
      const { id, name, email, password, role, restaurant } = req.body;
      const updateUser = await database.Users.update(
        {
          id,
          name,
          email,
          password,
          role,
          restaurant,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).json(updateUser);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Não foi possível atualizar dados" });
    }
  }

  static async deleteUsers(req, res) {
    try {
      const deleteUsers = await database.Users.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(deleteUsers);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Não foi possível deletar o usuário" });
    }
  }
}

module.exports = UserController;
