# GoodCodingTogether

Proyecto para hacer una pagina bien chida.

## Como arrancar el proyecto

Ejecuta `ng serve --open` en una terminal desde la carpeta padre

## Como generar un componente

Ejecuta `ng generate component component-name` desde la carpeta padre.

## Como agregarlo al menu general

Para añadirlo al menu general debes de añadir el nombre de tu seccion al componente menu y agregar la ruta ('/nombre') de tu componente en el archivo app-routing y añadirlo a la variable routes. (Fijate como esta estructurado el resto de componentes y copialos).

## Como añadirlo al menu de botones

Abre el componente menu y busca el .html. Copia la estructura que esta entre las etiquetas `<nav> </nav>` y pegala despues de la ultima etiqueta `</nav>`.
Ejemplo de la estructura:
```
<nav class="nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="/cool-button">
      Cool Button
    </a>
  </div>
</nav>
```

Ya solo faltaria que pusieras el nombre de tu botón y la referencia en el href de la etiqueta `<a ... >` (recuerda ponerle la misma que has puesto en el archio app-routing)
## Posibles errores

- ng no se encuentra: `npm install @angular/cli`
- @angular-devkit/build-angular:dev-server no se encuentra: `npm install @angular-devkit/build-angular` (:O
- (Powershell de Window) ng no tiene permisos para ejecutar scripts: Set-ExecutionPolicy Unrestricted (mejor alternativa es abrir terminal en Git Bash) 
