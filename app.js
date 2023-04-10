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

    let todosCursos = funcoes.getCursos()

    if (todosCursos) {
        response.json(todosCursos)
        response.status(200)
    } else {
        response.status(500)
    }

})

// 	endPoint para recupera uma lista de todos os alunos matriculados na escola.
app.get('/v1/lion-school/alunos', cors(), async function (request, response, next) {
    
    let todosAlunos = funcoes.getListaAlunos()

    if (todosAlunos) {
        response.json(todosAlunos)
        response.status(200)
    } else {
        response.status(500)
    }
})

// 	endPoint para recupera informações de um aluno específico com base no número de matrícula.
app.get('/v1/lion-school/matricula', cors(), async function (request, response, next) {
    
    let numeroMatricula = request.query.matricula

    if (numeroMatricula == '' || numeroMatricula == undefined || isNaN(numeroMatricula)) {
        statusCode = 400
        dadosConta.message = "Não é possivel processar a requisição pois o número da matricula está incorreto"
    } else {
        let aluno = funcoes.getMatricula(numeroMatricula)

        if (aluno) {
            statusCode = 200
            dadosConta = aluno
        } else {
            statusCode = 400
        }
    }
    response.status(statusCode)
    response.json(dadosConta)
})

// 	endPoint para recupera uma lista de todos os alunos matriculados no curso especificado.
app.get('/v1/lion-school/alunos/curso', cors(), async function (request, response, next) {

    let siglaCurso = request.query.sigla

    if (siglaCurso == '' || siglaCurso == undefined) {
        statusCode = 400
        dadosConta.message = "Não é possivel processar a requisição pois a sigla do curso está incorreto"
    } else {

        let curso = funcoes.getAlunosCurso(siglaCurso)

        if (curso) {
            statusCode = 200
            dadosConta = curso
        } else {
            statusCode = 400
        }
    }
    response.status(statusCode)
    response.json(dadosConta)
})

// 	endPoint para recupera uma lista de todos os alunos com o status especificado.
app.get('/v1/lion-school/alunos/status', cors(), async function (request, response, next) {
    
    let statusAluno = request.query.status
    
    if (statusAluno == "" || statusAluno == undefined) {
        
        statusAluno = 400
        dadosConta.message = "Não é possivel processar a requisição pois o status está incorreto"
    } else {
        let aluno = funcoes.getStatus(statusAluno)

        if (aluno) {
            statusCode = 200
            dadosConta = aluno
        } else {
            statusCode = 400
        }
    }
    response.status(statusCode)
    response.json(dadosConta)
})

//  Permite carregar os endpoint criados e aguadar as requisições
//pelo protocolo HTTP na porta 8080
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})