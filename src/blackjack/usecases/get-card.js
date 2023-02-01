/**
 * obtener carta por parte del jugador
 * @param {Array<String>} mazo 
 * @returns {Array<String>}
 */
export const pedirCarta = (mazo) => {
    if (!mazo || mazo.length === 0){
        throw 'Cartas Agotadas';
    }
    return mazo.pop();
}