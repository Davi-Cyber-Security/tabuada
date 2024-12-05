// atribuindo valor as constantes.
const valor = document.getElementById("valor");
const resultado = document.getElementById("resultado");
const enviar = document.getElementById("enviando");
const dia = document.getElementById("dia")


// Verificação de Horário
const horario = new Date().getHours;
const horarioString = horario.toString();
 if(horario >= 18){
    dia.innerText = "Boa noite!"
} else if (horario >= "12"){
    dia.innerText = "Boa tarde!"
} else if(horario >= "00"){
    dia.innerText = "Boa madrugada!"
} else if(horario >= "06"){
    dia.innerText = "Bom dia :)"
}


// function verificando (){
//     let verificandoValor = true;
//     const verificandoS = valor.value;
//     if(verificandoValor === true){
//         resultado.innerText = "Adicione algum número para criar a sua tabuada :)"
//     } if(verificandoS.length > 0){
//         verificandoValor = false;
//     }
// }



// Criando uma função para ser executada. Fazer modificação de verificação se o usuário preencheu os campos corretamente.
function tabuada (){
    // Adicionando um valor vazio.
    let valorVazio = " ";

    // adicionando valor limpo
    const valorLimpo = valor.value.trim();

    console.log(valor.value)

    if(valorLimpo.length > 0 && !isNaN(valorLimpo)){
    // adicionando um for
    for(zero = 0; zero <= 10; zero++){

        valorVazio += `${valorLimpo} x ${zero} = ${valorLimpo * zero}\n`;
    }
} else if(valorLimpo === ""){
    resultado.innerText = "Adicione algum número para criar a sua tabuada :)"
}
    // chamando o resultado.
    resultado.innerText = valorVazio;
}

// criando um evento de quando o usuário clicar no botão, executar a função tabuada ();
enviar.addEventListener("click", tabuada);
enviar.addEventListener("click", verificando)
