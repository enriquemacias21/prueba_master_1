function validarPrecio(precio) {
    if (typeof precio !== 'number' || precio < 0) {
    return true;   
    }
    return precio >=0;
}

module.exports = {validarPrecio};