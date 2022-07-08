import { Pro, ProductFactory } from "./factory_method";

export function show() : void {
 var a: Pro = ProductFactory.createProduct("A");
 var b: Pro = ProductFactory.createProduct("B");

 console.log(a.method());
 console.log(b.method());
};

show();
