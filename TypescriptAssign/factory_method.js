"use strict";
exports.__esModule = true;
exports.ProductFactory = exports.ConcreteProductB = exports.ConcreteProductA = void 0;
var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
        this.method = function (param) {
            return "Method of ConcreteProductA";
        };
    }
    return ConcreteProductA;
}());
exports.ConcreteProductA = ConcreteProductA;
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
        this.method = function (param) {
            return "Method of ConcreteProductB";
        };
    }
    return ConcreteProductB;
}());
exports.ConcreteProductB = ConcreteProductB;
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.createProduct = function (type) {
        if (type === "A") {
            return new ConcreteProductA();
        }
        else if (type === "B") {
            return new ConcreteProductB();
        }
        return null;
    };
    return ProductFactory;
}());
exports.ProductFactory = ProductFactory;
