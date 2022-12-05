const express = require("express");
const {
  create_Order,
  get_SingleOrder,
  get_OrdersAll,
  admin_getAllOrders,
  admin_UpdateOrders,
  delete_Order,
} = require("../controller/OrderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, create_Order);

router.route("/order/:id").get(isAuthenticatedUser, get_SingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, get_OrdersAll);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), admin_getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), admin_UpdateOrders)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), delete_Order);

module.exports = router;
