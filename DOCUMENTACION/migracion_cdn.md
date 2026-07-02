# Migración de Librerías Locales a Enlaces CDN

Esta documentación explica por qué y cómo se realizaron los cambios en las rutas de inclusión para las librerías `Bootstrap` y `SweetAlert2` en los ejercicios HTML.

## ¿Cuál era el problema?

Inicialmente, los archivos HTML referenciaban los estilos y scripts desde la carpeta local de dependencias `node_modules`. 

Ejemplo de cómo estaba el código:
```html
<!-- Bootstrap (Local) -->
<link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
<script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

<!-- SweetAlert2 (Local) -->
<script src="../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
```

**Inconveniente:** Para subir un repositorio de manera óptima a GitHub o a cualquier plataforma, normalmente se ignora la carpeta `node_modules` (por su excesivo peso). Al no subir esta carpeta, las páginas en GitHub Pages no podían encontrar los estilos ni los scripts, lo que provocaba que se vieran rotas o que los componentes interactivos no funcionaran.

## Solución: Uso de CDNs

Se modificaron todos los archivos `.html` del proyecto para usar las rutas mediante un CDN (*Content Delivery Network*). Esto significa que las librerías ahora se cargan desde servidores de internet oficiales de alta velocidad, en lugar de cargarse de una carpeta local.

### Cambios Aplicados

#### 1. Bootstrap
Se actualizaron los enlaces hacia Bootstrap usando el CDN de jsDelivr:

**Nuevo código (CSS):**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
```

**Nuevo código (JS):**
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

#### 2. SweetAlert2
Se actualizó el enlace hacia el script de SweetAlert2:

**Nuevo código:**
```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

## Beneficios
1. **Compatibilidad:** Los ejercicios funcionan correctamente y con sus estilos en GitHub Pages o al ser abiertos desde cualquier otra computadora, sin necesitar instalación de módulos previos.
2. **Optimización:** Carga más rápida de las librerías aprovechando el caché global de los CDNs.
3. **Limpieza del Repositorio:** Permite mantener el repositorio en GitHub ligero al no requerir subir `node_modules`.
