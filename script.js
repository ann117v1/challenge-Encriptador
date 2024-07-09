const ingresarTexto = document.getElementById('ingresarTexto');

const btnEncriptar = document.getElementById('btnEncriptar');

const btnDesencriptar = document.getElementById('btnDesencriptar');

const mensajeFinal = document.getElementById('mensajeFinal');

const btnCopiar = document.getElementById('btnCopiar');
const personaInfo = document.getElementById('personaInfo');
const mensajeFinal2 = document.getElementById('mensajeFinal2');



let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat",]
]

btnEncriptar.addEventListener('click', () =>{
    const texto = ingresarTexto.value.toLowerCase()
    if (texto != ""){
        function encriptar(nuevoText){
            for(let i = 0; i < remplazar.length; i++){
                if(nuevoText.includes(remplazar[i][0])){
                    nuevoText = nuevoText.replaceAll(remplazar[i][0], remplazar[i][1])
                }
            };
            return nuevoText;
        }
    }else{
        alert('Ingrese un texto');
    }
    
    const textoEncriptado = encriptar(texto);

    mensajeFinal.innerHTML = textoEncriptado;

    personaInfo.classList.add('oculto');

    ingresarTexto.value = '';
    
    mensajeFinal2.style.display = 'none';
    btnCopiar.style.display = 'block';
    mensajeFinal.classList.add('ajustes');

});

btnDesencriptar.addEventListener('click', () =>{
    const texto = ingresarTexto.value.toLowerCase();
    function desencriptar (nuevoText){
        for(let i = 0; i < remplazar.length; i++){
            if(nuevoText.includes(remplazar[i][1])){
                nuevoText = nuevoText.replaceAll(remplazar[i][1], remplazar[i][0])
            }
        };
        return nuevoText;
    }

    const textoDesencriptado = desencriptar(texto)
    mensajeFinal.innerHTML = textoDesencriptado;
    personaInfo.classList.add('oculto');

    ingresarTexto.value = '';
    
    mensajeFinal2.style.display = 'none';
    btnCopiar.style.display = 'block';
    mensajeFinal.classList.add('ajustes');

})

btnCopiar.addEventListener('click', ()=>{
    let texto = mensajeFinal
    texto.select();
    document.execCommand('copy');
    alert("Se ha copiado el texto con exito!");

    mensajeFinal.innerHTML = '';
    personaInfo.classList.remove('oculto');
    mensajeFinal2.style.display = 'block';
    btnCopiar.style.display = 'none';
    mensajeFinal.classList.remove('ajustes');
    ingresarTexto.focus();

})


