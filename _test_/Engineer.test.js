const Engineer = require('../lib/Engineer');

test('creates and engineer object', () => {
    const engineer = new Engineer('Rachel', 100, 'marcotter25@yahoo.com', 'rosepetal2022')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('returns Engineer github username', () => {
    const engineer = new Engineer('Rachel', 100, 'marcotter25@yahoo.com', 'rosepetal2022')

    expect(engineer.github).toEqual(expect.any(String));
});

test('returns Engineer role', () => {
    const engineer = new Engineer('Rachel', 100, 'marcotter25@yahoo.com', 'rosepetal2022')

    expect(engineer.getRole()).toEqual('Engineer');
});