"use strict";
exports.__esModule = true;
exports.ProductFactory = exports.MethodB = exports.MethodA = void 0;
var MethodA = /** @class */ (function () {
    function MethodA() {
        this.method = function (param) {
            return "Method A";
        };
    }
    return MethodA;
}());
exports.MethodA = MethodA;
var MethodB = /** @class */ (function () {
    function MethodB() {
        this.method = function (param) {
            return "Method B";
        };
    }
    return MethodB;
}());
exports.MethodB = MethodB;
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.createProduct = function (type) {
        if (type === "A") {
            return new MethodA();
        }
        else if (type === "B") {
            return new MethodB();
        }
        return null;
    };
    return ProductFactory;
}());
exports.ProductFactory = ProductFactory;
