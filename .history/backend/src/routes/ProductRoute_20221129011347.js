const express = require("express");
const {
  get_Review,
  delete_Review,
  product_Admin,
  update_Product,
  delete_Product,
  get_Single_Product,
  create_Review,
  create_Product,
  get_Product,
} = require("../controller/ProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(get_Product);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), product_Admin);

router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), create_Product);

router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), update_Product)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), delete_Product)
  .get(get_Single_Product);

router.route("/product/review").post(isAuthenticatedUser, create_Review);

router
  .route("/reviews")
  .get(get_Review)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), delete_Review);

module.exports = router;
