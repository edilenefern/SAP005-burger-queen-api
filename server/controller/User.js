const database = require("../db/models/users");

class Controller {
  static async getUsers(req, res, next) {
    try {
      const user = await database.Users.findAll();
      res.status(200).json(user);
    } catch (error) {
      next();
    }
  }

  static async postUsers(req, res, next) {
    const { name, email, password, role, restaurant } = req.body;

    try {
      const result = await database.Users.create({
        name,
        email,
        password,
        role,
        restaurant,
      });

      res.status(201).json(result);
      //   res.send('Usuário Criado com Sucesso');
    } catch (error) {
      next();
    }
  }

  static async getIdUsers(req, res, next) {
    const id = req.params.id;

    try {
      const user = await database.Users.findOne({
        where: { id: id },
        attributes: { exclude: ["password"] },
      });

      if (user === null) {
        res.status(404).json();
        // res.send('Usuário não encontrado');
      } else {
        res.send(user);
      }
    } catch (error) {
      next();
    }
  }

  static async updateUsers(req, res, next) {
    const name = req.body.name;

    try {
      const user = await database.Users.update({ where: { name: name } });
      res.status(201).json(user);
      // res.send('Atualização de Usuário Concluída');
    } catch (error) {
      next();
    }
  }
  

  static async deleteUsers(req, res, next) {
    const id = req.params.id;

    try {
      const user = await database.Users.destroy({ where: { id: id } });
      res.status(201).json(user);
      // res.send('Usuário Excluído');
    } catch (error) {
      next();
    }
  }
}
module.exports = User
// const users = require("../db/models/users");

// const User = {
//   all(req, res, next) {
//     Users.findAll()
//       .then((result) => {
//         res.json(result);
//       })
//       .catch(next);
//   },

//   create(req, res, next) {
//     const { name, email, role, restaurant} = req.body;

//     Users.create({
//       name,
//       email,
//       role,
//       restaurant,
//       passowrd
      
//     })
//       .then((result) => {
//         res.status(201).json(result); //return with ID -> 201 (CREATED)
//       })
//       .catch(next);
//   },
// };
  
  



module.exports = User
