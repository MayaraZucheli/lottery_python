document.getElementById("gerarNumeros").addEventListener("click", function() {
    fetch("/api/gerar_numeros")
        .then(response => response.json())
        .then(data => {
            document.getElementById("numerosGerados").innerText = "Lottery Numbers: " + data.join(", ");
        })
        .catch(error => console.error('Erro ao gerar números:', error));
});
