//Manager should extend Employee class
//Manager should also have these following classes
//OfficeNumber, getRole() //pverridden to return 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;