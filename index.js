#!/usr/bin/env node
// requireds node

const path = require('path');
const markdownLinks = require('./src/markdownLinks').markdownLinks;

const [, , ...userFile] = process.argv; // operador de propagación para que usuario ingrese su archivo

let relativePath = userFile[0]; // es index porque tomo el valor que esta ingresando el usuario

// valido que solo se ingrese el nombre del archivo y no su ruta
if (path.isAbsolute(relativePath)) {
  console.log('esta ruta es absoluta, ingrese solamente el nombre del archivo');
} else {
  markdownLinks(); // Ejecuto función
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