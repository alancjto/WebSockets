import express from 'express';
import productsRouter from './routes/products.routes.js';
import cartsRouter from './routes/carts.routes.js';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';



const app = express();



app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);

const server = app.listen(8081, ()=> console.log("Server running"));

const io = new Server (server);



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);



app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})

io.on('connection', socket=>{
    console.log('Conectado');
    socket.on('message1', data=>{
        io.emit('log', data)
    })
})
