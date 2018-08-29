#!/usr/bin/env node
// requireds
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('./lib/md-links').markdownLinkExtractor;
const argvYargs = require('./cli').argv;


// FUNCION PARA EL COMANDO LINEA
function commandLine(command) {
  command = argvYargs._[0];

  switch (command) {
  case 'receiveFile':
    receiveFile();
    console.log('Analizando si su archivo contiene links');
    break;
  default:
    console.log('Comando no es reconocido');
  }
};

// funcion que toma el archivo md y lo extrae links
function readFiles(filemd) {
  let pathFile = path.join(process.cwd(), filemd);
  // Ruta actual del archivo
  let markdownFile = fs.readFileSync(`${pathFile}`, 'uft-8');
  // Validar .md 
  if (path.extname(markdownFile).toLowerCase() === '.md') {
    markdownLinkExtractor(markdownFile).forEach(links => {
      console.log(links.href, links.text);
      fetch(`${links.href}`)
        .then((response) => {
          console.log(response.url, response.statusText, response.status);
        });
    });
  }
};

function receiveFile() {
  let argv = process.argv;
  let parametro = argv[3];
  filemd = parametro.split('=')[1];
  console.log(filemd);
  readFiles(filemd);
};

module.exports = {
  receiveFile: receiveFile,
  readFiles: readFiles,
};

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
  .catch(console.error);  */