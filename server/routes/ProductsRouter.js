const { Router } = require("express");
const ProductsController = require("../controller/ProductsController.js");
const router = Router();

router.get("/", ProductsController.getAllProducts);
router.get("/:id", ProductsController.getProductsById);
router.post("/", ProductsController.createProducts);
router.put("/:id", ProductsController.updateProducts);
router.delete("/:id", ProductsController.deleteProducts);

module.exports = router;
