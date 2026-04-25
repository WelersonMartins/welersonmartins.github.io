# 🚀 Roteiro de Aula (Live Coding): Migrando de Vanilla JS para React (Na Mesma Aplicação)

**Público-alvo:** Alunos de ADS que já conhecem HTML, CSS, JS, TS e ES6.
**Objetivo:** Pegar o projeto clássico de 3 páginas (Index, Produtos, Contato) feito com Vanilla JS e transformá-lo em uma Single Page Application (SPA) moderna com React e TypeScript, tudo dentro da mesma pasta do projeto original.

---

## 1. Introdução Teórica Rápida (10 min)

*   **A dor do Vanilla JS:** Relembre como é verboso manipular o DOM (`document.getElementById`, `innerHTML`) e o quão difícil fica manter o código quando o site cresce, além da repetição de código (Header/Footer repetidos em cada arquivo `.html`).
*   **A magia do React:** 
    *   **Componentização:** Vamos dividir a UI em blocos de montar (Lego) reutilizáveis.
    *   **Declarativo vs Imperativo:** O React (através do *Virtual DOM*) atualiza a tela automaticamente quando os dados mudam.
*   **A Estratégia de Hoje:** Não vamos criar um projeto do zero. Vamos instalar as ferramentas do React (Vite, React, React Router) diretamente no nosso projeto atual e converter nosso HTML em componentes!

---

## 2. Preparação do Ambiente: Instalando o React no Projeto Atual (15 min)

*Explique aos alunos que vamos transformar o projeto estático atual em um projeto gerenciado pelo NPM e empacotado pelo Vite.*

**Passo 2.1: Inicializar o projeto com NPM**
Abra o terminal na pasta raiz do projeto atual e rode:
```bash
npm init -y
```
*(Isso cria o arquivo `package.json` para gerenciar nossas dependências).*

**Passo 2.2: Instalar o React e Ferramentas**
Vamos instalar o React, o Vite (para rodar nosso servidor e compilar o código) e o TypeScript:
```bash
npm install react react-dom react-router-dom
npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
```

---

## 3. A Grande Transformação: O Ponto de Entrada (15 min)

Atualmente, eles têm vários arquivos HTML (`index.html`, `produtos.html`, `contato.html`). Em uma SPA React, teremos **apenas um HTML principal**.

**Passo 3.1: Ajustar o `index.html`**
Abra o `index.html` (na raiz do projeto). Delete quase tudo dentro da tag `<body>`, deixando apenas a div principal que o React usará, e referenciando nosso novo arquivo TSX principal:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Minha Loja - React</title>
  <!-- Eles podem manter os links antigos de CSS aqui por enquanto -->
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <!-- O React vai injetar toda a aplicação dentro desta div -->
  <div id="root"></div>
  
  <!-- Nosso script principal agora é um Módulo TypeScript do Vite -->
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

**Passo 3.2: O Motor do React (`main.tsx` e `App.tsx`)**
Crie uma pasta `src` na raiz.
Dentro da `src`, crie o arquivo `main.tsx`:
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

E crie o arquivo `App.tsx`:
```tsx
export function App() {
  return (
    <div>
      <h1>Migração para React Iniciada com Sucesso! 🚀</h1>
    </div>
  )
}
```

**Passo 3.3: O Teste de Fogo**
Rode no terminal:
```bash
npm run dev
```
*Mostre no navegador que o React assumiu o controle do `index.html` da raiz!*

**Passo 3.4: Estilização (Trazendo o Bootstrap de volta!)**
No projeto Vanilla, o Bootstrap era importado por uma tag `<link>` no HTML. No React com Vite, a melhor prática é tratar o CSS como uma dependência do projeto. 
No terminal, pare o servidor (Ctrl+C) e instale o Bootstrap:
```bash
npm install bootstrap
npm run dev
```
Agora, basta importar o CSS diretamente no seu arquivo principal! Abra o `src/main.tsx` e adicione no topo:
```tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
// ... resto do arquivo
```
*Destaque didático: Mostre que apenas com esse import, o Vite já entende que deve injetar o CSS do Bootstrap na aplicação inteira. E lembre-os da regra de ouro: nos componentes React, o atributo HTML `class=""` vira `className=""`!*

---

## 4. Componentizando o Layout Antigo (20 min)

Lembre aos alunos: *"Abram seus antigos arquivos `produtos.html` e `contato.html`. Lembram que o `<header>` e o `<footer>` são iguais em todos? Vamos transformá-los em componentes."*

**Passo 4.1: O Header**
Crie a pasta `src/components` e o arquivo `Header.tsx`. Copie o HTML do `<header>` deles do arquivo antigo e cole lá dentro:
```tsx
// src/components/Header.tsx
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <h2>Minha Loja</h2>
        {/* Aviso didático: Transforme as antigas tags <a> em componentes <Link> do React Router */}
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
```
*(Importante: Mostre a eles que as propriedades como `class` no HTML antigo devem ser renomeadas para `className` no React JSX).*

