class Employee{
    readonly id: number;
    public firstName: string;
    readonly lastName: string;

    constructor(id: number, firstName: string, lastName: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

// create Employee class object
let employee = new Employee(100, 'Sri Sai', 'Valli');
employee.id = 200; // Error: Cannot assign to 'id' because it is a read-only property.
employee.lastName = 'Mani'; // Error: Cannot assign to 'lastName' because it is a read-only property
console.log(employee);
console.log(employee.getFullName());