#!/usr/bin/env node
// requireds node
const path = require('path');
const markdownLinks = require('./src/markdownLinks').markdownLinks;

const [, , ...userFile] = process.argv; // operador de propagación para que usuario ingrese su archivo

let relativePath = userFile[0]; // es index porque tomo el valor que esta ingresando el usuario
// let validate = userFile[1];

// valido que el usuario solo se ingrese el nombre del archivo y no su ruta absoluta
if (path.isAbsolute(relativePath)) {
  console.log('Esta ruta es absoluta, ingrese solamente el nombre del archivo');
} else {
  if (path.extname(relativePath).toLowerCase() === '.md') {
    markdownLinks(); // Ejecuto función
  } else {
    console.log('Ingrese solamente archivo con formato .md');
  }
}

/*

*/

/*
 
  // ruta archivo path.join(process.cdw())
};

console.log(process.cwd());

/* 


/*
 * HACKER EDITION

mdLinks('./some/dir')
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);  
  */