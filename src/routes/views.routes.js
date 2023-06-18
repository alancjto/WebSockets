import { Router } from "express";
import ProductManager from "./ProductManager.js";

const router = Router();


const productManager = new ProductManager('./files/products.json')
const products = productManager.getProducts();

router.get('/',(req, res) => {
    res.render('home', {products})
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', {products})
})

export default router;