// Cálculo MVC
const nome = "Carlos";
const peso = 84;
const altura = 1.88;
const sexo = "M"

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`O ${nome} está acima do peso`)
}else{
    console.log(`O ${nome} está abaixo do peso`)
}

console.log(imc) 

