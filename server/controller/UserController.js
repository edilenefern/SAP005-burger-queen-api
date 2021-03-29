const database = require('../db/models/index')

const UserController = {
  all(req, res, next) {
    Users.findAll()
      .then((result) => {
        res.json(result);
       
      })
      .catch(next);
  },

  create(req, res, next) {
    const { name, email, password, role, restaurant } = req.body;

    Users.create({
      name,
      email,
      password,
      role,
      restaurant
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};

module.exports = UserController;