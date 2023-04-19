import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import { title } from 'process';

@Injectable()
export class ProductService {

    products : Product[] = [];
    addProduct(title : string, description : string, price : number) : string {
        const prodId= Math.random().toString()
        const newProduct = new Product(prodId, title, description, price );
        this.products.push(newProduct);
        return prodId;
    }
    getProducts() {
        return [...this.products]  
    }

    getProductById(productId : string)
    {
        const resultId = this.findProduct(productId)[0]
        return resultId;
    }

    updateProduct(id :string, prodTitle : string, prodDescrip : string, prodPrice : number)
    {
        const [product,index]   = this.findProduct(id);
        const updateProduct = {...product};
        if(prodTitle)
        {
            updateProduct.title = prodTitle;
        }
        if(prodDescrip)
        {
            updateProduct.decription = prodDescrip;
        }
        if(prodPrice)
        {
            updateProduct.price = prodPrice;
        }

        this.products[index]= updateProduct; 
    }

    private findProduct(productId : string) : [Product, number]
    {
        const resultId = this.products.findIndex((prod) => prod.id === productId);
        const prod = this.products[resultId]
        if(!prod)
        {
            throw new NotFoundException('Details Not Found');
        }
        return [prod, resultId]
    }
}