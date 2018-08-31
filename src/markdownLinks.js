#!/usr/bin/env node
const path = require('path');
const extractLinks = require('./extractLinks ').extractLinks;
const colors = require('colors');

// funcion ubica archivo y trae la info de links
function markdownLinks() {
  const [, , ...userFile] = process.argv;
  let writeFileUser = userFile[0];
  // concateno directorio actual donde se esta ejecutando desde la consola y el nombre de archivo ingresado
  let concatPath = path.join(process.cwd(), writeFileUser);
  // uso archivo actual  como parametro y retorno promesas 
  extractLinks(concatPath).then((values) => { // lee el archivo y retorna las promesas
    values.forEach(link => {
      let InfoLink = `
             File ${colors.green(link.file)} 
             Link ${colors.cyan(link.href)}
             Text ${colors.white(link.text)}  
             Status ${colors.magenta(link.status)} 
      `;
      console.log(InfoLink);
    });
  });
};

module.exports = {
  markdownLinks
};
/*
function markdownLinks() {
  const [, , ...userFile] = process.argv;
  let writeFileUser = userFile[0];
  // Valida que no se ingrese más de un archivo o string
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

function markdownLinksValidate() {
  const [, , ...userFile] = process.argv;
  let writeFileUser = userFile[0];
  let writeValidate = userFile[1];
  // Valida que no se ingrese más de un archivo o string
  if (writeValidate !== '--validate') {
    console.log('no es un string valido');
  } else {
    let concatPath = path.join(process.cwd(), writeFileUser); // concateno directorio actual donde se esta ejecutando desde la consola y el nombre de archivo ingresado
    // uso archivo actual  como parametro y retorno promesas 
    extractLinksValidate(concatPath).then((values) => { // lee el archivo y retorna las promesas
      console.log(values);
    });
  }
}; 

function markdownLinksValidate() {
  const [, , ...userFile] = process.argv;
  let writeFileUser = userFile[0];
  let writeValidate = userFile[1];
  // Valida que no se ingrese más de un archivo o string
  if (writeValidate !== '--validate') {
    console.log('no es un string valido');
  } else {
    let concatPath = path.join(process.cwd(), writeFileUser); // concateno directorio actual donde se esta ejecutando desde la consola y el nombre de archivo ingresado
    function readFilePromise(concatPath).then((readFile) => { // lee el archivo y retorna las 
    });
    // uso archivo actual  como parametro y retorno promesas 
    extractLinksValidate().then((values) => { // lee el archivo y retorna las promesas
      console.log(values);
    });
  };
};
*/
