# API

API Rest em Node.js e TypeScript.

## Pré Requisitos

[Git](https://git-scm.com/downloads)

[Docker](https://docs.docker.com/get-docker/)

## Desenvolvimento

Clone o repositório na sua máquina
```
git clone https://github.com/UCDB/api-eng-comp-2020 api
```

Entre na pasta do projeto
```
cd api
```

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