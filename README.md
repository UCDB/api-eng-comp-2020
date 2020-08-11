# API

API Rest em Node.js e TypeScript.

## Desenvolvimento

Suba o banco de dados MongoDB com o docker-compose:

```
docker-compose up -d
```

Instale as dependencias:

```
npm install
```

Execute a aplicação com:

```
npm run dev
```

A API é acessada pela porta `8080`, mas pode ser alterada através da variável de ambiente `PORT` no arquivo `.env`.