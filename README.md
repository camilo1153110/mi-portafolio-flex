# Mi Portafolio Flex

Portafolio personal de una sola página, maquetado enteramente con **CSS Flexbox**, como proyecto del instructivo *"Dominando CSS Flexbox"* del programa ADSO — SENA Regional Huila.

## Sobre el proyecto

Es una página de portafolio con:

- Barra de navegación con menú hamburguesa para móvil.
- Sección de presentación (hero) centrada con Flexbox.
- Sección "Sobre mí" en dos columnas que se apilan en pantallas pequeñas.
- Galería de proyectos en una cuadrícula flexible que se reacomoda sola según el ancho de la pantalla.
- Pie de página con enlaces a redes.
- Diseño dark mode con variables CSS.
- Responsive con dos breakpoints (768px y 480px).

## Tecnologías

HTML5, CSS , Flexbox  y JavaScript.

## Cómo verlo

Abre `index.html` con Live Server, o entra directo a la versión publicada en GitHub Pages: `https://camilo1153110.github.io/mi-portafolio-flex/`

## El proceso 

Este proyecto lo construí aprendiendo Flexbox sobre la marcha, así que el historial de commits tiene de todo. Dejo acá los errores que más me costaron, por si le sirven a alguien más que esté empezando:

- **`200 px` con espacio en vez de `200px`.* La clasica :C. CSS no perdona el espacio entre el número y la unidad — la propiedad entera se ignora y ni te avisa.
- **`.body` en vez de `body`.** Le puse un punto de más al selector y pasé un buen rato sin entender por qué mis estilos del `<body>` no se aplicaban a nada.
- **`gap: rem2` en vez de `gap: 2rem`.** Invertí el número y la unidad sin darme cuenta.
- **`.galeria.tarjeta` en vez de `.galeria .tarjeta`.** Sin el espacio, ese selector busca un elemento que tenga las dos clases a la vez, no un `.tarjeta` dentro de `.galeria`. Misma trampa, distinto lugar.
- **El menú hamburguesa que no abría.** Tenía dos variables (`menuBtn` y `menu`) appuntando ambas al mismo botón por un `getElementById` mal copiado, y encima el `toggle` le estaba cambiando la clase al botón en vez de al `<nav>`. Lo encontré inspeccionando el HTML en vivo con las DevTools y viendo a quién se le agregaba realmente la clase `activo`.
- **`align-content` que no hacía nada.** No tenía `flex-wrap: wrap` puesto, así que esa propiedad no tenía ninguna línea extra que alinear.
- **Confundir `justify-content` con `align-items`.** Hasta que entendí que el eje principal cambia según `flex-direction` (en `row` es horizontal, en `column` es vertical), y que esas dos propiedades simplemente le obedecen al eje, no al revés.

## Lo que aprendí

Que la mayoría de los bugs en CSS no son de lógica, son de tipeo (espacios, puntos, mayúsculas de más hay que estar uno muy avispado). Y que entender *por qué* funciona cada propiedad de Flexbox —y no solo copiarla— es lo que después te deja debuggear sin pánico cuando algo no se ve como esperabas.

## Autor

Juan Camilo Bello García — Aprendiz ADSO, SENA.