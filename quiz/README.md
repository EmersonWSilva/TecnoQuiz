
# **Tecno Quiz**

Bem-vindo ao **Tecno Quiz**, uma aplicação Full Stack para quizzes, desenvolvida com **React**, **Node.js** e **PostgreSQL**. Este projeto foi projetado para testar seus conhecimentos sobre desenvolvimento Full Stack, oferecendo uma experiência interativa e responsiva.

---

## **Índice**
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Pré-requisitos](#pré-requisitos)
3. [Configuração do Ambiente](#configuração-do-ambiente)
   - [Clone o Repositório](#1-clone-o-repositório)
   - [Configuração do Banco de Dados](#2-configuração-do-banco-de-dados)
   - [Instalar Dependências](#3-instalar-dependências)
4. [Como Rodar o Projeto](#como-rodar-o-projeto)
5. [Testando a Aplicação](#testando-a-aplicação)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Dependências do Projeto](#dependências-do-projeto)
8. [Contribuição](#contribuição)
9. [Licença](#licença)

---

## **Descrição do Projeto**

O **Tecno Quiz** é uma aplicação de quiz interativa, que permite:
- Responder a perguntas de múltipla escolha.
- Navegar entre perguntas.
- Visualizar os resultados com um gráfico interativo.
- Reiniciar o quiz para testar novamente.

### **Tecnologias Utilizadas**
- **Frontend:** React
- **Backend:** Node.js com Express
- **Banco de Dados:** PostgreSQL
- **ORM:** Sequelize
- **Gráficos:** react-chartjs-2 e chart.js

---

## **Pré-requisitos**

Antes de começar, certifique-se de ter:
- **Node.js** (v18 ou superior): [Download Node.js](https://nodejs.org)
- **PostgreSQL** (v13 ou superior): [Download PostgreSQL](https://www.postgresql.org/download/)
- **Git**: [Download Git](https://git-scm.com/)

---

## **Configuração do Ambiente**

### **1. Clone o Repositório**

Abra o terminal e execute o comando:
```bash
git clone https://github.com/seu-usuario/Tecno-quiz.git
```
Depois, navegue para a pasta do projeto:
```bash
cd Tecno-quiz
```

---

### **2. Configuração do Banco de Dados**

1. **Acesse o PostgreSQL**:
   ```bash
   psql -U postgres
   ```
2. **Crie o banco de dados e o usuário**:
   ```sql
   CREATE DATABASE quiz_bd;
   CREATE USER quiz_user WITH PASSWORD 'pw124578';
   GRANT ALL PRIVILEGES ON DATABASE quiz_bd TO quiz_user;
   ```
3. **Verifique se o banco foi criado corretamente**:
   ```sql
   \l
   ```

4. **Atualize as configurações no arquivo `backend/src/config/config.json`**:
   ```json
   "development": {
       "username": "quiz_user",
       "password": "pw124578",
       "database": "quiz_bd",
       "host": "127.0.0.1",
       "dialect": "postgres"
   }
   ```

---

### **3. Instalar Dependências**

**Na pasta raiz do projeto (`quiz/`)**, execute:
```bash
npm install
```

---

## **Como Rodar o Projeto**

Depois de configurar o ambiente, execute o comando abaixo na pasta raiz (`quiz/`):
```bash
npm start
```

Esse comando irá iniciar:
- O **backend** em [http://localhost:5000](http://localhost:5000).
- O **frontend** em [http://localhost:3000](http://localhost:3000).

---

## **Testando a Aplicação**

1. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).
2. Clique em "Iniciar Quiz".
3. Responda às perguntas.
4. Visualize os resultados com o gráfico interativo.
5. Clique em "Reiniciar Quiz" para começar novamente.

---

## **Estrutura do Projeto**

```plaintext
quiz/
│
├── backend/       # Backend em Node.js
│   ├── src/
│   │   ├── config/        # Configurações do banco de dados
│   │   ├── migrations/    # Migrações do Sequelize
│   │   ├── models/        # Modelos do banco de dados
│   │   ├── seeders/       # Dados iniciais do banco
│   │   └── server.js      # Servidor backend
│   ├── package.json
│   └── ...
│
├── frontend/      # Frontend em React
│   ├── src/
│   │   ├── assets/        # Imagens e outros arquivos estáticos
│   │   ├── components/    # Componentes React
│   │   ├── styles/        # Arquivos de estilo CSS
│   │   └── index.js       # Ponto de entrada do React
│   ├── package.json
│   └── ...
│
├── package.json   # Configuração principal para rodar todo o projeto
├── README.md      # Documentação do projeto
└── ...
```

---

## **Dependências do Projeto**

### **Backend**
- **express**: Framework para criar a API RESTful.
- **sequelize**: ORM para interagir com o banco de dados.
- **pg**: Driver PostgreSQL para Node.js.
- **pg-hstore**: Manipulação de dados JSON no PostgreSQL.
- **sequelize-cli**: Ferramenta CLI para migrações e seeds (desenvolvimento).

### **Frontend**
- **react**: Biblioteca para criar interfaces de usuário.
- **react-dom**: Integração do React com o DOM.
- **axios**: Para requisições HTTP.
- **react-chartjs-2**: Biblioteca para gráficos.
- **chart.js**: Motor para renderizar gráficos.

### **Projeto Principal**
- **concurrently**: Para rodar o frontend e backend ao mesmo tempo.
```bash
npm install --save-dev concurrently
```
---
