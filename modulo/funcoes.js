const alunoJson = require('./alunos.js')

const cursosJson = require('./cursos.js')

function getCursos() {

  let cursosJ = {}
  let array = []

  cursosJson.cursos.forEach(function (cursosFill) {

    let json = {
      icon: cursosFill.icone,
      nome: cursosFill.nome.slice(17, 50),
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

function getMatricula(matricula) {

  let json = {}
  let array = []

  alunoJson.alunos.forEach(function (dadosFillter) {

    dadosFillter.curso.forEach(function (curso) {

      if (matricula == dadosFillter.matricula) {
        json = {
          nome: dadosFillter.nome,
          foto: dadosFillter.foto,
          diciplina: curso.disciplinas
        }
      }
      array.push(json)
    })
  })
  return json
}

function getListaAlunos() {

  let dadosJ = {}
  let array = []

  alunoJson.alunos.forEach(function (alunos) {

    let json = {
      foto: alunos.foto,
      nome: alunos.nome,
      matricula: alunos.matricula,
    }

    array.push(json)
  })
  dadosJ.alunos = array
  return dadosJ

}
// console.log(getListaAlunos())
// console.log(getMatricula("20151001016"))
// console.log(getCursos())
// console.log(getAlunos("DS"));

module.exports = {
  getCursos,
  getAlunos,
  getMatricula,
  getListaAlunos,
  // getStatus
}
