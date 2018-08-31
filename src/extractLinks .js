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
      // console.log('esto dice data jojojo ' + data);
      let links = markdownLinkExtractor(data);
      let infoLinks = [];
      // Iteras sobre el arreglo de links
      links.forEach(function(url) {
        // fetch me da el status ok
        infoLinks.push(fetch(url.href)
          .then(function(response) { // En la resuestas agreguo propiedad de estaus
            url.file = filePath,
            url.status = `${response.statusText} ${response.status}`;
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
