import fs from 'fs'
export  default class ProductManager {
    constructor(path) {
        this.products = [];
        this.path = path
    }

    // generar id autoincrementable
    generateId() {
        if (this.products.length > 0) {
            const lastProduct = this.products[this.products.length - 1];
            this.code = lastProduct.code + 1;
        } else {
            this.code = 1;
        }
        return this.code;
    }

    addProduct({ title = '', description = '', price = 0, thumbnail = '', code = '', stock = 0 } = {}) {

        //Validando los datos ingresados
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Error: Debes proporcionar todos los valores obligatorios.');
            return;
        }

        // Creando nuevo producto
        const newProduct = {
            id: this.generateId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf8');
    }

    // obtener productos
    getProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf-8');
            const products = JSON.parse(data);
            return products;
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    // obtener un producto por su codigo (code)
    getProductById(code) {
        // leer el archivo
        const data = fs.readFileSync(this.path, 'utf-8');
        // parsear los datos como un array de objetos
        const products = JSON.parse(data);
        // buscar el producto por su código
        const product = products.find((p) => p.id === code);
        if (product) {
            return product;
        } else {
            console.log(`Producto con código ${code} no encontrado.`);
            return null;
        }
    }

    //Actualizar un producto
    updateProduct(code, { title, description, price, thumbnail, stock } = {}) {
        const productIndex = this.products.findIndex((p) => p.code === code);
        if (productIndex !== -1) {
            const product = this.products[productIndex];
            product.title = title || product.title;
            product.description = description || product.description;
            product.price = price || product.price;
            product.thumbnail = thumbnail || product.thumbnail;
            product.stock = stock || product.stock;
            this.products[productIndex] = product;
            fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf8');
            console.log(`Producto con código ${code} ha sido actualizado.`);
        } else {
            console.log(`Producto con código ${code} no encontrado.`);
        }
    }

    //Eliminar un producto
    deleteProduct(code) {
        fs.readFile(this.path, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error al leer el archivo: ${err}`);
                return;
            }

            let products = JSON.parse(data);
            const productIndex = products.findIndex((p) => p.code === code);

            if (productIndex !== -1) {
                products.splice(productIndex, 1);
                console.log(`Producto con código ${code} ha sido eliminado.`);

                fs.writeFile(this.path, JSON.stringify(products), (err) => {
                    if (err) {
                        console.log(`Error al escribir en el archivo: ${err}`);
                    }
                });
            } else {
                console.log(`Producto con código ${code} no encontrado.`);
            }
        });
    }
}









