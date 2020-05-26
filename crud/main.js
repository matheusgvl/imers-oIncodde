
let i=1;

let tabelaUsuario=document.getElementById("users_name");
let aux= document.getElementById("incremento");

let entradaUsuario= document.getElementById("input_users");
let btnCadastrarUsuario= document.querySelector("#btn_users");

   
btnCadastrarUsuario.addEventListener('click',event =>{
   //let tabela= document.createElement("table");
   
   if(entradaUsuario.value == "")
   {
     alert("você não digitou o nome");
   }
  else {
   
   let incrementar=document.createElement("tr");
    

   let campoUsuario= document.createElement("tr");
   
   aux.appendChild(incrementar).innerHTML=i;
   i++;
  
   
   tabelaUsuario.appendChild(campoUsuario).innerHTML=entradaUsuario.value;
 
   
   }
   
});

let tabelaBooks= document.getElementById("users_books");
let aux2= document.getElementById("incremento2");
let entradaBooks= document.getElementById("input_books");
let btnCadastrarBooks= document.querySelector("#btn_books");
let j=1;
   
btnCadastrarBooks.addEventListener('click',event =>{
   //let tabela= document.createElement("table");
  
   let incrementar2=document.createElement("tr");
   let campoBooks = document.createElement("tr");
   if(entradaBooks.value == "")
   {
     alert("você não digitou o nome do livro");
   }
   else{
   aux2.appendChild(incrementar2).innerHTML=j;
   j++;
  
  tabelaBooks.appendChild(campoBooks).innerHTML=entradaBooks.value;
}

   
});
