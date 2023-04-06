const alunoJson = require('./alunos.js')

const cursosJson = require('./cursos.js')

function getCursos() {

  let cursosJ = {}
  let array = []

  cursosJson.cursos.forEach(function (cursosFill) {

    let json = {
      icon: cursosFill.icone,
      nome: cursosFill.nome.slice(6,50),
      sigla: cursosFill.sigla
    }
    // "001 - Técnico em Desenvolvimento de Sistemas".slice(6,50)

    array.push(json)
  })

  cursosJ.curso = array

  return cursosJ
}

function getAlunos(sigla) {

  let json = {}
  let array = []
  let status = false

  alunoJson.alunos.forEach(function (aluno) {

    if (sigla == aluno.curso[0].sigla) {
      array.push(aluno)
      status = true
    }
  })

  json = { alunos: array }

  if (status) {
    return json
  } else {
    return status
  }

}

// console.log(getAlunos('DS'));


module.exports = {
  getCursos,
  getAlunos
}
