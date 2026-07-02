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
