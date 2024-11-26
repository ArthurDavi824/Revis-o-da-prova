let x = [3, 8, 4, 2, 1, 6, 8, 7, 11, 9];
let y = [2, 1, 5, 12, 3, 0, 1, 4, 5, 6];
let intercecao = [];

for (let i = 0; i < x.length; i++) {
    intercecao[i] = x[i] == y[i];
    
}
console.log(intercecao);