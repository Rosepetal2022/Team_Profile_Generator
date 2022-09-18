const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Rachel', 70, 'marcotter25@yahoo.com', 'University of Oregon')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Rachel', 70, 'marcotter25@yahoo.com', 'University of Oregon')

    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern role', () => {
    const intern = new Intern('Rachel', 70, 'marcotter25@yahoo.com', 'University of Oregon')

    expect(intern.getRole()).toEqual(expect.any(String));
});