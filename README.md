Plataforma Web Fullstack com Docker
Este projeto é uma plataforma web fullstack que utiliza Flask para o backend e React com Vite para o frontend. A aplicação é orquestrada com Docker para garantir uma implantação simples e eficiente em qualquer ambiente.
A plataforma inclui um banco de dados gerenciado em CSV, proporcionando uma maneira prática de armazenar, consultar e analisar informações. Essa estrutura permite que o sistema seja facilmente escalável e configurável, aproveitando as vantagens do Docker para gerenciar os contêineres e garantir a consistência em diferentes ambientes de desenvolvimento e produção.

.Funcionalidades:
Backend construído com Flask, com suporte para rotas e APIs REST.
Frontend dinâmico e interativo desenvolvido com React e Vite.
Docker para orquestração e implantação dos serviços.
Banco de dados em CSV para armazenamento e consulta de dados.

.Tecnologias Utilizadas:
React
Vite
JavaScript
Flask
Express.js
Docker
SQL
Este projeto é ideal para quem deseja entender a integração entre diferentes tecnologias fullstack, além de praticar a utilização de containers para ambientes de desenvolvimento e produção.

Passo a passo para visualizar em outra máquina com Docker
Se você deseja rodar esse projeto em outra máquina, siga as instruções abaixo:

1. Clone o repositório
.Primeiro, faça o clone do repositório em sua máquina:
- git clone https://github.com/seu-usuario/nome-do-repositorio.git
- cd nome-do-repositorio

3. Instale o Docker
.Certifique-se de ter o Docker instalado na máquina. Caso ainda não tenha, você pode seguir o guia de instalação oficial do Docker.
.Verifique se o Docker está corretamente instalado com o comando:
- docker --version

3. Build da Imagem Docker
.Dentro do diretório do projeto, construa a imagem Docker utilizando o seguinte comando:
- docker build -t nome-do-projeto .
.Este comando vai criar uma imagem Docker com base no arquivo Dockerfile presente no repositório.

5. Rodando o Docker
Agora que a imagem foi construída, você pode rodar o contêiner usando:
- docker run -p 3000:3000 -p 5000:5000 nome-do-projeto
Esse comando irá:
.Rodar o frontend (React) na porta 3000.
.Rodar o backend (Flask) na porta 5000.
.Você poderá acessar a aplicação nos seguintes endereços:
*Frontend: http://localhost:3000
*Backend: http://localhost:5000

6. Testando em Outro Ambiente
Se você deseja rodar o projeto em um servidor remoto ou em outra máquina, basta transferir a imagem Docker ou usar o Docker Hub para disponibilizar a imagem e rodá-la com os mesmos comandos de docker run na outra máquina.
Para transferir a imagem para o Docker Hub, você pode fazer o seguinte:
.Logue no Docker Hub:
- docker login
.Tagueie a imagem com seu nome de repositório:
- docker tag nome-do-projeto seu-usuario/nome-do-repositorio
.Envie para o Docker Hub:
- docker push seu-usuario/nome-do-repositorio
.Na outra máquina, basta fazer o pull da imagem e rodá-la:
- docker pull seu-usuario/nome-do-repositorio
- docker run -p 3000:3000 -p 5000:5000 seu-usuario/nome-do-repositorio

Agora a aplicação estará acessível na nova máquina com o mesmo ambiente Docker configurado.
