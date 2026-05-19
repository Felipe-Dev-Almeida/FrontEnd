function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!';
        return;
    }

    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;

    // cria o objeto
    const conta = {
    n1: n1,
    n2: n2,
    operacao: op,
    resultado: resultado
    };

    // Cadastra na api
    cadastrarNaAPI(conta);

    // mostra na tela
    mostrarNaTela(conta);
}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}

async function cadastrarNaAPI(objCadastro) {
    // Fazer um post dentro da api
    try {
        const retorno = await fetch("http://localhost:3000/calculadora", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json ; charset=UTF-8"
            }
        });
    } catch (error) {
        console.log(error);
        return await {error : "Problemas para gravar na API"};
    }
} // Fim da função

function mostrarNaTela(conta) {
    const section = document.querySelector(".data");

    section.innerHTML += `
        <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${conta.n1}</span>
            <span><strong>Segundo Número:</strong> ${conta.n2}</span>
            <span><strong>Operação:</strong> ${conta.operacao}</span>
            <span><strong>Resultado:</strong> ${conta.resultado}</span>
        </article>`;
}

async function carregarContas(params) {
    alert("Carregando as contas...");

    try {
        const retorno = await fetch("http://localhost:3000/calculadora");

        const contas = await retorno.json();

        document.querySelector(".data").innerHTML += "";

        contas.forEach(conta => {
            mostrarNaTela(conta);
        })
    } catch (error) {
        console.log(error);
        alert("Erro ao carregar contas");
    }
}
