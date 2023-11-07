const { addProductInStore, updatePriceOfSingleProduct } = require("./product_Controller");

const route = require('express').Router();

route.post("/addproductinstore", addProductInStore);
route.put("/updateSingleProduct", updatePriceOfSingleProduct);

module.exports = { route };
