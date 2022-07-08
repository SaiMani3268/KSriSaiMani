import { Product, ProductFactory } from "./factory_method";

export function show() : void {
 var a: Product = ProductFactory.createProduct("A");
 var b: Product = ProductFactory.createProduct("B");

 console.log(a.method());
 console.log(b.method());
};

show();
