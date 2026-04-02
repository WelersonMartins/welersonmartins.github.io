import { aplicarTema, definirTema, renderizarProdutos } from "./ui.js";
import { buscarCep } from "./api.js";
import { produtos } from "./produtos.js";

// Retorna o tema salvo no localStorage ou usa o tema padrão se não houver um tema salvo, e aplica o tema ao carregar a página
const temaSalvo = localStorage.getItem("tema") || "light";
// Executa a função para aplicar o tema salvo ou o tema padrão ao carregar a página
aplicarTema(temaSalvo);

// Adiciona listeners nos itens do dropdown de tema
document.querySelectorAll("[data-tema]").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    definirTema(e.currentTarget.dataset.tema);
  });
});

// Listener para buscar o cep
const cepInput = document.getElementById("cep");
if (cepInput) cepInput.addEventListener("blur", buscarCep);

// Renderiza os cards de produtos dinamicamente na página de produtos
renderizarProdutos(produtos);
