# Automação de API — Swagger Petstore

Projeto de portfólio para demonstrar automação de testes de API com **Playwright + TypeScript**. A suíte cobre fluxos positivos e negativos dos domínios de pets, usuários e pedidos da [Swagger Petstore](https://petstore.swagger.io/).

## Tecnologias

- Node.js 20+
- TypeScript
- Playwright Test e APIRequestContext
- Faker para massa de dados dinâmica
- AJV para validação de JSON Schema
- dotenv para configuração por ambiente
- GitHub Actions para CI
- Relatório HTML e traces do Playwright

## Estrutura

```text
├── .github/workflows/       # Pipeline de CI
├── src/
│   ├── clients/             # Clientes HTTP por domínio
│   ├── data/                # Fábricas de dados com Faker
│   ├── fixtures/            # Fixtures customizadas do Playwright
│   ├── helpers/             # Validação de status e contratos
│   ├── schemas/             # JSON Schemas
│   └── types/               # Contratos TypeScript
├── tests/
│   ├── pets/
│   ├── store/
│   └── users/
├── .env.example
├── playwright.config.ts
└── package.json
```

## Instalação

Pré-requisitos: [Node.js](https://nodejs.org/) 20 ou superior e npm.

## Execução

```bash
npm test                 # suíte completa
npm run test:pets       # somente pets
npm run test:users      # somente usuários
npm run test:store      # somente pedidos/store
npm run typecheck       # validação estática do TypeScript
npm run test:report     # abre o último relatório HTML
```

## Cenários cobertos

### Pets

- Criação, consulta, atualização e exclusão de pet
- Busca por status
- Consulta de ID inexistente (negativo)
- Validação do contrato da resposta

### Usuários

- Criação e consulta de usuário
- Login
- Atualização e exclusão
- Consulta e exclusão de usuário inexistente (negativos)
- Validação do contrato da resposta

### Store / Orders

- Consulta do inventário
- Criação, consulta e exclusão de pedido
- Consulta de pedido inexistente (negativo)
- Validação do contrato da resposta

## Boas práticas aplicadas

- Separação entre testes, clientes, dados, tipos e schemas
- Fixtures para injeção dos clientes de API
- Massa dinâmica para evitar dependência de dados fixos
- Testes independentes e execução paralela
- Mensagem do corpo da resposta em falhas de status
- Configuração externa sem segredos versionados
- Retentativas apenas para reduzir instabilidade da API pública
- CI com validação de tipos, testes e relatório como artefato
