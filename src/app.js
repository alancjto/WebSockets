import express  from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.routes.js';
import __dirname from './utils.js';
import ProductManager from '../productManager.js';
import fs from 'fs'

const app = express ();
const productManager = new ProductManager('./files/products.json');
const products = productManager.getProducts();



app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use("/src/productManager.js", ProducRouter);


const server = app.listen(8081, ()=> console.log("Server running"));


const io = new Server (server);




io.on('connection', socket => {
    console.log("Cliente conectado");
    socket.on('message', data => {
        const id = products.length + 1;
        const product = { id, ...data}
        products.unshift(product);
        fs.writeFileSync('./files/products.json',JSON.stringify(products, null, '\t'))
        io.emit('product', data)
    })
})
