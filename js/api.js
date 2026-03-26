/**
 * Busca o cep na api do viacep
 */
function buscarCep() {
  const cepInput = document.getElementById("cep");
  const cep = cepInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("uf").value = data.uf;
        } else {
          alert("CEP não encontrado.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o CEP:", error);
        alert("Ocorreu um erro ao buscar o CEP.");
      });
  } else {
    alert("Por favor, insira um CEP válido com 8 dígitos.");
  }
}

// Listener para buscar o cep
const cepInput = document.getElementById("cep");
if (cepInput) cepInput.addEventListener("blur", buscarCep);
