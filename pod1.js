const numbers = [ 3, 4, 5, 0, 6, 8, 3, 0, 3, 8, 8, 8 ];
const cleanArray = [ ...new Set( numbers ) ];
const ourSet = new Set( numbers );
console.log( ourSet );

console.log( cleanArray );