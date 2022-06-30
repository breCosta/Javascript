let varA = 'A';
let varB = 'B';
let varC = 'C';
let aux;
console.log(varA, varB, varC);

/*aux = varA;
varA = varB;
varB = varC;
varC = aux;
console.log(varA, varB, varC);
*/

// ou entao

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
