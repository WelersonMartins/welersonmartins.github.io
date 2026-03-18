// Define o tema padrão
const TEMA_PADRAO = "light";
// O nome da chava onde salvamos o tema no localStorage
const TEMA_STORAGE_KEY = "tema";

/**
 * Aplica o tema selecionado ao documento e atualiza o texto do botão de tema.
 */
function aplicarTema(tema) {
	// Define o atributo data-bs-theme no elemento raiz do documento
	document.documentElement.setAttribute("data-bs-theme", tema);
	// Atualiza o texto do botão de tema para refletir o tema atual
	const botaoTema = document.getElementById("btnTema");
	if (botaoTema) 
		botaoTema.textContent = tema === "dark" ? "Tema: Dark" : "Tema: Light";
	
}

/**
 * Alterna entre os temas claro e escuro, aplicando o novo tema e salvando a escolha no localStorage.
 */
function alternarTema() {
	// Obtém o tema atual do atributo data-bs-theme ou usa o tema padrão se não estiver definido
	const temaAtual = document.documentElement.getAttribute("data-bs-theme") || TEMA_PADRAO;
	// Determina o novo tema com base no tema atual
	const novoTema = temaAtual === "light" ? "dark" : "light";
	// Aplica o novo tema e salva a escolha no localStorage
	aplicarTema(novoTema);
	// Salva o novo tema no localStorage para persistir a escolha do usuário
	localStorage.setItem(TEMA_STORAGE_KEY, novoTema);
}
// Retorna o tema salvo no localStorage ou usa o tema padrão se não houver um tema salvo, e aplica o tema ao carregar a página
const temaSalvo = localStorage.getItem(TEMA_STORAGE_KEY) || TEMA_PADRAO;
// Executa a função para aplicar o tema salvo ou o tema padrão ao carregar a página
aplicarTema(temaSalvo);

// Obtém o elemento do botão de tema pelo ID
const botaoTema = document.getElementById("btnTema");
// Adiciona um ouvinte de evento ao botão de tema para alternar o tema quando clicado
if (botaoTema) botaoTema.addEventListener("click", alternarTema);

