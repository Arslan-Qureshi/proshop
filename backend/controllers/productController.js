import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//@des Fetch all products
//@route GET /api/products
//@acess Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // throw new Error("some Error");
  res.json(products);
});

//@des Fetch single product
//@route GET /api/products/:id
//@acess Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found!");
  }
});

export { getProducts, getProductById };
