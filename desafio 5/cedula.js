/*
irmesão Incodde 
desafio 5
autores: Matheus Gabriel e Victor Kamanchek

*/
let valor = 576;
let lista = [];
let moeda = [100,50,20,10,5,2,1];
let resultado;

for(i=0; i < moeda.length; i++){
    let n = parseInt(valor/moeda[i]);
    valor = valor%moeda[i];
    console.log(n +" notas de " + moeda[i]);
}