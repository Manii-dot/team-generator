// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

let Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email,school){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;