"use strict";
exports.__esModule = true;
exports.show = void 0;
var factory_method_1 = require("./factory_method");
function show() {
    var a = factory_method_1.ProductFactory.createProduct("A");
    var b = factory_method_1.ProductFactory.createProduct("B");
    console.log(a.method());
    console.log(b.method());
}
exports.show = show;
;
show();
