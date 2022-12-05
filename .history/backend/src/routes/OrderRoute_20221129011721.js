const express = require("express");
const {
  create_Order,
  get_SingleOrder,
  get_OrdersAll,
  admin_getAllOrders,
  updateAdminOrder,
  deleteOrder,
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
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAdminOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
