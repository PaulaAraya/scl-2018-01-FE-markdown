#!/usr/bin/env node
const fs = require('fs');
const fetch = require('node-fetch');
const markdownLinkExtractor = require('../lib/md-links').markdownLinkExtractor;
// Toma como parametro el archivo md
function extractLinks(filePath) {
  // FilePath es la ruta
  return new Promise((resolve, reject) => {
    // Aquí se lee el archivo
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        return reject(error);
      }
      let links = markdownLinkExtractor(data);
      let infoLinks = [];
      // Iteras sobre el arreglo de links
      links.forEach(function(url) {
        // fetch me da el status ok
        infoLinks.push(fetch(url.href)
          .then(function(response) { // En la resuestas agreguo propiedad de estaus
            url.file = filePath,
            url.status = `${response.statusText} ${response.status}`; // estatus = 200
            delete url.title;
            return url; // Retorna nueva url con su estatus
          })
          .catch(function(err) {
            console.log(err);
            url.status = 'fail'; // Si no hay nada
            return url;
          })
        );
      });
      // Arreglo vacio de promise gurada valores
      Promise.all(infoLinks).then(() => { // Retorno todas las promesas de la función
        resolve(links);
      }).catch((err) => {
        console.error(err);
      });
    });
  });
};

module.exports = {
  extractLinks 
};

/*
const fs = require('fs');
const fetch = require('node-fetch');
const markdownLinkExtractor = require('../lib/md-links').markdownLinkExtractor;
// Función que lee el archivo
const readFilePromise = function(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, fileData) => {
      console.log('Error');
      if (error) {
        return reject(error);
      }
      return resolve(fileData);
    });
  });
};

extractLinks(readFilePromise);


function extractLinks(data) {
  let links = markdownLinkExtractor(data);
  let infoLinks = [];
  // Iteras sobre el arreglo de links
  links.forEach(function(url) {
    // fetch me da el status ok
    infoLinks.push(fetch(url.href)
      .then(function(response) { // En la resuestas agreguo propiedad de estaus
        url.file = filePath,
        url.status = `${response.statusText} ${response.status}`; // estatus = 200
        delete url.title;
        return url; // Retorna nueva url con su estatus
      })
      .catch(function(err) {
        console.log(err);
        url.status = 'fail'; // Si no hay nada
        return url;
      })
    );
  });
  // Arreglo vacio de promise gurada valores
  Promise.all(infoLinks).then(() => { // Retorno todas las promesas de la función
    resolve(links);
  }).catch((err) => {
    console.error(err);
  });
};
*/
