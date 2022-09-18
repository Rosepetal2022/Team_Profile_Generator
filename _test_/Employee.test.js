const Employee = require('../lib/Employee');

//creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Rachel', 50, 'marcotter25@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets Employee name', () => {
    const employee = new Employee('Rachel')

    expect(employee.getName()).toEqual(expect.any(String))
});

test('gets Employee Id', () => {
    const employee = new Employee('Rachel', 50, 'marcotter25@yahoo.com')

    expect(employee.getId()).toEqual(expect.any(Number))
});

test('gets Employee email', () => {
    const employee = new Employee('Rachel', 50, 'marcotter25@yahoo.com')

    expect(employee.getEmail()).toEqual(expect.any(String))
});

test('gets role of Employee', () => {
    const employee = new Employee('Rachel', 50, 'marcotter25@yahoo.com')

    expect(employee.getRole()).toEqual('Employee')
});