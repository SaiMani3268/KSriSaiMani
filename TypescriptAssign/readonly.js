var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Employee;
}());
// create Employee class object
var employee = new Employee(100, 'Sri Sai', 'Valli');
employee.id = 200; // Error: Cannot assign to 'id' because it is a read-only property.
employee.lastName = 'Mani'; // Error: Cannot assign to 'lastName' because it is a read-only property
console.log(employee);
console.log(employee.getFullName());
