import {Router} from 'express';


const router = Router();


router.get('/', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('realTimeProducts')
    
});

router.get('/', async (req, res) => {
    const products = await productManager.getProducts();
    res.render(res.send(products))
    
})

export default router;