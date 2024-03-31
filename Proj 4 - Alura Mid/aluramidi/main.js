function TocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else{
        console.log('elemento não encontrado ou seletor invalido')
    }
}

const ListaDeTeclas = document.querySelectorAll ('.tecla');

//let contador = 0;

//while (contador < ListaDeTeclas.length) {

//    const tecla = ListaDeTeclas[contador];
//    const instrumento = tecla.classList[1];
//    const idAudio = `#som_${instrumento}`;
    //console.log (idAudio);

//    tecla.onclick = function () {
//        TocaSom(idAudio);
//    }

//    contador = contador + 1;
    
//}

for (let contador=0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log (idAudio);

    tecla.onclick = function () {
        TocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {

        //console.log(evento.code)

        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
