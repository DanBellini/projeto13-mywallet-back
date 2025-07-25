# MyWallet - Back-End

Este repositório faz parte do projeto **MyWallet**, uma aplicação full-stack para gerenciamento de finanças pessoais. O projeto é composto por dois repositórios que funcionam de maneira integrada:

- [MyWallet Back-End](https://github.com/DanBellini/projeto13-mywallet-back) (este repositório)
- [MyWallet Front-End](https://github.com/DanBellini/projeto13-mywallet-front)

## Sobre o Projeto

O **MyWallet** é uma solução completa para controle financeiro, permitindo ao usuário registrar entradas e saídas, visualizar saldo em tempo real e acompanhar o histórico de transações. O sistema foi projetado para oferecer uma experiência intuitiva, segura e responsiva.

## Estrutura do Projeto

- **Back-End:**  
  Desenvolvido em Node.js com MongoDB, este repositório é responsável pelo processamento das informações, autenticação de usuários, manipulação de transações financeiras e armazenamento seguro dos dados.  
  O back-end expõe uma API REST que é consumida pelo [front-end](https://github.com/DanBellini/projeto13-mywallet-front), garantindo segurança e persistência das informações.

- **Front-End:**  
  O front-end, desenvolvido em React, provê a interface gráfica para o usuário interagir com o sistema, realizando cadastro, login, lançando transações e visualizando o saldo.

## Principais Funcionalidades da API

- Cadastro e autenticação de usuários
- Registro de entradas e saídas financeiras
- Consulta ao saldo e ao histórico de transações
- Validação e segurança das informações

## Instalação e Uso

Para executar o back-end localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DanBellini/projeto13-mywallet-back.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd projeto13-mywallet-back
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente:**  
   Crie um arquivo `.env` baseado no `.env.example`, preenchendo com os dados de conexão do MongoDB e outras configurações necessárias.

5. **Inicie o servidor:**
   ```bash
   npm start
   ```

6. **API rodando em:**  
   ```
   http://localhost:5000
   ```

> **Observação:** Para o funcionamento completo do MyWallet, é necessário utilizar o [front-end](https://github.com/DanBellini/projeto13-mywallet-front) junto com este back-end.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- JWT (autenticação)
- dotenv

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.

## Autor

- [DanBellini](https://github.com/DanBellini)

---

> **Obs.:** Este projeto faz
