var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name="valorTamanho"]');
console.log(inputTamanho, outputTamanho)
function mostraTamanho(){
    outputTamanho.value = inputTamanho.value
}

inputTamanho.oninput = mostraTamanho()