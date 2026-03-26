# Tech Store — Projeto Prático de Desenvolvimento Frontend

Projeto didático desenvolvido nas aulas de **Análise e Desenvolvimento de Sistemas**, cobrindo desenvolvimento web e Git de forma progressiva e prática.

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Git & GitHub
- Vite
- ESLint
- Prettier
- Husky + lint-staged

---

## Ferramentas de Desenvolvimento

### Vite

Utilizado como servidor de desenvolvimento e ferramenta de build do projeto.

- Desenvolvimento local: `npm run dev`
- Build de produção: `npm run build`

### ESLint

Responsável por analisar o código JavaScript e apontar problemas de qualidade, padrão e possíveis erros.

- Verificar código: `npm run lint`

Configuração em `eslint.config.mjs` com:

- Regras recomendadas do ESLint (`@eslint/js`)
- Compatibilidade com Prettier (`eslint-config-prettier`)
- Ambiente de navegador e módulos ES

### Prettier

Ferramenta de formatação automática para manter o estilo de código consistente.

- Formatar arquivos: `npm run format`

### Husky + lint-staged

Husky é usado para automação de hooks de Git e o `lint-staged` roda validações apenas nos arquivos alterados antes do commit.

No projeto, os arquivos `*.js` e `*.ts` staged passam por:

1. `eslint --fix`
2. `prettier --write`

Isso ajuda a garantir qualidade e padronização do código antes de subir alterações.

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

## Setup Inicial

1. Clone o repositório:
   ```bash
   git clone https://github.com/WelersonMartins/welersonmartins.github.io.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd welersonmartins.github.io
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como executar localmente

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
2. Abra a URL mostrada no terminal (normalmente `http://localhost:5173`).

## Comandos úteis

- Verificar código com ESLint:
  ```bash
  npm run lint
  ```
- Formatar arquivos com Prettier:
  ```bash
  npm run format
  ```
- Gerar build de produção:
  ```bash
  npm run build
  ```

---

## Acesso Online

O site está publicado via GitHub Pages:
**[welersonmartins.github.io](https://welersonmartins.github.io)**
