
const markdownLinkExtractor = require('./../lib/md-links').markdownLinkExtractor;

test('markdownLinkExtractor debe exisitr una función', () => {
  expect(markdownLinkExtractor).toBeDefined();
});

describe('markdownLinkExtractor debe extraer links', function() {
  test('deberia retornar array vacio si no existe link', function() {
    const links = markdownLinkExtractor('soy un string  y no un link');
    expect(links).toEqual([]);
  });
});
/*
describe('leer un archivo', ()=> {
  test('')

  expect.assertion(n) n es el numero de expect que tiene que esperar de una promesa
  y de debe retornar return para avisar ajest que  se testea algo asincrono

  callbacl usa done como paramtero
  
});*/
