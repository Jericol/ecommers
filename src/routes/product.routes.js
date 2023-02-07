const { Router } = require("express");
const { getAllProduct } = require("../controllers/product.controller");


const router = Router();


router.get('/product', getAllProduct);


module.exports = router;