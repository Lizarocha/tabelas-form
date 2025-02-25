document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.querySelector("table");
    const cabecalhos = tabela.querySelectorAll("th");

    function ordenarTabela(indiceColuna) {
        const linhas = Array.from(tabela.querySelectorAll("tbody tr"));

        const linhasOrdenadas = linhas.sort((linhaA, linhaB) => {
            const celulaA = linhaA.cells[indiceColuna].textContent.trim();
            const celulaB = linhaB.cells[indiceColuna].textContent.trim();

            return celulaA.localeCompare(celulaB);
        });

        const corpoTabela = tabela.querySelector("tbody");
        corpoTabela.innerHTML = "";
        linhasOrdenadas.forEach(linha => corpoTabela.appendChild(linha));
    }

    cabecalhos.forEach((cabecalho, indice) => {
        cabecalho.addEventListener("click", function() {
            ordenarTabela(indice);
        });
    });
});
