let pessoas = []

function adicionar () {
let nome = document.getElementById("nome").value
let idade = Number(document.getElementById("idade").value)


if (nome=="" || idade <= 0){

    alert("Por favor, preencha todos os campos corretamente.")
    return;
}

if (idade < 16){
alert("Essa pessoa ainda não está apta para votar.")
return}

pessoas.push({nome: nome, idade: idade});



let item = document.createElement("li");
item.innerHTML =  nome + " - " + idade + " anos"
document.getElementById("lista").appendChild(item);

document.getElementById("nome").value = ""
document.getElementById("idade").value = ""
}

function analisar() {
if (pessoas.length === 0){
alert("Nenhuma pessoa cadastrada!")
return;}
}

let aptos = []

for  (let i = 0; i < pessoas.length; i++)
{
if (pessoas[i].idade >= 16){
    aptos.push(pessoas[i].nome)
}

}

alert("Pessoa aptas para votar:" + aptos.join(" , "))






