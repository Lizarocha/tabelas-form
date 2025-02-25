document.addEventListener("DOMContentLoaded", function() {
    const btnGravar = document.getElementById("btnGravar");
    const tabela = document.querySelector("table tbody");


    function adicionarLivro(titulo, autor) {
        const novaLinha = document.createElement("tr");


        const celulaTitulo = document.createElement("td");
        celulaTitulo.textContent = titulo;
        const celulaAutor = document.createElement("td");
        celulaAutor.textContent = autor;


        novaLinha.appendChild(celulaTitulo);
        novaLinha.appendChild(celulaAutor);


     
        tabela.appendChild(novaLinha);
    }

    btnGravar.addEventListener("click", function(event) {
        event.preventDefault();


        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;

    });
});




