<p align="center">
   <img src="../.github/banner_home.svg" alt="Ignite" width="100%"/>
</p>

<a href="./README.md">
    <img alt="English" src="https://img.shields.io/badge/-Read in english-000?style=flat&logo=google-translate&logoColor=FFF&labelColor=B433C1" />
</a>

Este repositório armazena a aplicação back-end, contendo toda a regra de negócio do projeto. Ele é responsável por prover as rotas da aplicação, tratamento das mensagens e cadastro no banco de dados.

### 🚀 Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [Socket.IO](https://socket.io/)

### ✨ Como executar

- Clone o repositório e acesse a pasta

    ```bash 
    git clone <url_repositorio>
    ```

- Renomeie o arquivo `.env.example` para `.env` e preencha com as suas credenciais do GitHub OAuth

    ```bash 
    cd backend
    mv .env.example .env
    ```

- Instale as dependências

    ```bash 
    yarn
    ```

- Execute as migrations

    ```bash 
    yarn prisma migrate dev
    ```

- Inicialize o servidor

    ```bash 
    yarn dev
    ```

A aplicação pode ser acessada em [`localhost:4000`](http://localhost:4000).
