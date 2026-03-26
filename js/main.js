import { aplicarTema, alternarTema, renderizarProdutos } from "./ui.js";
import { produtos } from "./produtos.js";

// O nome da chava onde salvamos o tema no localStorage
const TEMA_STORAGE_KEY = "tema";

// Retorna o tema salvo no localStorage ou usa o tema padrão se não houver um tema salvo, e aplica o tema ao carregar a página
const temaSalvo = localStorage.getItem(TEMA_STORAGE_KEY) || "light";
// Executa a função para aplicar o tema salvo ou o tema padrão ao carregar a página
aplicarTema(temaSalvo);

// Obtém o elemento do botão de tema pelo ID
const botaoTema = document.getElementById("btnTema");
// Adiciona um ouvinte de evento ao botão de tema para alternar o tema quando clicado
if (botaoTema) botaoTema.addEventListener("click", alternarTema);

// Renderiza os cards de produtos dinamicamente na página de produtos
renderizarProdutos(produtos);
