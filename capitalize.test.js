import capitalize from './capitalize';

test('capitalize', () => {
    expect(capitalize('t')).toMatch(/T/);
    expect(capitalize('test')).toMatch(/Test/);
    expect(capitalize('Test')).toMatch(/Test/);
    expect(capitalize('tEST')).toMatch(/Test/);
    expect(capitalize('TEST')).toMatch(/Test/);
    expect(capitalize('!test')).toMatch(/!test/);
    expect(capitalize('')).toEqual("");
  });

