const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

// aqui vai as requisições
router.get("/", UserController.getAllUsers)
router.post("/", UserController.postUsers);
// router.get("/:id", UsersController.getAllUsersControl)
// router.put("/:id", UsersController.getAllUsersControl)
// router.delete("/:id", UsersController.getAllUsersControl)

module.exports = router