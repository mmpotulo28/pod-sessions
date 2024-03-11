const numbers = [ 3, 4, 5, 0, 6, 8, 3, 0, 3 ];

// CALCULATE THE occurrence of each number in the array
let occurrence = 0;
numbers.map( ( number ) => {
    if ( number >= 5 ) {
        occurrence++;
    }
} );

console.log( occurrence ); // 1