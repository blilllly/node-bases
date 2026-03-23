import { getId } from '../../src/plugins/get-id.plugin';

describe('get-id.plugin', () => {
  it('getId() should return a uuid', () => {
    const id = getId();

    expect(typeof id).toBe('string');
    expect(id.length).toBe(36);
  });
});
