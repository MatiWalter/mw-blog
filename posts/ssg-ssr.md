---
title: 'Cuándo usar Generación estática vs Renderización del lado del servidor'
date: '2021-08-23'
---

Next.js recomienda usar **Generación estática** (con o sin datos) siempre que sea posible porque su página se puede contruir una vez y ser servida por un CDN, lo que lo hace mucho más rápido que tener un servidor que renderice la página en cada solicitud.

Puedes usar Generación estática para muchos tipos de páginas, incluidas:

- Páginas de Marketing
- Blogs de posteos
- Listados de productos de un E-commerce
- Documentación y páginas de ayuda

Deberías preguntarte: "¿Puedo pre-renderizar esta página **antes** de una petición de algún usuario?" Si la respuesta es si, entonces deberias elegir Generación estática.

Por otro lado, la Generación estática **no** es una buena idea si no puedes renderizar una página sin la petición de un usuario. Quizas tu página frecuentemente muestra datos actualizados, y su contenido cambia en cada petición.

En ese caso, puedes utilizar **Renderización del lado del servidor**. Sera mucho más lenta, pero la pre-renderización siempre estará actualizada. O puedes saltearte la pre-renderización y utilizar Javascript del lado del cliente para rellenar los datos.
