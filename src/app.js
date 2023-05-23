import express from 'express';
import Product from './ProductManager';
import handlebars from 'express-handlebars';
import __dirname from './utils';
import viewsRouter from './routes/views.router';
import viewsRouter from './routes/products.router';




const app = express();

app.engine('handlebars',handlebars.engine());
app.set('views',  `${__dirname}/views`);
app.set('view engine', 'handlebars');

const ProductManager = new Product('./productos.json');

app.use(express.static( `${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/products/:id' , async (req, res)=> {
    const {id} = req.params;
    const products = products.find(products=> producto.id == req.params.id)
    if(products) res.send(req.params.id);
    else res.sendStatus(404).json({error:"Id no encontrado"});
});


app.use('/' , viewsRouter);

app.listen(8080, ()=> console.log('listening on port 8080')); 

