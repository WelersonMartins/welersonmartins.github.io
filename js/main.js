import { aplicarTema, definirTema, renderizarProdutos } from "./ui.js";
import { buscarCep } from "./api.js";
import { produtos } from "./produtos.js";

// O nome da chava onde salvamos o tema no localStorage
const TEMA_STORAGE_KEY = "tema";

// Retorna o tema salvo no localStorage ou usa o tema padrão se não houver um tema salvo, e aplica o tema ao carregar a página
const temaSalvo = localStorage.getItem(TEMA_STORAGE_KEY) || "light";
// Executa a função para aplicar o tema salvo ou o tema padrão ao carregar a página
aplicarTema(temaSalvo);

// Adiciona listeners para os itens do dropdown de tema
const botoesDropdownTema = document.querySelectorAll("[data-tema]");
botoesDropdownTema.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    const temaSelecionado = botao.getAttribute("data-tema");
    definirTema(temaSelecionado, TEMA_STORAGE_KEY);
  });
});

// Listener para buscar o cep
const cepInput = document.getElementById("cep");
if (cepInput) cepInput.addEventListener("blur", buscarCep);

// Renderiza os cards de produtos dinamicamente na página de produtos
renderizarProdutos(produtos);
