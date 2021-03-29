const UsersDB = require('../db/models')

class UserController {
      static async getusers (req,res){
        const users = await UsersDB.users.findAll()
        res.status(200).json(users)
      }
     
    };
    module.exports = {UserController}