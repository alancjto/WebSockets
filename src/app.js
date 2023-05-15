import express from 'express';
import ProductManager from './ProductManager';


const app = express();

const ProductManager = new ProductManager('./productos.json');

app.use(express.urlencoded({extended: true}))

app.get('/products' , async (req, res)=> {
    const products = await ProductManager.getProducts();
    res.send(products);
});

app.get('/' , async (req, res)=>{
    const products = await ProductManager.getProducts();
    res.send({products});
});

app.listen(8080, ()=> console.log('listening on port 8080')); 

