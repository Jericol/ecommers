const initModels = require('./models/init.models');
const db = require("../utils/database");
const User = require('../models/user');
const Cart = require('../models/cart');
const Order = require('../models/order');
const Product = require('../models/Product');
const ProductInCart = require('../models/productInCart');
const ProductInOrder = require('../models/ProductInOrder');
const user = require('../models/user');


initModels();

const user = [
    {username: "leo", email: "leo@gmail.com", password: "1234"},
    {username: "sergio", email: "sergio@gmail.com", password: "5678"},
    {username: "angie", email: "angie@gmail.com", password: "9098"},
    {username: "canelo", email: "canelo@gmail.com", password: "1111"},
    {username: "camilo", email: "camilo@gmail.com", password: "2222"},
    {username: "vale", email: "vale@gmail.com", password: "3333"},
]

const cart = [
   { userId: 1, totaPrice: 30000},
   { userId: 2, totaPrice: 40000},
   { userId: 3, totaPrice: 50000},
   { userId: 4, totaPrice: 60000},
   { userId: 5, totaPrice: 70000},
   { userId: 6, totaPrice: 80000}
]

const order = [
    { totalPrice: 30000, userId: 1 },
    { totalPrice: 40000, userId: 2 },
    { totalPrice: 50000, userId: 3 },
    { totalPrice: 60000, userId: 4 },
    { totalPrice: 70000, userId: 5 },
    { totalPrice: 80000, userId: 6 }
]


const product = [
    {
        name: "Samsung s22 5g",
        price: 30000,
        availableQty: 5,
        status: "purchased",
        userId: 1
    },
    {
        name: "Samsung s22 5g",
        price: 40000,
        availableQty: 5,
        status: "purchased",
        userId: 2
    },
    {
        name: "Samsung s22 5g",
        price: 50000,
        availableQty: 5,
        status: "purchased",
        userId: 3
    },
    {
        name: "Samsung s22 5g",
        price: 60000,
        availableQty: 5,
        status: "purchased",
        userId: 4
    },
    {
        name: "Samsung s22 5g",
        price: 70000,
        availableQty: 5,
        status: "purchased",
        userId: 5
    },
    {
        name: "Samsung s22 5g",
        price: 80000,
        availableQty: 5,
        status: "purchased",
        userId: 6
    }
]

const productInCart = [
    { cartId: 1, productId: 1, quantity: 1, price: 30000},
    { cartId: 2, productId: 2, quantity: 1, price: 40000},
    { cartId: 3, productId: 3, quantity: 1, price: 50000},
    { cartId: 4, productId: 4, quantity: 1, price: 60000},
    { cartId: 5, productId: 5, quantity: 1, price: 70000},
    { cartId: 6, productId: 6, quantity: 1, price: 80000}
]

const productInOrden = [
    { orderId: 1, productId: 1, quantity: 1, price: 30000},
    { orderId: 2, productId: 2, quantity: 1, price: 40000},
    { orderId: 3, productId: 3, quantity: 1, price: 50000},
    { orderId: 4, productId: 4, quantity: 1, price: 60000},
    { orderId: 5, productId: 5, quantity: 1, price: 70000},
    { orderId: 6, productId: 6, quantity: 1, price: 80000}
]


db.sync({ force: true})
  .then(()=> {
    console.log('introduciendo la informacion')
    user.forEach((user)=> User.create(user));
    setTimeout(()=> {
        product.forEach((product)=> Product.create(product));
    }, 100);
    setTimeout(()=> {
        cart.forEach((cart)=> Cart.create(cart))
    },200)
    setTimeout(()=>{
        order.forEach((order)=> Order.create(order))
    }, 300)
    setTimeout(()=> {
        productInCart.forEach((productInCart)=> ProductInCart.create(productInCart))
    }, 400)
    setTimeout(()=>{
        productInOrden.forEach((productInOrder)=> ProductInOrder.create(productInOrder))
    }, 500)
  })
  .catch((error) => console.log(error))