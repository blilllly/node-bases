import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('03-callbacks', () => {
  it('getUserById should return an error if user does not exist', (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`USUARIO NO ENCONTRADO ${id}`);
      expect(user).toBeUndefined();

      done();
    });
  });

  it('getUserById should return Jhon Doe if id set to 1', (done) => {
    const id = 1;

    const john = {
      id: 1,
      name: 'John Doe',
    };

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual(john);

      done();
    });
  });
});
