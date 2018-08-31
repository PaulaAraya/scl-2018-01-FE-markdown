#!/usr/bin/env node
const path = require('path');
const extractLinks = require('./extractLinks ').extractLinks;

// funcion ubica archivo y trae la info de links
function markdownLinks() {
  const [, , ...userFile] = process.argv;
  let writeFileUser = userFile[0];
  if (writeFileUser < userFile[1]) {
    console.log('Debe ingresar solo un archivo .md');
  } else {
    let concatPath = path.join(process.cwd(), writeFileUser); // concateno directorio actual donde se esta ejecutando desde la consola y el nombre de archivo ingresado
    // uso archivo actual  como parametro y retorno promesas 
    extractLinks(concatPath).then((values) => { // lee el archivo y retorna las promesas
      console.log(values);
    });
  }
};

module.exports = {
  markdownLinks
};
