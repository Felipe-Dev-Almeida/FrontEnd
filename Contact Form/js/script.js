//Essa funçaõ recebe os dados do fumulário em um objeto JavaScript
async function cadastrarContatos(objetoContato) {


    console.log(objetoContato);

   const resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),//converte o objeto JavaScript em JSON
        headers: {//Infoma para a api que o body está sendo enviado no formato JSON
            "Content-type": "application/json; charset=UTF-8"
        },
     });

     return await resposta;
     
    }
        
        async function buscarEndereco(cep) {
            
            //qunado o cep não vier preenchido
            if (cep.trim().length < 8) {
                alert("O CEP deve ter 8 números")
                return false;
            }

    //buascar o CEP lá na ViaCep
    try {
        aguardandoCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();

        console.log(dados.logradouro);
        console.log(dados.bairro);
        console.log(dados.localidade);
        console.log(dados.uf);

        document.getElementById('rua').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.localidade;
        document.getElementById('estado').value = dados.uf;

    } catch (error) {
        console.log(error)
    }

}

function aguardandoCampos() {

    document.getElementById('rua').value = "aguarde ...";
    document.getElementById('bairro').value = "aguarde ...";
    document.getElementById('cidade').value = "aguarde ...";
    document.getElementById('estado').value = "aguarde ...";
}


function validarFormulario() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let ddi = document.getElementById('ddi').value;
    let ddd = document.getElementById('ddd').value;
    let telefone = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let endereco = document.getElementById('endereco').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let complemento = document.getElementById('complemento').value;
    let anotacoes = document.getElementById('anotacoes').value;

    let quantidadeErros = 0;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }
    else {
        reiniciaBorda("nome");
    }

    //sobrenome
    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("sobrenome");
    }

    if (quantidadeErros > 0) {
        alert("Preencha todos o campos!");
        quantidadeErros = 0;
    } else {

        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            ddi: ddi,
            ddd: ddd,
            telefone: telefone,
            cep: cep,
            rua: rua,
            endereco: endereco,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            complemento: complemento,
            anotacoes: anotacoes
        }

        let cadastro = cadastrarContatos(objetoContato);

        reiniciaBorda();
    }


    //email
    if (email.trim().length == 0) {
        formError("email");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("email");
    }


    //telefone
    if (ddi.trim().length == 0) {
        formError("ddi");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("ddi");
    }

    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("ddd");
    }

    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("telefone");
    }


    //endereço
    if (cep.trim().length == 0) {
        formError("cep");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("cep");
    }

    if (rua.trim().length == 0) {
        formError("rua");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("rua");
    }

    if (endereco.trim().length == 0) {
        formError("endereco");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("bloco");
    }

    if (estado.trim().length == 0) {
        formError("estado");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("estado");
    }


    if (cidade.trim().length == 0) {
        formError("cidade");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("cidade");
    }

    if (bairro.trim().length == 0) {
        formError("bairro");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("cidade");
    }


    //complemento
    if (complemento.trim().length == 0) {
        formError("complemento");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("complemento");
    }

    //anotações
    if (anotacoes.trim().length == 0) {
        formError("anotacoes");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else {
        reiniciaBorda("anotacoes");
    }

    if (quantidadeErros > 0) {
        alert("Existem " + quantidadeErros + " erros no formulário!");
        quantidadeErros = 0;
    }
    else {
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}