# 🏋️ Desafio Versão 30D

Aplicação de desafio fitness e dieta de 30 dias com interface em português, incluindo dicas diárias, receitas, treinos, acompanhamento de progresso e anotações.

## 🚀 Tecnologias

- **Frontend**: React + Vite + Tailwind CSS + Shadcn UI
- **Backend**: Express + TypeScript
- **Banco de Dados**: PostgreSQL (Neon)
- **ORM**: Drizzle
- **Deploy**: Vercel

## 📋 Funcionalidades

- ✅ 30 dias de conteúdo progressivo
- ✅ Dicas diárias de alimentação e saúde
- ✅ Exercícios práticos
- ✅ Receitas saudáveis
- ✅ Treinos personalizados
- ✅ Sistema de progresso e acompanhamento
- ✅ Anotações por dia
- ✅ Recompensas a cada 3 dias
- ✅ Interface totalmente em português
- ✅ Modo escuro/claro
- ✅ Design responsivo

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ instalado
- Conta no [Neon](https://neon.tech) para PostgreSQL

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd <pasta-do-projeto>

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite .env com sua DATABASE_URL do Neon

# Execute as migrações do banco de dados
npm run db:push

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5000`

## 📦 Build para Produção

```bash
# Gere o build de produção
npm run build

# Inicie o servidor de produção
npm start
```

## 🌐 Deploy no Vercel

Consulte o arquivo [DEPLOY.md](./DEPLOY.md) para instruções detalhadas de deploy no Vercel.

**Resumo rápido:**

1. Faça push do código para o GitHub
2. Importe o projeto no Vercel
3. Configure a variável de ambiente `DATABASE_URL`
4. Deploy!

## 📁 Estrutura do Projeto

```
├── api/                  # Serverless functions para Vercel
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── data/        # Dados do desafio
│   │   ├── pages/       # Páginas da aplicação
│   │   └── lib/         # Utilitários
├── server/              # Backend Express
│   ├── routes.ts        # Rotas da API
│   └── storage.ts       # Interface de armazenamento
├── shared/              # Código compartilhado
│   └── schema.ts        # Schema do banco de dados
└── dist/                # Build de produção
```

## 🗄️ Banco de Dados

O projeto usa PostgreSQL via Neon com Drizzle ORM.

### Migrações

```bash
# Aplicar mudanças no schema ao banco de dados
npm run db:push
```

## 🎨 Personalização

### Cores do Tema

As cores podem ser personalizadas em `client/src/index.css` através das variáveis CSS:

```css
:root {
  --primary: ...
  --secondary: ...
  --accent: ...
  /* etc */
}
```

### Conteúdo do Desafio

O conteúdo dos 30 dias está em `client/src/data/challengeData.ts`. Você pode editar:

- Dicas diárias
- Exercícios práticos
- Receitas
- Treinos

## 📝 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido com ❤️ para ajudar você a alcançar seus objetivos de saúde e fitness!
