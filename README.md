# Markdown Links

## Comenzando 🚀

_Ahorra tiempo a la hora de comprobar enlaces rotos dentro de tus archivos Markdown con Md-Links. Esta librería hecha con JavaScript trabaja con NodeJs desde la terminal analizando archivos .md y verificando el estatus de sus enlaces. Finalmente la terminal dará un reporte con una lista de todos los links indicando su estado actual (ok o error) junto al numero de línea donde está alojado y el texto que contiene el link._

## Version 📌

_Actualmente este proyecto se encuentra en la versión 1.0.0 la cual valida los enlaces. Aún seguimos trabajando para implementar más opciones de validación._


### Pre-requisitos 📋

_Debes tener instalado previamente [NodeJs](https://nodejs.org/en/) en tu computador._

### Instalación 🔧

_Lo primero que debemos hacer es instalar nuestra librería con :._

```

$ npm i pau-mdlinks

```

## Uso ⚙️

_Luego ubica en la terminal la ruta de directorio actual del archivo_

```

$ cd /Users/Documents/LABORATORIA/scl-2018-01-FE-markdown

```

_A Continuación ingrese línea de comando md-links y el nombre del archivo que desea analizar_

```

$ md-links <nombre-de-tu-archivo.md> 

```
_Debes tener en cuenta que solo debes ingresar archivos con la extensión .md_

_Finalmente la terminal retornará lo siguiente :._

_Link Valido_

```
Link https://www.drauta.com/que-es-nodejs-y-para-que-sirve
Line 3
Text ¿Qué es Node.js y para qué sirve? - drauta.com
File /Users/Documents/LABORATORIA/scl-2018-01-FE-markdown/readme.md
Status OK 200

```
_Link Roto_

```
Link https://es.wikipedia.org/wiki/Markdownjhfhvfckfpv
Line 12
Text Markdown
File /Users/Documents/LABORATORIA/scl-2018-01-FE-markdown/readme.md
Status Not Found 404

```

_En resumen en la terminal se imprimirá un listado de links con el texto que aparecía dentro del link, la ruta del archivo donde se encontró el link, la línea de código donde se encuentra y su estatus_

### Flujo de la aplicación



## Construido con 🛠️

_Líbrerias utilizadas en este proyecto_

* [Colors](http://www.dropwizard.io/1.0.2/docs/) - Usado para dar color y estilo en la consola  
* [Marked](https://www.npmjs.com/package/marked) - Usado para obtener función que extrae links 

## Planificación del proyecto 


* [GitHub](https://github.com/PaulaAraya/scl-2018-01-FE-markdown/projects/1)- Board con el backlog de organización para la implementación de la líbreria

