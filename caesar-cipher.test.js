import caesarCipher from './caesar-cipher';

test('encrypt', () => {
    expect(caesarCipher('abc', 1)).toMatch(/bcd/);
    expect(caesarCipher('ABC', 1)).toMatch(/BCD/);
    expect(caesarCipher('a', 144)).toMatch(/o/);
    expect(caesarCipher('z', 1)).toMatch(/a/);
    expect(caesarCipher('Z', 1)).toMatch(/A/);
    expect(caesarCipher('Z, z', 1)).toMatch(/A, a/);
  });