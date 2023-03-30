/****************************************************************************
 * Objetivo: Criar uma API para manipulação de dados da Lion School
 * Data: 30/03/2023
 * Autor: Guilherme Lima e Miguel
 * Versão: 1.0
 ****************************************************************************/

// Responsavel pelas requisições
const express = require('express')

// Responsavel pelas permissões das requisições
const cors = require('cors')

// Responsavel pela manipulação do body da requisição
const bodyParser = require('body-parser')

// Import do arquivo de funções para manipular os contatos
const funcoes = require('./modulo/funcoes.js')

// Cria um objeto com as informações da classe express 
const app = express()

// Define as permissões no header da API
app.use((request, response, next) => {
    // Permite gerenciar a origem das requisições da API
    // * - Significa que a API será publica 
    // IP - Se colocar o IP, a API somente responderá para aquela máquina 
    response.header('Access-Control-Allow-Origin', '*')

    // Permite gerenciar quais verbos (metodos) poderão fazer requisições 
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Ativa no cors das requisições as permissões estabelecidas
    app.use(cors())

    next()
})

// endPoints
let statusCode
let dadosConta = {}

// endPoint para recupera uma lista de todos os cursos oferecidos pela escola. 
app.get('/v1/lion-school/cursos', cors(), async function(request, response, next) {

})

// 	endPoint para recupera uma lista de todos os alunos matriculados na escola.
app.get('/v1/lion-school/alunos', cors(), async function (request, response, next) {
    
})

// 	endPoint para recupera informações de um aluno específico com base no número de matrícula.
app.get('/v1/lion-school/aluno', cors(), async function (request, response, next) {

})

// 	endPoint para recupera uma lista de todos os alunos matriculados no curso especificado.
app.get('/v1/lion-school/alunos/curso', cors(), async function (request, response, next) {

})

// 	endPoint para recupera uma lista de todos os alunos com o status especificado.
app.get('/v1/lion-school/alunos/status', cors(), async function (request, response, next) {
    
})

//  Permite carregar os endpoint criados e aguadar as requisições
//pelo protocolo HTTP na porta 8080
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})