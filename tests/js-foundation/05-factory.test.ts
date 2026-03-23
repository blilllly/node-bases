import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('05-factory', () => {
  const getId = () => '1234';
  const getAge = () => 27;

  it('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getId, getAge });

    expect(typeof makePerson).toBe('function');
  });

  it('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getId, getAge });

    const johnDoe = makePerson({ name: 'John Doe', birthdate: '1998-06-26' });

    expect(johnDoe).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1998-06-26',
      age: 27,
    });
  });
});