**Passo 4.2: O Footer**
Crie o arquivo `src/components/Footer.tsx`. Copie o HTML do footer antigo deles para cá:
```tsx
// src/components/Footer.tsx
export function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Minha Loja - Todos os direitos reservados.</p>
    </footer>
  );
}
```

---

## 5. Roteamento: Juntando as Peças (20 min)

Como deletamos (ou vamos ignorar) os arquivos `produtos.html` e `contato.html`, precisamos avisar o React como trocar de página dinamicamente.

**Passo 5.1: Configurar as Rotas no App.tsx**
Atualize o `App.tsx`:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Componentes temporários (mocks) representando nossas antigas páginas
const Home = () => <h2>Página Inicial Antiga</h2>;
const Produtos = () => <h2>Nossos Produtos</h2>;
const Contato = () => <h2>Fale Conosco</h2>;

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* O conteúdo do 'main' dinâmico vai mudar de acordo com a rota URL */}
        <main className="container-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
```
*Ação: Clique nos links do Header e mostre a navegação ocorrendo instantaneamente (Single Page Application)!*

---

## 6. Convertendo a Página de Produtos: Listas e Props (25 min)

Aqui vamos substituir a manipulação de DOM que eles faziam no Vanilla JS pelo uso do `.map()` direto no JSX. Vamos aproveitar o arquivo `js/produtos.js` que já existe no projeto!

**Passo 6.1: Criar o ProdutoCard (Reutilização)**
Crie `src/components/ProdutoCard.tsx`:
```tsx
// src/components/ProdutoCard.tsx
interface ProdutoCardProps {
  id: string;
  titulo: string;
  imagem: string;
  alt: string;
  descricao: string;
  preco: number;
}

export function ProdutoCard({ titulo, imagem, alt, descricao, preco }: ProdutoCardProps) {
  return (
    <div className="card-produto">
      <img src={imagem} alt={alt} style={{ maxWidth: '100%', borderRadius: '8px' }} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p><strong>R$ {preco.toFixed(2)}</strong></p>
      <button>Comprar</button>
    </div>
  );
}
```

**Passo 6.2: A Página de Produtos**
Crie a pasta `src/pages` e o arquivo `Produtos.tsx`. Traga a antiga lógica de lista deles pra cá e importe a lista original:
```tsx
// src/pages/Produtos.tsx
import { ProdutoCard } from '../components/ProdutoCard';
// Importando os dados reais que eles já tinham no projeto Vanilla
import { produtos } from '../../js/produtos.js';

export function Produtos() {
  return (
    <div>
      <h2>Nossos Produtos</h2>
      <div className="grid-produtos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {produtos.map((produto) => (
          <ProdutoCard 
            key={produto.id} 
            id={produto.id}
            titulo={produto.titulo} 
            imagem={produto.imagem}
            alt={produto.alt}
            descricao={produto.descricao}
            preco={produto.preco} 
          />
        ))}
      </div>
    </div>
  );
}
```
*Volte ao `App.tsx` e troque o componente mock `<Produtos />` pela importação real.*

---

## 7. Convertendo a Página de Contato: Formulários e Estado (20 min)

Mostre como sair da leitura imperativa do DOM (`document.getElementById`) para Componentes Controlados pelo React (`useState`).

**Passo 7.1: A Página de Contato**
Crie `src/pages/Contato.tsx`. Copie o formulário HTML antigo deles e adicione os *Hooks*:

```tsx
// src/pages/Contato.tsx
import { useState, FormEvent } from 'react';

export function Contato() {
  // O Hook de Estado substitui as leituras de valores manuais no DOM
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Equivalente ao event.preventDefault() do Vanilla JS
    alert(`Mensagem enviada!\nNome: ${nome}\nMensagem: ${mensagem}`);
    
    // Limpar o formulário agora é fácil e declarativo:
    setNome('');
    setMensagem('');
  };

  return (
    <div>
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit} className="form-contato">
        <div>
          <label>Nome:</label>
          {/* Two-Way Data Binding */}
          <input 
            type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea 
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
```
*Volte ao `App.tsx` e troque o componente mock pela importação real.*

---

## 8. Finalização (10 min)

*   **Página Inicial:** Crie o `src/pages/Home.tsx` copiando o miolo principal do `index.html` original e importe no `App.tsx`.
*   **A Limpeza Final:** Agora você e a turma podem apagar com segurança os antigos arquivos `produtos.html`, `contato.html` e os arquivos `.js` soltos (pois agora a aplicação inteira é centralizada via Vite e React Router a partir do `index.html` e `main.tsx`).
*   **Revisão:** Relembre a turma como eles começaram com múltiplos arquivos redundantes de HTML e agora têm uma única SPA moderna, com estados dinâmicos e roteamento sem *reload*.
