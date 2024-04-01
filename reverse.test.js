import reverse from './reverse';

test('reverse', () => {
    expect(reverse('cat')).toMatch(/tac/);
    expect(reverse('ca,t')).toMatch(/t,ac/);
    expect(reverse('cat tac')).toMatch(/cat tac/);
  });