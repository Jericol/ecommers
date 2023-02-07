const DataTypes = require("sequelize").DataTypes;
const _Product = require("./Product");
const _ProductInOrder = require("./ProductInOrder");
const _cart = require("./cart");
const _order = require("./order");
const _productInCart = require("./productInCart");
const _user = require("./user");

function initModels(sequelize) {
  const Product = _Product(sequelize, DataTypes);
  const ProductInOrder = _ProductInOrder(sequelize, DataTypes);
  const cart = _cart(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const productInCart = _productInCart(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);

  ProductInOrder.belongsTo(Product, { as: "product", foreignKey: "product_id"});
  Product.hasMany(ProductInOrder, { as: "ProductInOrders", foreignKey: "product_id"});
  productInCart.belongsTo(Product, { as: "product", foreignKey: "product_id"});
  Product.hasMany(productInCart, { as: "productInCarts", foreignKey: "product_id"});
  productInCart.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(productInCart, { as: "productInCarts", foreignKey: "cart_id"});
  ProductInOrder.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(ProductInOrder, { as: "ProductInOrders", foreignKey: "order_id"});
  Product.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(Product, { as: "Products", foreignKey: "user_id"});
  cart.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  order.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order, { as: "orders", foreignKey: "user_id"});

  return {
    Product,
    ProductInOrder,
    cart,
    order,
    productInCart,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
