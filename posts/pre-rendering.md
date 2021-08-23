---
title: 'Métodos de pre-renderización'
date: '2021-08-23'
---

Next.js tiene dos formas de pre-renderizar: **Generación estática** y **Renderización del lado del servidor**. La diferencia entre estos es **cuándo** se genera el HTML para una página.

- **Generación estática** es el método de pre-renderización que genera el HTML en **Tiempo de compilado**. Luego el HTML pre-renderizado es _reutilizado_ en cada petición.
- **Renderización del lado del servidor** es el método de pre-renderización que genera el HTML en **cada petición**.

Importante, Next.js te permite **elegir** cual método de pre-renderización es usado para cada página. Puedes crear una aplicación "híbrida" usando Generación estática para gran parte de las páginas y Renderización del lado del servidor para otras.
