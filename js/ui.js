function adicionarAoCarrinho(idElemento, value) {

	const quantidadeInput = document.querySelector(`#${idElemento}`);
	const quantidadeCarrinho = document.querySelector("#total-carrinho");
	let quantidade = parseInt(quantidadeInput.value);
	quantidade = quantidade + value < 0 ? 0 : quantidade + value; // Evita que a quantidade fique negativa
	quantidadeInput.value = quantidade + value;
	quantidadeCarrinho.textContent = parseInt(quantidadeCarrinho.textContent) + value;
}