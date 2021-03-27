const { Router } = require('express')
const UsersController = require('../controller/User')

const router = Router()

// aqui vai as requisições
// router.get("/", ExampleController.getAllExamples)

router.get('/',UsersController.getUsers );
router.post('/',UsersController.postUsers );
router.get('/:id',UsersController.getIdUsers );
router.put('/user:id',UsersController.updateUsers );
router.delete('/user:id',UsersController.deleteUsers);



module.exports = router