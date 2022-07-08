export interface Product {
    method(param?: any) : void;
}

export class ConcreteProductA implements Product {
    method = (param?: any) => {
        return "Method of ConcreteProductA";
    }
}

export class ConcreteProductB implements Product {
    method = (param?: any) => {
        return "Method of ConcreteProductB";
    }
}


export class ProductFactory {
    public static createProduct(type: string) : Product {
        if (type === "A") {
            return new ConcreteProductA();
        } else if (type === "B") {
            return new ConcreteProductB();
        }

        return null;
    }
}
