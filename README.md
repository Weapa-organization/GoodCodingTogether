# GoodCodingTogether

Proyecto para hacer una pagina bien chida.

## Como arrancar el proyecto

Ejecuta `ng serve --open` en una terminal desde la carpeta padre

## Como generar un componente

Ejecuta `ng generate component component-name` desde la carpeta padre.

## Como agregarlo al menu general

Para añadirlo al menu general debes de añadir el nombre de tu seccion al componente menu y agregar la ruta ('/nombre') de tu componente en el archivo app-routing y añadirlo a la variable routes. (Fijate como esta estructurado el resto de componentes y copialos).

## Posibles errores

- ng no se encuentra: `npm install @angular/cli`
- @angular-devkit/build-angular:dev-server no se encuentra: `npm install @angular-devkit/build-angular` (:O
- (Powershell de Window) ng no tiene permisos para ejecutar scripts: Set-ExecutionPolicy Unrestricted (mejor alternativa es abrir terminal en Git Bash) 
