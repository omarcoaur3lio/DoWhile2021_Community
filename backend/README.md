<p align="center">
   <img src="../.github/banner_home.svg" alt="Ignite" width="100%"/>
</p>

<a href="./README_pt.md">
    <img alt="English" src="https://img.shields.io/badge/-Leia em português-000?style=flat&logo=google-translate&logoColor=FFF&labelColor=B433C1" />
</a>

This repository stores the back-end application, containing all the project's business rules. It is responsible for providing the application routes, handling messages and registering in the database. 

### 🚀 Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [Socket.IO](https://socket.io/)

### ✨ How to use

- Clone the repository and access the folder 

    ```bash 
    git clone <url>
    ```

- Rename the `.env.example` file to `.env` and fill in yours credenciais do GitHub OAuth

    ```bash 
    cd backend
    mv .env.example .env
    ```

- Install dependencies 

    ```bash 
    yarn
    ```

- Run the migrations

    ```bash 
    yarn prisma migrate dev
    ```

- Start the server

    ```bash 
    yarn dev
    ```

The application can be accessed at [`localhost:4000`](http://localhost:4000).
