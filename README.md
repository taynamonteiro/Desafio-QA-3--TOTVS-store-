# Desafio QA 3 (TOTVS store)

1- Desafio WEB Candidato deverá automatizar o site da Store https://totvs.store

 - Acessar o home da Store
 - Realizar a pesquisa por um produto qualquer
 - Acessar o produto e validar o seu nome
 - Adicionar o produto ao carrinho e validar nome e valor (devem ser iguais ao da tela do produto)
 - Importante o uso de Page Objects, Reports, Hooks, Print de evidência de sucesso e Cucumber
 - Desafio pode ser feito em Ruby ou Cypress(diferencial)

2 - Desafio API Candidado deverá acessar o Swagger http://fakerestapi.azurewebsites.net/ e automatizar o endpoint /api/v1/Books, deverá criar um book

 - Deverá criar um book (POST) Title: ”Automatizando uma API", Description: ”teste@store.com.br", PageCount : 10 Excerpt: ”Resumo do teste” PublishDate: “2020-09-10T13:00:00.549505+00:00" id: "50"

 - Deverá fazer a leitura do livro recém criado Fazer um GET e retornar o livro que acabou de ser criado
