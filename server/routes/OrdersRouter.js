const { Router } = require("express");
const OrdersController = require("../controller/OrdersController.js");
const router = Router();

router.get("/", OrdersController.getAllOrder);
router.get("/:id", OrdersController.getOrder);
router.post("/", OrdersController.postOrder);
router.put("/:id", OrdersController.putOrder);
router.delete("/:id", OrdersController.deleteOrder);

module.exports = router;
