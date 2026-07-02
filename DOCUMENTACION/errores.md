# Registro de Errores y Soluciones

## Introducción

Este documento está destinado a funcionar como una bitácora o historial de los problemas técnicos encontrados a lo largo del desarrollo y publicación de este proyecto. Aquí se documentará la detección de cada error, su diagnóstico (el porqué ocurrió) y la solución final aplicada. El objetivo es mantener un registro claro que sirva de aprendizaje y referencia futura.

---

## Error 1: Estilos que no cargan en GitHub Pages y Formulario "en blanco"

**Fecha:** 2 de julio de 2026

### Detección
Al abrir el enlace público de GitHub Pages para visualizar los ejercicios, se notaron dos comportamientos inesperados:
1. Ninguno de los ejercicios mostraba los estilos de Bootstrap (se veían como HTML sin formato).
2. Específicamente, el `ejercicio9.html` (formulario) parecía estar vacío o completamente desconfigurado.

### Diagnóstico
Al investigar el estado del repositorio y el código, se encontraron dos causas distintas:
1. **Falta de sincronización (Push):** Los cambios recientes donde se migraron las rutas locales a CDNs de internet se habían guardado localmente (commit), pero **no se habían subido a GitHub**. Al no realizar el `git push`, GitHub Pages seguía leyendo la versión antigua de los archivos.
2. **Ausencia de Clases de Bootstrap:** El archivo `ejercicio9.html` tenía las etiquetas HTML correctas (`<form>`, `<input>`), pero carecía de las clases necesarias de Bootstrap (como `form-control`). Bootstrap incluye un "reinicio" (*Reboot*) de estilos por defecto que elimina márgenes y paddings. Al no tener clases asignadas, el formulario puro se comprimió, pareciendo invisible o roto.

### Solución
1. **Para los estilos generales:** Se ejecutó el comando `git push` en la terminal para sincronizar el repositorio local con el repositorio remoto. Esto envió los enlaces CDN correctos a GitHub.
2. **Para el ejercicio 9:** Se modificó la estructura del archivo `ejercicio9.html`. Se envolvió el formulario en un contenedor (`<div class="container mt-5">`) y se agregaron las clases correspondientes a cada elemento (`class="form-control"` para los inputs, `class="form-label"` para los textos y `class="btn btn-primary"` para el botón). Tras aplicar las clases, se guardó (commit) y se subió el cambio (push).

---

## Error 2: Enlace del Ejercicio 10 no visible en línea tras realizar Commit y Push

**Fecha:** 2 de julio de 2026

### Detección
A pesar de haber agregado el enlace `<li><a href="HTML/ejercicio10.html">Ejercicio 10</a></li>` al archivo `index.html` y haber ejecutado exitosamente la secuencia de subida (`git add .`, `git commit`, `git push`), la página publicada en GitHub Pages no mostraba el botón del Ejercicio 10 al ser visitada en el navegador.

### Diagnóstico
Tras comprobar que el código de `index.html` en efecto poseía el enlace del Ejercicio 10 y constatar que el historial de Git indicaba que la subida (Push) se había realizado exitosamente al repositorio remoto, se diagnosticó que el problema **no era de código ni de Git**, sino un comportamiento típico de la web:
1. **Caché del Navegador:** Los navegadores web guardan en la memoria (caché) copias de los sitios que visitamos para cargarlos más rápido. Al refrescar la página de manera normal, el navegador mostraba la versión anterior guardada en memoria.
2. **Tiempo de despliegue de GitHub Pages (Delay):** A veces, cuando se hace un *Push*, los servidores de GitHub pueden tardar entre 1 y 3 minutos en procesar y desplegar los nuevos cambios al enlace público.

