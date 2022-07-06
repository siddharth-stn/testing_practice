import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './index.js';

test('siddharth converts to Siddharth', () => {
    expect(capitalize("siddharth"))
    .toBe("Siddharth");
});

test('rohan converts to Rohan', () => {
    expect(capitalize("rohan"))
    .toBe("Rohan");
});

test('EkTA converts to Ekta', () => {
    expect(capitalize("EkTA"))
    .toBe("Ekta");
});

test('SiddHarth EkTA converts to Siddharth Ekta', () => {
    expect(capitalize("SiddHarth EkTA"))
    .toBe("Siddharth Ekta");
});

test("Hello converts to olleH", () => {
    expect(reverseString("Hello"))
    .toBe("olleH");
});

test("Ola converts to alO", () => {
    expect(reverseString("Ola"))
    .toBe("alO");
});

test("Ola Hello converts to alO olleH", () => {
    expect(reverseString("Ola Hello"))
    .toBe("alO olleH");
});

test('1, 2 adds to 3', () => {
    expect(calculator.add(1, 2))
    .toBe(3);
});

test('2, 3 subtracts to -1', () => {
    expect(calculator.subtract(2 ,3))
    .toBe(-1);
});

test('2, 3 divides to ', () => {
    expect(calculator.divide(2, 3))
    .toBeCloseTo(0.66666666);
});

test('2, 3 multiplies to ', () => {
    expect(calculator.multiply(2, 3))
    .toBeCloseTo(6);
});

test('Hello converted to Ifmmp', () => {
    expect(caesarCipher('Hello'))
    .toBe('Ifmmp');
});

test('Zello converted to Afmmp', () => {
    expect(caesarCipher('Zello'))
    .toBe('Afmmp');
});

test('Zelloz converted to Afmmpa', () => {
    expect(caesarCipher('Zelloz'))
    .toBe('Afmmpa');
});

test('zelloA converted to afmmpB', () => {
    expect(caesarCipher('zelloA'))
    .toBe('afmmpB');
});

test('[1, 8,3,4,2,6] converts to {average: 4, min: 1, max: 8, length: 6}', () => {
    expect(analyzeArray([1, 8,3,4,2,6]))
    .toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});