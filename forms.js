function ordenarTabela(indiceColuna) {
        const linhas = Array.from(tabela.querySelectorAll("tr"));

    
        const linhasOrdenadas = linhas.sort((linhaA, linhaB) => {
            const celulaA = linhaA.cells[indiceColuna].textContent.trim();
            const celulaB = linhaB.cells[indiceColuna].textContent.trim();

            return celulaA.localeCompare(celulaB);
        });

        tabela.innerHTML = "";

        linhasOrdenadas.forEach(linha => {
            tabela.appendChild(linha);
        });
    }
    cabecalhos.forEach((cabecalho, indice) => {
        cabecalho.addEventListener("click", function() {
            ordenarTabela(indice);
        });
    });

