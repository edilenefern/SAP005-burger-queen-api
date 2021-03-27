const { Router } = require("express");
//  const { routes } = require("./UsersRouter");
// const ExampleRouter = require("./ExampleRouter");
const UsersRouter = require("./UsersRouter");



const router = Router()

// aqui vai todas as rotas
// router.use('/example', ExampleRouter);
router.use('/user', UsersRouter);


module.exports = router
