#!/usr/bin/env node
const path = require('path');



// funcion ubica archivo y trae la info de links
function markdownLinks() {
  const [, , ...userFile] = process.argv; 
  let relativePath = userFile[0]; 
  // ubico el directorio actual del usuario 
  let pathUser = process.cwd(relativePath);
  // concateno directorio actual y el nombre de archivo ingresado
  let concatPath = path.join(pathUser, relativePath); 
  // uso archivo actual como parametro 
  
};

module.exports = {
  markdownLinks
};

