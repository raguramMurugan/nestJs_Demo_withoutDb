import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { ProductService } from "./products.service";


@Controller('/products')
export class ProductController {
constructor( private readonly productService : ProductService) {}

@Post('/add')
addProduct(
@Body('title') prodTitle : string, 
@Body('description') prodDesc : string, 
@Body('price') prodPrice : number 
) : any 
{
const prodId= this.productService.addProduct(prodTitle, prodDesc, prodPrice);   
return {id : prodId}; 
}

@Get('/getProduct')
getAllProduct() {
    return this.productService.getProducts();
}

@Get(':id')
getProductById(@Param('id') productId : string )
{
    return this.productService.getProductById(productId);
}

@Patch(':id')
updateProduct(
@Param('id') id : string, 
@Body('title') prodTitle :string, 
@Body('description') prodDescrip : string,
@Body('price') prodPrice : number ) : {status : string} {
this.productService.updateProduct(id, prodTitle, prodDescrip, prodPrice);
return {status: 'Update Successfull'};
}
}