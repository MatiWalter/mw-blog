---
  title: 'Chakra UI Breakpoints'
  date: '2021-08-22'
---

Chakra UI nos trae por defecto una serie de breakpoints ya listos para su uso

Los cuales son:

```ts
  import { createBreakpoints } from "@chakra-ui/theme-tools";

  export default createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
```

|     | em |  px  |
|-----|----|------|
|  sm | 30 |  480 |
|  md | 48 |  768 |
|  lg | 62 |  992 |
|  xl | 80 | 1280 |
| 2xl | 96 | 1536 |

Chakra UI nos da la posibilidad de poder crear nuestros propios breakpoints, pudiendo llamarlos como quisieramos, aunque en la documentación nos recomiendan mantener los estandares utilizados en todos los frameworks CSS.

Podemos crear nuestros propios breakpoints de la siguiente manera:

```ts
  import { extendTheme } from "@chakra-ui/react";
  import @chakra-ui/theme-tools ;

  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768",
    lg: "960px",
    xl: "1200px",
  });

  const theme = extendTheme({ breakpoints });
```
