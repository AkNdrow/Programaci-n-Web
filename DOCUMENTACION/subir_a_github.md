# Guía para Subir el Repositorio a GitHub y Activar GitHub Pages

Esta guía detalla los pasos seguidos para preparar y subir el repositorio a GitHub, permitiendo que las páginas web puedan visualizarse en línea.

## 1. Preparación Local

Antes de subir los archivos, se realizaron los siguientes preparativos locales:

- **Creación de `index.html`:** Se añadió un archivo `index.html` en la raíz del proyecto para que sirva de menú principal, con enlaces hacia todos los ejercicios de la carpeta `HTML/`.
- **Creación de `.gitignore`:** Se agregó el archivo `.gitignore` indicando que se ignore la carpeta `node_modules/`, evitando así subir archivos pesados e innecesarios.
- **Inicialización del Repositorio Git:**
  ```bash
  git init
  git add .
  git commit -m "Commit inicial con los ejercicios y configuraciones"
  ```

## 2. Creación del Repositorio en GitHub

1. Iniciar sesión en la cuenta de GitHub.
2. Hacer clic en **"New"** (Nuevo Repositorio).
3. Asignar un nombre (ej. `Ejercicios-PrograWeb`).
4. Seleccionar la visibilidad **Public** (Público).
5. Hacer clic en **Create repository**.
*(Nota: No agregar archivo README ni .gitignore desde GitHub, ya que se configuraron de manera local).*

## 3. Vinculación y Subida de Archivos (Push)

Desde la consola ubicada en la ruta del proyecto, se deben ejecutar los siguientes comandos generados por GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```
*Sustituir `TU_USUARIO` y `TU_REPOSITORIO` por los datos correspondientes.*

## 4. Activación de GitHub Pages

Para que los ejercicios se visualicen sin tener que descargar el código:

1. Ir al repositorio subido en GitHub.
2. Hacer clic en la pestaña **Settings** (Configuración).
3. En la barra lateral izquierda, seleccionar **Pages**.
4. En **Build and deployment**, sección **Source**, seleccionar **Deploy from a branch**.
5. En la opción de **Branch**, cambiar de "None" a **main** (o la rama principal) y presionar **Save**.
6. En un par de minutos, GitHub generará una URL pública donde la página estará desplegada.
