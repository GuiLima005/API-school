const alunoJson = require ('./alunos.js')

const cursosJson = require ('./cursos.js')

function getCursos (){

    let cursosJ = {}
    let array = []

  cursosJson.cursos.forEach(function(cursosFill){

    let json = {
        icon:cursosFill.icone,
         nome:cursosFill.nome,
         sigla:cursosFill.sigla}

         array.push(json)   
    })

    cursosJ.curso =  array

    return cursosJ
}

module.exports = {
  getCursos
}
