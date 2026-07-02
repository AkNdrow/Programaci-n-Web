# Guía Rápida: Comandos del Día a Día para Git

Cada vez que crees un **nuevo ejercicio** o modifiques un archivo existente (como el `index.html`), debes seguir una secuencia de 3 pasos (comandos) estrictos para que esos cambios lleguen a GitHub.

## El Problema con `git commit -a`
Cuando creas un archivo **totalmente nuevo** (como `ejercicio10.html`), Git lo considera un archivo "Sin seguimiento" (Untracked). El comando `git commit -a` solo guarda cambios de archivos que Git ya conocía. Por eso tu comando falló.

Para solucionar esto de raíz y nunca tener problemas, siempre debes usar el comando `git add .` primero.

## Los 3 Comandos Mágicos (El Orden Correcto)

Para subir cualquier cambio o archivo nuevo al repositorio, abre tu terminal y ejecuta siempre estos tres comandos en este exacto orden:

### 1. Preparar todos los cambios (Nuevos y Modificados)
```bash
git add .
```
*(El punto al final es importantísimo, significa "agrega todos los archivos de esta carpeta, tanto los nuevos como los modificados").*

### 2. Guardar los cambios (El Commit)
```bash
git commit -m "Aquí va el mensaje descriptivo de lo que hiciste"
```
*(Ejemplo: `git commit -m "Creación del ejercicio 10 y actualización del index"`). Este paso crea una "foto" o punto de guardado en tu computadora local.*

### 3. Subir los cambios a GitHub (El Push)
```bash
git push
```
*(Este último comando toma todos esos guardados locales y los envía al servidor de GitHub. Si olvidas este paso, nadie más que tú podrá ver los cambios).*

---

## Resumen en una sola línea
Si quieres hacer todo rápidamente, puedes pegar esto en tu terminal (cambiando el mensaje entre comillas):
```bash
git add . ; git commit -m "Creación del ejercicio 10" ; git push
```
