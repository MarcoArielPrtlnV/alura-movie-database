# Resumen de la Aplicación (Alura Movies Database)

Esta aplicación corresponde al último challenge de la formación React del programa **Oracle Next Education**, es un proyecto desarrollado con **React** y **Vite** para consumir la API de **The Movie Database (TMDb)** y mostrar una lista de películas populares. La aplicación incluye funcionalidades como la búsqueda de películas, visualización de trailers y un carrusel de películas próximas. Está diseñada para ser **responsiva** y adaptarse a diferentes tamaños de pantalla.

## Full Page: 

![full-page](./src/assets/images/full-page.png)

## Características Principales

### 1. **Visualización de Películas Populares**
   - Al cargar la aplicación, se muestra una lista de las películas populares utilizando la API de TMDb.
   - Cada película se presenta en un **card** con su título, imagen, puntaje y fecha de estreno.
   
### 2. **Búsqueda de Películas**
   - Los usuarios pueden buscar películas mediante un campo de texto en la barra de navegación.
   - La búsqueda se realiza utilizando la API de TMDb y muestra los resultados en la misma interfaz.

### 3. **Modal para Más Información**
   - Al hacer clic en una película, se abre un **modal** con más detalles: sinopsis, fecha de estreno, puntaje y trailer de la película.
   - Si existe un trailer disponible, este se muestra en el modal utilizando un iframe de **YouTube**.

### 4. **Carrusel de Películas Próximas**
   - La aplicación muestra un **carousel** en la parte superior de la página con las películas próximas a estrenarse.
   - El carrusel tiene una transición suave entre las imágenes y se actualiza cada 3 segundos.

### 5. **Indicador de Carga**
   - Mientras se cargan los datos de las películas, se muestra un **spinner** como indicador de que los resultados se están cargando.

### 6. **Responsividad**
   - La interfaz está optimizada para diferentes tamaños de pantalla.
   - Utiliza un **grid layout** que cambia su número de columnas dependiendo del tamaño de pantalla:
     - **4 columnas** en pantallas grandes.
     - **3 columnas** en pantallas medianas.
     - **2 columnas** en pantallas pequeñas.
     - **1 columna** en pantallas extra pequeñas.
   - El **carousel** de películas próximas también se adapta a diferentes tamaños de pantalla.

### 7. **Estilo y Animaciones**
   - Se usan transiciones suaves en los elementos interactivos, como al hacer hover sobre las películas.
   - El diseño sigue una paleta de colores oscuros, con detalles en tonos verdes para los botones y enlaces.

### 8. **Componentes Reutilizables**
   - La aplicación está dividida en componentes reutilizables como:
     - `NavBar`: Barra de navegación con un formulario de búsqueda.
     - `MovieBox`: Caja que muestra la información de cada película.
     - `Footer`: Pie de página con enlaces a redes sociales.
     - `Banner`: Carrusel de películas próximas.

## Tecnologías Utilizadas

- **React**
- **Vite** (para la configuración rápida del proyecto)
- **Bootstrap** (para los estilos y el diseño responsivo)
- **React-Bootstrap** (para componentes de UI como el modal y spinner)
- **API de TMDb** (para obtener la información de las películas)

## Responsividad y Accesibilidad

- La aplicación es completamente **responsiva**, adaptándose a diferentes tamaños de pantalla.
- Se utilizan **transiciones suaves** y efectos de hover para mejorar la experiencia de usuario en dispositivos de escritorio y móviles.
- **Accesibilidad**: Se asegura que los elementos visuales importantes (como los botones y campos de texto) tengan un buen contraste y sean fáciles de interactuar en dispositivos móviles.

## Conclusión

Esta aplicación permite a los usuarios explorar películas populares, buscar títulos específicos, ver trailers y obtener más información sobre cada película de manera sencilla y atractiva. La integración con la API de TMDb y el diseño responsivo aseguran una experiencia de usuario fluida en dispositivos de diferentes tamaños.
