
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