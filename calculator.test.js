import calculator from './calculator';

test('calculator operations with integers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(6, 0)).toBe(Infinity);
    expect(calculator.multiply(6, 2)).toBe(12);
  });

test('calculator operations with floats', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
    expect(calculator.divide(6.4, 0.8)).toBeCloseTo(8);
    expect(calculator.multiply(1.5, 0.2)).toBeCloseTo(0.3);
  });