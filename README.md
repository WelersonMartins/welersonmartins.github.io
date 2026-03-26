# Tech Store — Projeto Prático de Desenvolvimento Frontend

Projeto didático desenvolvido nas aulas de **Análise e Desenvolvimento de Sistemas**, cobrindo desenvolvimento web e Git de forma progressiva e prática.

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Git & GitHub

---

## Estrutura do Projeto

```
├── index.html        # Página inicial (Home)
├── produtos.html     # Página de produtos
├── contato.html      # Página de contato
├── css/
│   └── style.css     # Estilos personalizados
├── js/
│   ├── main.js       # Lógica principal (tema, etc.)
│   ├── ui.js         # Manipulação da interface
│   └── api.js        # Consumo de APIs externas
└── imagens/          # Imagens do projeto
```

---

## Roteiro do Projeto

O projeto é dividido em **7 partes progressivas** que ensinam desenvolvimento web e Git simultaneamente.

### Parte 1 — Git + Bootstrap `(Passos 1–7)`

Fundamentos de Git: criar repositório, commits, branches, merge e resolução de conflitos. O resultado é uma página `index.html` simples com Bootstrap integrado.

### Parte 2 — Site Multi-páginas `(Passos 8–12)`

Expansão para 3 páginas (Home, Produtos, Contato) usando componentes Bootstrap como Navbar, Grid, Cards e Forms. Tudo gerenciado em branches separadas.

### Parte 3 — JavaScript Interativo `(Passos 13–15)`

Criação de um simulador de orçamento: checkboxes e inputs numéricos nos cards de produtos calculam um valor total em tempo real via manipulação do DOM.

### Parte 4 — Fetch API / Dados Externos `(Passos 16–19)`

Consumo de uma API pública (JSONPlaceholder) para gerar automaticamente cards de "Depoimentos de Clientes" na Home.

### Parte 5 — Modo Hard `(Passos 20–22)`

Envio do formulário via POST, modularização do JavaScript com ES6 (`import/export`) e uso de Modal dinâmico do Bootstrap com data attributes.

### Parte 6 — Nível Profissional `(Passos 23–24)`

Auto-preenchimento de endereço via API ViaCEP e implementação de Dark Mode com Bootstrap, salvando a preferência no `localStorage`.

### Parte 7 — Deploy `(Passo 25)`

Publicação gratuita do site no **GitHub Pages** e criação de um `README.md` para compor portfólio.

---

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/WelersonMartins/welersonmartins.github.io.git
   ```
2. Abra o arquivo `index.html` no navegador.

> Não requer instalação de dependências — o Bootstrap é carregado via CDN.

---

## Acesso Online

O site está publicado via GitHub Pages:
**[welersonmartins.github.io](https://welersonmartins.github.io)**
