const textarea = document.querySelector('.textarea');
const mensagem = document.querySelector('.mensagem');

function encripitar(){
    const textoEncriptado = encripitar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value ='';

}

function encriptar(stringEncriptada) {

    let matrizCodigo = [['a', 'ai'], ['e','enter'],['i','imes'], ['o', 'ober'],['u','ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes([i][0]))
        stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        


    }
return stringEncriptada;
}

function desencripitar(){
    const textoDesencriptado = desencripitar(textarea.value);
    mensagem.value = textoDesencriptado;
    textarea.value ='';

}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [['a', 'ai'], ['e','enter'],['i','imes'], ['o', 'ober'],['u','ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptada.includes([i][0]))
        stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        


    }
return stringDesencriptada;
}