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
