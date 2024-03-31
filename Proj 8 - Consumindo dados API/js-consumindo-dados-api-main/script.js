async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var ConsultaCEPConvertida = await consultaCEP.json();
        if (ConsultaCEPConvertida.erro) {
            throw Error('CEP não existe!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = ConsultaCEPConvertida.localidade;
        logradouro.value = ConsultaCEPConvertida.logradouro;
        estado.value = ConsultaCEPConvertida.uf;

        console.log (ConsultaCEPConvertida);
        return ConsultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<P>CEP  inválido. Tente novamente!</p>`
        console.log(erro)
    }
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));