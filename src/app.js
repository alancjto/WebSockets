import express from 'express';
import productsRouter from './routes/products.routes.js';
import cartsRouter from './routes/carts.routes.js';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils.js';



const app = express();



app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);




app.get('/:id', async (req,res => {
    let realTimeProducts = await.product.getProductByid(req.params.id)
    res.render("realTimeProducts", {
        products : realTimeProducts
    })
}))

const server = app.listen(8081, ()=> console.log("Server running"));

const io = new Server (server);



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/layouts/realTimeProducts.handlebars' , FormData);



app.listen(8080, () => {
    console.log("Server is listening on port 8080")
});


io.on('connection', socket=>{
    console.log('Conectado');
    socket.emit("RealTimeProducts", productManager.getAllProducts(form))
    socket.on('message1', data=>{
        io.emit('form', data)
    })
 })

 app.post('/RealTimeProducts.handlebars/form' , async (req, res) => { 
    let form = req.body
    res.send(await product.getAllProducts(form))
 })
