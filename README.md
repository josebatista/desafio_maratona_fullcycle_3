# desafio_maratona_fullcycle_3
Desafios realizados durante a terceira edição da maratona Dev FullCycle.

## desafio 01
**Hello Full Cycle utilizando Golang e Docker**

### Informações do desafio
* O primeiro desafio dessa maratona consiste em criar um "Hello Full Cycle" utilizando a linguagem Golang.
* Basicamente quando o arquivo compilado for executado, deverá ser exibido: Hello Full Cycle.
* Se tudo estiver funcionando de forma adequada, gere uma imagem docker que quando executada deva rodar o programa criado em Golang.

* Faça o push da imagem no Docker Hub e informe a url da imagem na área de entrega do desafio abaixo.

## desafio 02
**Hello Full Cycle utilizando Buffalo**

### Informações do desafio
* Esse desafio consiste em criar uma página web com o conteúdo "Hello Full Cycle" utilizando a linguagem Golang e o framework Buffalo.
* Quando o usuário acessar o projeto no endpoint /hello, ele deverá ver a mensagem "Hello Full Cycle".
* Para fazer a entrega do desafio, gere uma imagem docker de sua aplicação funcionando e a disponibilize em sua conta no Docker Hub.

* Quando alguém executar: docker run -p 3000:3000 seuuser/suaimagem, a aplicação deverá estar disponível na porta 3000.

## desafio 03
**Endpoint serverless que realiza uma operação de soma**

### Informações do desafio
* Esse desafio vai te introduzir ao mundo serverless!
* E por conta disso você terá que gerar um endpoint no seguinte formato: **/soma?a={numero}&b={numero}**.

* Quando alguém acessar através do método get um json deve ser retornado no formato: **{"resultado":valor}**

* Para realizar o desafio, fique na liberdade para escolher entre as linguagens: javascript, golang ou python. Também utilize o framework Serverless para realizar essa tarefa e utilize o cloud provider que achar mais conveniente.

## desafio 04
**Listagem das aulas com Django e SQLite**

### Informações do desafio
* Esse será o desafio que fará você ter contato com um dos frameworks de alta produtividade mais poderosos do mercado. O Django.
* Nesse desafio você terá que criar, utilizando o Django, uma simples aplicação que listará o nome de todas as aulas da nossa Maratona Full Cycle 3.0, sendo que os dados devem vir diretamente de um banco de dados SQLite.

* Quando alguém acessar a aplicação através do endpoint **/maratona**, pela **porta 8000**, a listagem deverá aparecer.

* Para entregar o desafio, gere uma imagem docker, faça o push para sua conta do DockerHub e informe a URL da imagem logo abaixo.
Antes de submeter o desafio, teste se tudo está funcionando executando o comando:
**docker run -p 8000:8000 seu-usuario/sua-imagem-docker**
