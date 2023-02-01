import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} // retorna un mazo nuevo
 */
export const barajarMazo = (tiposDeCarta, tiposEspeciales) =>{
    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('tiposDeCarta es obligatorio como arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como arreglo de string');
    let mazo=[];
    for (let i = 2; i<=10; i++){
        for(let tipo of tiposDeCarta){
            mazo.push(i+tipo);
        }        
    }
    for(let tipo of tiposDeCarta){
        for(let letra of tiposEspeciales){
            mazo.push(letra+tipo);
        }
    }
    return _.shuffle( mazo );
}