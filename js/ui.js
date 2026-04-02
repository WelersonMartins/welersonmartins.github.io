/**
 * Lista de temas disponíveis em ordem de ciclo
 */
const TEMAS_DISPONIVEIS = ["light", "dark", "azul", "verde"];

/**
 * Mapeia nomes de temas para labels de exibição
 */
const LABELS_TEMAS = {
  light: "Tema: Light",
  dark: "Tema: Dark",
  azul: "Tema: Azul",
  verde: "Tema: Verde",
};

/**
 * Aplica o tema selecionado ao documento e atualiza o texto do botão de tema.
 */
export function aplicarTema(tema) {
  // Define o atributo data-bs-theme no elemento raiz do documento
  document.documentElement.setAttribute("data-bs-theme", tema);
  // Atualiza o texto do botão dropdown para refletir o tema atual
  const botaoTema = document.getElementById("dropdownTema");
  if (botaoTema) botaoTema.textContent = LABELS_TEMAS[tema] || "Tema: Light";
}

/**
 * Define um tema específico e salva no localStorage
 */
export function definirTema(tema, TEMA_STORAGE_KEY) {
  if (TEMAS_DISPONIVEIS.includes(tema)) {
    aplicarTema(tema);
    localStorage.setItem(TEMA_STORAGE_KEY, tema);
  }
}

/**
 * Alterna entre os temas disponíveis, aplicando o novo tema e salvando a escolha no localStorage.
 */
export function alternarTema(TEMA_STORAGE_KEY) {
  // Obtém o tema atual do atributo data-bs-theme ou usa o tema padrão se não estiver definido
  const temaAtual =
    document.documentElement.getAttribute("data-bs-theme") || "light";
  // Encontra o índice do tema atual na lista
  const indiceAtual = TEMAS_DISPONIVEIS.indexOf(temaAtual);
  // Calcula o índice do próximo tema (volta ao início se estiver no final)
  const proximoIndice = (indiceAtual + 1) % TEMAS_DISPONIVEIS.length;
  const novoTema = TEMAS_DISPONIVEIS[proximoIndice];
  // Aplica o novo tema
  aplicarTema(novoTema);
  // Salva o novo tema no localStorage para persistir a escolha do usuário
  localStorage.setItem(TEMA_STORAGE_KEY, novoTema);
}

export function renderizarProdutos(listaProdutos) {
  const container = document.getElementById("lista-produtos");
  if (!container) return;

  const sincronizarCarrinho = () => {
    const total = Array.from(
      document.querySelectorAll("input[id^='quantidade-']"),
    ).reduce((acc, input) => acc + Math.max(0, parseInt(input.value) || 0), 0);
    document.querySelector("#total-carrinho").textContent = total;
  };

  const adicionarAoCarrinho = (idElemento, value) => {
    const quantidadeInput = document.querySelector(`#${idElemento}`);
    const novaQuantidade = Math.max(
      0,
      (parseInt(quantidadeInput.value) || 0) + value,
    );
    quantidadeInput.value = novaQuantidade;
    sincronizarCarrinho();
  };

  container.innerHTML = listaProdutos
    .map(
      (produto) => `
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${produto.titulo}</h5>
            <img src="${produto.imagem}" class="card-img-top mb-3 img-produto" alt="${produto.alt}">
            <p class="card-text">${produto.descricao}</p>
            <div class="row text-end">
              <div class="col-md-12">
                <div class="input-group">
                  <label for="quantidade-${produto.id}" class="input-group-text">Adicionar ao carrinho:</label>
                  <button class="btn btn-outline-secondary btn-md" data-id="quantidade-${produto.id}" data-step="-1" type="button">-</button>
                  <input type="number" id="quantidade-${produto.id}" class="form-control form-control-md text-center" value="0" min="0">
                  <button class="btn btn-outline-secondary btn-md" data-id="quantidade-${produto.id}" data-step="1" type="button">+</button>
                </div>
              </div>
              <div class="col-md-12 p-2 text-end">
                <a href="contato.html" class="btn btn-primary">Quero saber mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    )
    .join("");

  container.querySelectorAll("button[data-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      adicionarAoCarrinho(btn.dataset.id, parseInt(btn.dataset.step));
    });
  });
}
