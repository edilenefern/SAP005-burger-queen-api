const { Router } = require("express");
const UserController = require("../controller/UsersController");
const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUsers);
router.put("/:id", UserController.updateUsers);
router.delete("/:id", UserController.deleteUsers);


module.exports = router;
