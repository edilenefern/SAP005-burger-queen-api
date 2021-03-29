const database = require('../db/models')

const UserController = {
  all(req, res, next) {
    User.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { name, email, pasword, role, restaurant } = req.body;

    User.create({
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