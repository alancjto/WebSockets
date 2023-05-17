import express from 'express';
import Product from './ProductManager';


const app = express();

const ProductManager = new Product('./productos.json');

app.use(express.urlencoded({extended: true}))

app.get('/products/:id' , async (req, res)=> {
    const products = products.find(products=> producto.id == req.params.id)
    res.send(req.params.id);
});



app.listen(8080, ()=> console.log('listening on port 8080')); 

