const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", calcular);

function calcular() {

    const campoNumero1 = document.getElementById("numero1");
    const campoNumero2 = document.getElementById("numero2");

    if (campoNumero1.value.trim() === "" || campoNumero2.value.trim() === "") {
        alert("Preencha os dois campos.");
        return;
    }

    const numero1 = Number(campoNumero1.value);
    const numero2 = Number(campoNumero2.value);

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;

    const divisao = numero2 !== 0
        ? (numero1 / numero2).toFixed(2)
        : "Não é possível dividir por zero.";

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h2>Resultados</h2>
        <hr>
        <p>➕ <strong>Soma:</strong> ${soma}</p>
        <p>➖ <strong>Subtração:</strong> ${subtracao}</p>
        <p>✖️ <strong>Multiplicação:</strong> ${multiplicacao}</p>
        <p>➗ <strong>Divisão:</strong> ${divisao}</p>
    `;
}