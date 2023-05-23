import { Router } from "express";
import uploader from "../services/uploader.js"

const router = Router ();

const products = [];

router.get('/products'(req,res)=>{
    const product =req.body;
    products.get(products);
    res.send({status:"success", message:"lista de productos"})
    
});

router.get('/products/id:3'(req,res)=>{
    const product =req.body;
    products.get(product);
    res.send({status:"success", message:"lista de productos"})
    
});



router.post('/products',uploader.single("image"),(req,res)=>{
    const product =req.body;
    products.push(product);
    res.send({status:"success", message:"producto agregado"})
});


router.put('/products/id:1',(req,res)=>{
    const product =req.body;
    products.put(product);
    res.send({status:"success", message:"producto modificado"})
});

router.delete('/products/id:2',(req,res)=>{
    const product =req.body;
    products.delete(product);
    res.send({status:"success", message:"producto eliminato"})
});


router.post('/:cid/product/:pid', (req,res)=>{
    const quantity = req.body.quantity || 1;
});

export default router;