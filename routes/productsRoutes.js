const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
  dest: "pubic/uploads",
  limits: { fieldSize: 10 * 1024 * 1024 },
}); //10MB

const {
  CreateItem,
  getAllProducts,
  getOneProducts,
  postProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productsControllers");

router.route("/").get(getAllProducts);
router.route("/create").post(upload.single("image"), CreateItem);
router.route("/products").post(postProducts);
router.route("/products/:productId").get(getOneProducts);
router.route("/products/:productId").patch(updateProducts);
router.route("/products/:productId").delete(deleteProducts);
module.exports = router;
