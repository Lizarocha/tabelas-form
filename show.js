document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    const tituloInput = document.getElementById("titulo");
    const autorInput = document.getElementById("autor");
    const tabela = document.querySelector("table tbody");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const titulo = tituloInput.value.trim();
        const autor = autorInput.value.trim();

        if (titulo && autor) {
            const novaLinha = document.createElement("tr");
            const colunaTitulo = document.createElement("td");
            const colunaAutor = document.createElement("td");

            colunaTitulo.textContent = titulo;
            colunaAutor.textContent = autor;

            novaLinha.appendChild(colunaTitulo);
            novaLinha.appendChild(colunaAutor);

            tabela.appendChild(novaLinha);
            
            tituloInput.value = "";
            autorInput.value = "";
        }
    });
});





