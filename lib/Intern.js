//intern class should extend employee
//intern should also have: school, getSchool(), getRole()//overridden to return 'intern'

const Employee = require('./Employee')

class Intern extends Employee {
    
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;