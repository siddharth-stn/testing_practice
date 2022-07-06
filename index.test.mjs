import {capitalize} from './index.mjs';

test('siddharth converts to Siddharth', () => {
    expect(capitalize("siddharth"))
    .toBe("Siddharth");
});