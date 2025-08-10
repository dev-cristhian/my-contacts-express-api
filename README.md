# 🚀 My Contacts Express API

Bem-vindo ao **My Contacts Express API**! 🎉 Este projeto é uma API RESTful robusta para gerenciamento de contatos, construída com Node.js e Express, e utilizando PostgreSQL como banco de dados. Ele demonstra as melhores práticas de desenvolvimento backend, incluindo persistência de dados, validação, tratamento de erros e conteinerização com Docker.

## ✨ Funcionalidades

Esta API oferece um conjunto completo de operações CRUD (Create, Read, Update, Delete) para gerenciar seus contatos:

- **GET /contacts**: Retorna uma lista de todos os contatos.
- **GET /contacts/:id**: Retorna os detalhes de um contato específico pelo ID.
- **POST /contacts**: Cria um novo contato.
- **PUT /contacts/:id**: Atualiza os dados de um contato existente pelo ID.
- **DELETE /contacts/:id**: Exclui um contato pelo ID.

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza uma stack de tecnologias modernas e eficientes:

- **Node.js**: Plataforma de runtime JavaScript para construir aplicações de rede escaláveis.
- **Express.js**: Framework web rápido e minimalista para Node.js, utilizado para construir a API RESTful.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional robusto e de código aberto, utilizado para persistência de dados. 🐘
- **Docker & Docker Compose**: Ferramentas para conteinerização, garantindo um ambiente de desenvolvimento consistente e facilitando a implantação. 🐳
- **ESLint & Prettier**: Ferramentas para padronização de código e garantia de qualidade, promovendo um código limpo e consistente.
- **Jest**: Framework de testes JavaScript para garantir a robustez e a confiabilidade da aplicação. 🧪
- **Dotenv**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a API em sua máquina local. É altamente recomendado o uso do Docker para gerenciar o banco de dados.

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em seu sistema:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Configuração do Ambiente

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/dev-cristhian/my-contacts-express-api.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd my-contacts-express-api
    ```

3.  **Crie um arquivo `.env`:**

    Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente, especialmente as de conexão com o banco de dados. Exemplo:

    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=root
    DB_PASSWORD=**********
    DB_DATABASE=contacts
    ```

### Iniciando o Banco de Dados com Docker Compose

Para iniciar o serviço do PostgreSQL em um contêiner Docker, execute:

```bash
docker-compose up -d db
```

Isso criará e iniciará um contêiner PostgreSQL, mapeando a porta `5432` do contêiner para a porta `5432` da sua máquina local.

### Instalação das Dependências

Instale as dependências do projeto Node.js:

```bash
npm install
```

### Execução da Aplicação

Para iniciar o servidor da API, execute:

```bash
npm start
```

A API estará disponível em `http://localhost:3000`. 🌐

## 💡 Técnicas e Padrões de Design

Este projeto incorpora diversas técnicas e padrões de design para garantir um código limpo, escalável e de fácil manutenção:

- **Arquitetura em Camadas**: Separação clara entre as camadas de roteamento, controladores, serviços e repositórios, promovendo a modularidade e a separação de responsabilidades.
- **Tratamento de Erros Global**: Implementação de um middleware de tratamento de erros centralizado para capturar e responder a exceções de forma padronizada, melhorando a experiência do desenvolvedor e do usuário.
- **Validação de Dados**: Utilização de validação de entrada para garantir a integridade dos dados recebidos pela API.
- **Persistência com PostgreSQL**: Integração com um banco de dados relacional para armazenamento persistente dos dados de contato.
- **Conteinerização com Docker**: Uso de Docker para isolar o ambiente de desenvolvimento e produção, facilitando a implantação e a replicação.
- **ESLint e Prettier**: Configuração de ferramentas de linting e formatação para manter a consistência do código e evitar erros comuns.

## 🚀 Próximas Funcionalidades (Roadmap)

Para tornar esta API ainda mais robusta e completa, as seguintes funcionalidades são consideradas para futuras implementações:

- **Autenticação e Autorização**: Implementar um sistema de autenticação (ex: JWT) e autorização para proteger os endpoints da API. 🔒
- **Testes Automatizados Abrangentes**: Expandir a cobertura de testes unitários e de integração para todas as funcionalidades da API. 🧪
- **Documentação da API**: Gerar documentação interativa da API (ex: Swagger/OpenAPI) para facilitar o consumo por outros desenvolvedores. 📖
- **Cache**: Implementar estratégias de cache para melhorar o desempenho da API em requisições frequentes. ⚡
- **Rate Limiting**: Adicionar controle de taxa de requisições para prevenir abusos e ataques de negação de serviço.
- **CI/CD**: Configurar um pipeline de Integração Contínua e Entrega Contínua para automatizar o processo de build, teste e deploy. 🚀

## 👨‍💻 Sobre o Criador

Feito com ❤️ por [Cristhian Santos](https://github.com/dev-cristhian).

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-cristhian)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cristhian-dev/)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 📝

---

