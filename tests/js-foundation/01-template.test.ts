import { emailTemplate } from '../../src/js-foundation/01-template';

describe('01-template', () => {
  it('emailTemplate should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi, ');
  });
});
