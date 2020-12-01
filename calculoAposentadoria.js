const nome = "Silvana";
const sexo = "M";
const idade = 72;
const contribuicao = 23;


const calculocontribuicao = idade + contribuicao

// if (sexo == "F" ){
//     if (calculocontribuicao >= 85){
//         console.log(`A ${nome} poderá se aposentar`)
//     } else{
//         console.log('Não tem tempo')
//     }
    
// } else{
//    if (sexo == "M"){
//         if(calculocontribuicao >= 95){
//             console.log(`A ${nome} poderá se aposentar`)
//         } else{
//             console.log(`A ${nome} Não tem tempo`)
//         }
//     }
// }


// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}