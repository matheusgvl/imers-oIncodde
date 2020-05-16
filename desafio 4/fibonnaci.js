/*
irmesão Incodde 
desafio 4
 nome : Matheus Gabriel Victor Kamanchek

*/
let n=10;
let numero = 0;
let numeroSuc = 1;
let proximoNum = 0 ;
let lista = [numero,numeroSuc];

for(let i=0;i<n-2;i++){
    
    proximoNum= numeroSuc+numero;
    numero=numeroSuc;
    numeroSuc=proximoNum;
    lista.push(numeroSuc);
}
console.log(lista);
