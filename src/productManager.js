import fs, { readFileSync } from 'fs'


export default class ProductManager {
    products = [];
    product = Product;
    constructor(path){
        this.path = path;
    }

    getProducts(){
        try {
            const files = readFileSync(this.path, "utf-8");
            const databaseParsed = JSON.parse(files)
            return databaseParsed;
        } catch(error) {
            console.log(error);
            return [];
        }
    }
}

class Product extends ProductManager {
    contructor(id, title, description, code, price, status, stock, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.code = code;
        this.price = price;
        this.status = status;
        this.stock = stock;
        this.category = category;
      
    }
}