### Solución
El error no requirió modificaciones adicionales de código para arreglarse, ya que técnicamente el enlace sí estaba correctamente subido. La solución en estos casos es procedimental para el usuario:
1. **Borrar Caché / Forzar recarga:** Presionar la combinación `Ctrl + F5` (o `Cmd + Shift + R` en Mac) estando en la página para obligar al navegador a descargar los archivos más recientes desde el servidor e ignorar la memoria caché.
2. **Esperar un par de minutos:** Darle tiempo al servidor de GitHub Pages a que termine su proceso de compilación (build) antes de visualizar.

---

## Error 3: No se aplican los estilos correctamente al formulario del Ejercicio 10

**Fecha:** 2 de julio de 2026

### Detección
Al intentar arreglar el diseño básico del `ejercicio10.html`, se le aplicó la clase `class="form-control"` directamente a la etiqueta `<form>` en un intento de que Bootstrap estilizara todo el formulario. Sin embargo, el resultado no fue el esperado y los elementos internos seguían viéndose rotos o sin un diseño adecuado.

### Diagnóstico
El problema radica en un mal uso de las clases de Bootstrap. La clase `form-control` está diseñada exclusivamente para aplicarse a los campos de texto individuales (las etiquetas `<input>`, `<textarea>`, etc.), dándoles bordes redondeados, resaltado al hacer clic y un ancho del 100%.
Al aplicarle `form-control` a la etiqueta padre contenedora (`<form>` o `<fieldset>`), Bootstrap intenta que todo el bloque se comporte gráficamente como un solo campo de texto gigante. Las etiquetas internas (`<input>`, `<label>`) seguían siendo HTML puro sin clases asignadas, por lo que Bootstrap no sabía cómo estilizarlas individualmente.

### Solución
1. Se reestructuró el archivo `ejercicio10.html`. En lugar de poner clases incorrectas al contenedor principal, se envolvió el formulario en un bloque de presentación (`<div class="container">` y `<form class="p-4 border">`).
2. Se le asignó a los títulos la clase `form-label` (`<label class="form-label">`).
3. Se aplicó correctamente la clase `form-control` a los campos de entrada (`<input class="form-control">`).
4. Se aplicó `btn btn-primary` a los botones.
5. Tras estas correcciones de código, se ejecutaron `git add .`, `git commit` y `git push` para actualizar la versión en línea con el diseño correcto.

---

## Error 4: La función JavaScript no muestra el resultado en pantalla (Falso error de código)

**Fecha:** 2 de julio de 2026

### Detección
Tras crear el archivo JavaScript (`ejercicio10.js`) con la función `celsiusToFahrenheit()` y vincularlo en el HTML, al probarlo e introducir un número, el campo de resultado (ya sea `<input>` o `<textarea>`) no mostraba absolutamente nada al presionar el botón de calcular.

### Diagnóstico
Al revisar minuciosamente la lógica del archivo `ejercicio10.js` y el uso de los métodos DOM (como `document.getElementById('fahrenheit').value`), se concluyó que **el código estaba 100% perfecto y libre de errores sintácticos o lógicos.**
El problema en realidad fue el mismo que el *Error 2*: probar la página web en GitHub Pages demasiado rápido tras hacer el "Push". Como GitHub Pages tarda un par de minutos en construir la nueva versión del sitio, el archivo `ejercicio10.html` intentó buscar y ejecutar el archivo `../JS/ejercicio10.js` que en ese momento **todavía no existía en el servidor público**. Al no existir el archivo, el botón no hacía nada.

### Solución
1. **Revertir cambios innecesarios:** Como el usuario pensó que el error era del código HTML, cambió el `<input>` de resultado por un `<textarea>`. Aunque ambos funcionan bien con JavaScript, se restauró a `<input>` ya que es semánticamente más correcto para mostrar un solo número.
2. **Procedimiento de despliegue:** Simplemente se esperó el minuto reglamentario de construcción de GitHub Pages y se recargó la página borrando caché (`Ctrl + F5`). Tras esto, el script cargó exitosamente y los cálculos se realizaron de manera instantánea.
