const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Rachel', 35, 'marcotter25@yahoo.com', 666)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('returns manager role', () => {
    const manager = new Manager('Rachel', 35, 'marcotter25@yahoo.com', 666)

    expect(manager.getRole()).toEqual('Manager');
})