# 🏥 Desafio Rotas — Sistema de Saúde Comunitária

> Aplicação React com roteamento client-side, SCSS Modules e design system voltado para saúde comunitária gratuita.

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router)](https://reactrouter.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vite.dev)
[![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?logo=sass)](https://sass-lang.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 Visão Geral

**Desafio Rotas** é uma aplicação frontend construída como desafio técnico de roteamento com React. Simula o portal de uma ONG de saúde comunitária — a **SaúdePara Todos** — que oferece serviços médicos gratuitos à população vulnerável.

A aplicação demonstra:

- ✅ Roteamento client-side com **React Router v7** (BrowserRouter + Routes + Route)
- ✅ Estilização isolada por componente com **SCSS Modules**
- ✅ Design system consistente (variáveis globais, paleta de cores, tipografia)
- ✅ Componentização com separação clara de responsabilidades
- ✅ Estrutura de projeto escalável e organizada por feature

---

## ✨ Funcionalidades

| Página | Rota | Descrição |
|--------|------|-----------|
| **Home** | `/` | Hero com chamada à ação, cards de missão e estatísticas de impacto |
| **Como Ajudar** | `/como-ajudar` | 8 serviços médicos gratuitos (clínica, odonto, saúde mental, etc.) + CTA de contato |
| **Seja Voluntário** | `/voluntario` | Benefícios de ser voluntário, formulário de inscrição |
| **Header** | global | Navegação persistente com links reativos |
| **Footer** | global | Informações de contato e links de redes sociais |

---

## 🛠️ Tech Stack

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| UI Library | React | `^19.2.0` |
| Roteamento | React Router DOM | `^7.10.1` |
| Build Tool | Vite | `^7.2.4` |
| Estilização | SCSS Modules (sass) | `^1.94.2` |
| Linting | ESLint | `^9.39.1` |
| Linguagem | JavaScript (JSX) | ES Modules |

---

## 📁 Estrutura do Projeto

```
desafio-rotas/
├── public/
│   └── vite.svg                    # Favicon
├── src/
│   ├── assets/                     # Imagens e ícones (heart.svg, medico.png, coracao.png)
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx          # Barra de navegação global
│   │   │   └── header.module.scss
│   │   └── NossaMissao/
│   │       ├── NossaMIssao.jsx     # Cards de missão (reutilizável)
│   │       └── nossa_missao.module.scss
│   ├── pages/
│   │   ├── ComoAjudar/
│   │   │   ├── ComoAjudar.jsx      # Rota /como-ajudar
│   │   │   └── comoAjudar.module.scss
│   │   ├── Footer/
│   │   │   ├── Footer.jsx          # Rodapé global
│   │   │   └── estilos.module.scss
│   │   ├── Home/
│   │   │   ├── Home.jsx            # Rota /
│   │   │   └── home.module.scss
│   │   └── Voluntario/
│   │       ├── Voluntario.jsx      # Rota /voluntario
│   │       └── voluntario.module.scss
│   ├── App.jsx                     # Definição de rotas (BrowserRouter + Routes)
│   ├── main.jsx                    # Entry point React
│   └── globalStyle.scss            # Variáveis SCSS globais e reset
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Pré-requisitos

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9 (ou pnpm / yarn)

### 1. Clone o repositório

```bash
git clone https://github.com/sherloCod3/desafio-rotas.git
cd desafio-rotas
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em **[http://localhost:5173](http://localhost:5173)**.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor dev com HMR (Hot Module Replacement) |
| `npm run build` | Gera build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Executa o ESLint em todo o projeto |

---

## 🗺️ Roteamento

O roteamento é configurado em `src/App.jsx` usando React Router v7:

```jsx
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/"            element={<Home />} />
    <Route path="/voluntario"  element={<Voluntario />} />
    <Route path="/como-ajudar" element={<ComoAjudar />} />
  </Routes>
</BrowserRouter>
```

O `<Header />` fica fora do `<Routes>` para ser renderizado em todas as páginas.
A navegação é feita com `<Link>` do React Router — sem recarregamento de página.

---

## 🎨 Design System

As variáveis globais de design ficam em `src/globalStyle.scss` e são importadas por cada módulo SCSS:

```scss
// Paleta de cores principal
$cor-verde-escuro:  #004d40;
$cor-verde-medio:   #00695c;
$cor-texto-claro:   #b2dfdb;
$cor-texto-escuro:  #333333;
$cor-borda:         #e0e0e0;
```

Cada componente usa **CSS Modules** (`*.module.scss`) para escopo isolado — sem vazamento de estilos entre componentes.

---

## 🏗️ Arquitetura de Componentes

```
App (BrowserRouter)
├── Header               ← navegação global (sempre visível)
├── Routes
│   ├── / → Home
│   │       ├── [hero section]
│   │       └── NossaMissao (cards)
│   ├── /como-ajudar → ComoAjudar
│   │       ├── [hero]
│   │       ├── [grade de 8 serviços médicos]
│   │       └── [CTA contato]
│   └── /voluntario → Voluntario
│           ├── [hero]
│           ├── [benefícios]
│           └── [formulário de inscrição]
└── Footer               ← rodapé global (dentro de cada page)
```

---

## 🤝 Contribuindo

```bash
# 1. Fork e clone
git clone https://github.com/sherloCod3/desafio-rotas.git

# 2. Crie uma branch para sua feature
git checkout -b feat/minha-feature

# 3. Commit seguindo Conventional Commits
git commit -m "feat(pagina): adiciona nova seção X"

# 4. Push e abra um Pull Request
git push origin feat/minha-feature
```

### Convenções de Commit

| Prefixo | Uso |
|---------|-----|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Alterações na documentação |
| `style` | Formatação, sem alteração de lógica |
| `refactor` | Refatoração sem mudança de comportamento |
| `chore` | Tarefas de manutenção |

---

## 🐛 Troubleshooting

**Porta 5173 já em uso:**
```bash
npm run dev -- --port 3000
```

**Erros de SCSS não resolvido:**
```bash
# Verifique se o pacote sass está instalado
npm install sass
```

**Rota em branco / 404 em produção:**

O projeto usa `BrowserRouter` (history API). Em servidores estáticos (Nginx, Apache), configure o redirecionamento de todas as rotas para `index.html`:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<p align="center">
  Feito com ❤️ por <a href="https://github.com/sherloCod3">Alexandre Cavalari — SherloCod3</a>
</p>
