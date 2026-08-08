const {validarPrecio} = require('../src/validarPrecio');
test('validarPrecio should return true for negative numbers', () => {
    expect(validarPrecio(-5)).toBe(true);
});

test('validarPrecio should return true for non-number inputs', () => {
    expect(validarPrecio('string')).toBe(true);
    expect(validarPrecio(null)).toBe(true);


});