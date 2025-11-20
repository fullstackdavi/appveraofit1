# Deploy no Vercel - Desafio Versão 30D

## Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Conta no [Neon](https://neon.tech) para o banco de dados PostgreSQL

## Configuração do Banco de Dados

1. Crie um banco de dados no Neon (se ainda não tiver)
2. Copie a connection string do banco de dados
3. No Vercel, você precisará adicionar essa connection string como variável de ambiente

## Deploy

### Opção 1: Via CLI do Vercel

```bash
# Instale o Vercel CLI globalmente
npm i -g vercel

# Faça login no Vercel
vercel login

# Deploy
vercel
```

### Opção 2: Via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Faça push do código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <seu-repositorio-github>
   git push -u origin main
   ```

3. No Vercel:
   - Clique em "Add New Project"
   - Importe seu repositório do GitHub
   - Configure as variáveis de ambiente (veja abaixo)
   - Clique em "Deploy"

## Variáveis de Ambiente

Adicione as seguintes variáveis de ambiente no Vercel:

```
DATABASE_URL=<sua-connection-string-do-neon>
NODE_ENV=production
```

### Como adicionar variáveis de ambiente no Vercel:

1. Acesse o dashboard do seu projeto no Vercel
2. Vá em "Settings" > "Environment Variables"
3. Adicione cada variável:
   - Name: `DATABASE_URL`
   - Value: Sua connection string do Neon (exemplo: `postgresql://user:password@host/database`)
   - Environments: Marque "Production", "Preview" e "Development"
4. Clique em "Save"

## Migração do Banco de Dados

Após o deploy, você precisa executar as migrações do banco de dados:

```bash
# Localmente, com a DATABASE_URL configurada
npm run db:push
```

Ou configure uma GitHub Action para executar isso automaticamente.

## Verificação

Após o deploy:

1. O Vercel fornecerá uma URL (exemplo: `https://seu-projeto.vercel.app`)
2. Acesse a URL e verifique se a aplicação está funcionando
3. Teste o cadastro e login de usuários
4. Verifique se os dados estão sendo salvos no banco de dados

## Domínio Personalizado (Opcional)

1. No Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Siga as instruções para configurar o DNS

## Troubleshooting

### Erro de banco de dados

- Verifique se a `DATABASE_URL` está configurada corretamente
- Confirme que executou as migrações (`npm run db:push`)
- Verifique se o IP do Vercel está permitido no Neon (geralmente está por padrão)

### Build falha

- Verifique os logs de build no Vercel
- Confirme que todas as dependências estão no `package.json`
- Execute `npm run build` localmente para testar

### API não funciona

- Verifique se o arquivo `api/index.ts` existe
- Confirme que as rotas estão prefixadas com `/api`
- Verifique os logs de função serverless no Vercel

## Suporte

Para mais informações:
- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do Neon](https://neon.tech/docs)
