# Tarea 2 - Análisis y Diseño de Sistemas 1

## Información
- **Nombre:** Luis Carlos Corleto Marroquín
- **Carné:** 202106651
- **Curso:** Análisis y Diseño de Sistemas 1

## Descripción
Esta es una aplicación web simple desarrollada con HTML, CSS y JavaScript, utilizando Bootstrap como framework para el frontend. La aplicación muestra información personal al presionar un botón.

## Despliegue con Docker

### Requisitos previos
- Docker instalado en el sistema

### Pasos para ejecutar la aplicación localmente con Docker

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/USAC-LuisCorleto/AYD1_202106651.git
   cd AYD1_202106651/Tarea2
   ```

2. **Construir la imagen de Docker**
   ```bash
   docker build -t tarea2-app .
   ```

3. **Ejecutar el contenedor**
   ```bash
   docker run -d -p 80:80 --name tarea2-container tarea2-app
   ```

4. **Acceder a la aplicación**
   
   Abra su navegador y visite: [http://localhost](http://localhost)

### Detener el contenedor
```bash
docker stop tarea2-container
```

### Eliminar el contenedor
```bash
docker rm tarea2-container
```

## Estructura del proyecto
- `/src`: Contiene los archivos fuente de la aplicación web
  - `index.html`: Archivo principal HTML
  - `styles.css`: Estilos de la aplicación
  - `script.js`: Lógica de JavaScript
- `Dockerfile`: Configuración para el despliegue con Docker
- `README.md`: Este archivo de documentación