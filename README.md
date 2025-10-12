# 🎮 Pokédex - Teste Técnico

Uma aplicação web moderna e responsiva para explorar o universo Pokémon, desenvolvida em React para o teste técnico do DevQuest

# 🎮 Pokédex - Teste Técnico

Uma aplicação web moderna e responsiva para explorar o universo Pokémon, desenvolvida em React para o teste técnico do DevQuest

## 🎬 Preview da Aplicação

![Pokédex Demo](./demo-pokedex.gif)

*Aplicacao em funcionamento mostrando navegação entre páginas e alternância de temas*


## 📋 Descrição do Projeto

A **Pokédex** é uma aplicação web interativa que permite aos usuários explorar, visualizar e obter informações detalhadas sobre diferentes Pokémon. O projeto foi desenvolvido como parte de um teste técnico, demonstrando habilidades em desenvolvimento frontend moderno com React.

A aplicação oferece uma experiência imersiva, incluindo cartas estilizadas, animações suaves e um sistema de temas claro/escuro.

## ✨ Funcionalidades Implementadas

### 🏠 Página Principal (Home)
- **Grid responsivo** de cartas Pokémon
- **Carregamento dinâmico** de Pokémon via API
- **Botão "Carregar mais"** para paginação
- **Design responsivo** adaptável a diferentes telas
- **Sistema de temas** claro e escuro

### 🎴 Página de Detalhes do Pokémon
- **Informações completas**: tipos, habilidades, estatísticas e movimentos
- **Imagem oficial** do Pokémon com animação de flutuação
- **Navegação** com botão voltar

### 🔧 Funcionalidades Técnicas
- **Gerenciamento de estado** com Context API
- **Componentização** modular e reutilizável
- **Estilização** com Styled Components
- **Responsividade** para mobile e desktop

## 🛠️ Ferramentas Utilizadas

### **React**
- **Escolhido por**: Framework moderno, componentização eficiente e ecossistema robusto
- **Benefícios**: Reutilização de componentes, gerenciamento de estado eficiente e performance otimizada

### **Styled Components**
- **Escolhido por**: Permite estilização dinâmica e temática
- **Benefícios**: Componentes estilizados reutilizáveis, suporte a temas e melhor organização do CSS

### **React Router DOM**
- **Escolhido por**: Roteamento eficiente e navegação SPA
- **Benefícios**: Navegação sem reload, URLs amigáveis e experiência de usuário fluida

### **PokéAPI**
- **Escolhido por**: API gratuita, completa e bem documentada
- **Benefícios**: Dados atualizados, endpoints RESTful e informações detalhadas dos Pokémon

### **Create React App**
- **Escolhido por**: Setup rápido e configuração otimizada
- **Benefícios**: Hot reload, build otimizado e ambiente de desenvolvimento pronto

## 🎯 Decisões de Design e Arquitetura

### **1. Estrutura de Componentes**
```

# Componentes reutilizáveis
# Páginas principais
# Gerenciamento de estado global
# Custom hooks
# Configuração de rotas
# Estilos globais e temas
# Recursos estáticos
```

**Justificativa**: Organização modular que facilita manutenção e escalabilidade.

### **2. Styled Components vs CSS Modules**
**Escolhido**: Styled Components
**Justificativa**: 
- Estilização dinâmica para temas
- Componentes autocontidos
- Melhor integração com React
- Suporte nativo a props e temas

### **3. Context API vs Redux**
**Escolhido**: Context API
**Justificativa**:
- Simplicidade para gerenciamento de tema
- Menos boilerplate
- Adequado para estado global simples
- Performance satisfatória para este escopo

### **4. Design System**
**Características**:
- **Fonte**: Pixelify Sans (estilo retrô dos jogos)
- **Cores**: Paleta baseada nos jogos originais
- **Animações**: Suaves e responsivas
- **Layout**: Grid responsivo e flexível

**Justificativa**: Criar uma experiência autêntica que remete aos jogos clássicos de Pokémon.

### **5. Estrutura de Dados**
**Abordagem**: Fetch direto da API com Promise.all
**Justificativa**: 
- Simplicidade de implementação
- Dados sempre atualizados
- Menos complexidade de cache

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- npm ou yarn
- Git

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd teste-tecnico-pokedex
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo desenvolvimento**
```bash
npm start
# ou
yarn start
```

4. **Acesse a aplicação**
```
Abra http://localhost:3000 no seu navegador
```

## 🎨 Temas

### **Tema Claro**
- Fundo: Gradiente azul/roxo
- Cards: Branco com sombras suaves
- Texto: Cinza escuro

### **Tema Escuro**
- Fundo: Gradiente cinza escuro
- Cards: Cinza escuro com bordas
- Texto: Branco/cinza claro

## 🔗 Links Úteis

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [React Documentation](https://react.dev/)
- [Styled Components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico e é destinado apenas para fins de avaliação.

---

**Desenvolvido por Vitor Binhotti ❤️**
