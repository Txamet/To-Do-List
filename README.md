# To Do List - Sprint 1 Ejercicio 1.1

El repositorio consta de 4 archivos principales creados en typescript en la carpeta "/src" y un archivo html en el directorio raíz.


# Parte 1: Crear test para comprobar la funcionalidad de la aplicación
Archivos "todolist.ts y todolist.test.ts"

El archivo "todolist.ts" consta de las funciones básicas del crud que nos pide el ejercicio.

El archivo "todolist.test.ts" incluye los tests para comprobar el funcionamento correcto de las funciones del crud.

Se utiliza el módulo Jest:
- npm i -D jest typescript ts-jest @types/jest

Para ejecutar el test escribir en la terminal "npm test"
  

# Parte 2: Crear una CLI para comprobar la funcionalidad de la aplicación
Archivo "todolistCLI.ts"

Instalados los módulos "inquirer", "chalk" y "figlet:
- npm install --save inquirer@^8.0.0
- npm i chalk@4.1.2
- npm i figlet

Para ejecutar, desde el directorio raíz:
- node ./dist/todolistCLI.js
  
Moverse entre opciones con las flechas del teclado y pulsar Enter para ejecutar la opción elegida.

Escribir la tarea o el índice de la tarea cuando se solicite por pantalla.

Seleccionar y ejecutar "Exit program" o pulsar Ctrl + C para salir del programa.


# Parte 3: Crear un front-end para comprobar la funcionalidad de la aplicación
Archivos "todolist.html" en el directorio raíz y "todolistUI.ts" en la carpeta "/src".

Incluida carpeta "/css" para formato del front-end en el archivo "estilos.css".

Pulsar el botón en pantalla de operación deseada y seguir las instrucciones.
