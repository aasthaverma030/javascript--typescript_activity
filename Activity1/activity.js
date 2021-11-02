var Employee = /** @class */ (function () {
    function Employee(name, address, mobile) {
        this.name = name;
        this.address = address;
        this.mobile = mobile;
    }
    Employee.prototype.displayDetails = function () {
        console.log("Employee Details");
        console.log("Name: " + this.name);
        console.log("Address: " + this.address);
        console.log("Mobile: " + this.mobile);
    };
    return Employee;
}());
var n = new Employee("Aastha", "Banglore", 8978674686);
n.displayDetails();
