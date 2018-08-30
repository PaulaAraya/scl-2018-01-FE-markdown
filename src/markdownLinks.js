#!/usr/bin/env node
const path = require('path');
const extractLinks = require('./extractLinks ').extractLinks;

// funcion ubica archivo y trae la info de links
function markdownLinks() {
  const [, , ...userFile] = process.argv;
  let writeFileUser = userFile[0];
  // concateno directorio actual donde se esta ejecutando desde la consola y el nombre de archivo ingresado
  let concatPath = path.join(process.cwd(), writeFileUser);
  // uso archivo actual  como parametro y retorno promesas 
  extractLinks(concatPath).then((values) => { // lee el archivo y retorna las promesas
    console.log(values);
  });
};

module.exports = {
  markdownLinks
};

