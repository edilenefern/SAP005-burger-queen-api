const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsersControl)
router.post("/", UsersController.getAllUsersControl)
router.get("/:id", UsersController.getAllUsersControl)
router.put("/:id", UsersController.getAllUsersControl)
router.delete("/:id", UsersController.getAllUsersControl)

module.exports = router