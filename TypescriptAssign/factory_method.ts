export interface Pro {
    method(param?: any) : void;
}
export class MethodA implements Pro {
    method = (param?: any) => {
        return "Method A";
    }
}
export class MethodB implements Pro {
    method = (param?: any) => {
        return "Method B";
    }
}
export class ProductFactory {
    public static createProduct(type: string) : Pro {
        if (type === "A") {
            return new MethodA();
        } else if (type === "B") {
            return new MethodB();
        }
        return null;
    }
}
