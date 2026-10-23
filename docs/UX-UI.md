# UX-UI — Guía visual de estilos — LearnPath

> **Qué es:** la gramática visual de la interfaz: tokens, componentes, estados, accesibilidad. No es un prototipo navegable (eso lo cubre el APPFlow); es el conjunto de reglas con las que se construye cada pantalla **antes** de escribir CSS.
> **Inspiración fijada por la SPEC:** la apariencia y experiencia deben ser similares a **Google** (estética Material: limpieza, espacio en blanco, azul primario, sombras sutiles, radios amplios).
> **Ejemplo completado:** [`03_UX-UI_EJEMPLO.md`](./03_UX-UI_EJEMPLO.md) — mirá el nivel de detalle esperado; no lo copies, adaptá.
> **Cuándo está bien:** dos personas que sigan esta guía construyen la misma pantalla y queda igual; todos los estados de cada componente (focus, error, empty, loading) están definidos de antemano; la estrategia mobile-first con mejora progresiva es explícita.

## 1. Principios

- Diseño mobile-first: comenzar por pantallas pequeñas y mejorar la distribución en pantallas más grandes.
- Mantener una interfaz sencilla y fácil de utilizar.
- Utilizar colores y componentes consistentes.
- Mostrar mensajes claros cuando ocurra un error o no existan resultados.

## 2. Design tokens

### 2.1 Paleta de colores

| Token | Valor | Uso | Contraste AA |
|---|---|---|---|
| `--color-primary` | `#185ABC` | Botones y enlaces | 6.1:1 sobre blanco |
| `--color-on-primary` | `#FFFFFF` | Texto de botones | 6.1:1 sobre primario |
| `--color-surface` | `#FFFFFF` | Tarjetas y formularios | — |
| `--color-background` | `#F8F9FA` | Fondo de página | — |
| `--color-text` | `#202124` | Texto principal | Superior a 15:1 |
| `--color-text-muted` | `#5F6368` | Texto secundario | Superior a 4.5:1 |
| `--color-success` | `#188038` | Confirmaciones | — |
| `--color-warning` | `#F9AB00` | Avisos | — |
| `--color-error` | `#D93025` | Errores | — |

Los colores siguen una estética similar a Google.

### 2.2 Tipografía

| Token | Familia | Tamaño / line-height | Uso |
|---|---|---|---|
| `--font-family-base` | Arial, sans-serif | — | General |
| `--text-sm` | Arial | 14px / 1.5 | Información secundaria |
| `--text-base` | Arial | 16px / 1.5 | Párrafos |
| `--text-lg` | Arial | 20px / 1.4 | Títulos de sección |
| `--text-xl` | Arial | 24px / 1.3 | Títulos principales |

### 2.3 Espaciado, radios, sombras, z-index

| Token | Valor | Uso |
|---|---|---|
| `--space-1` a `--space-8` | 4, 8, 12, 16, 24, 32, 40, 48px | Espaciado |
| `--radius-sm` | 6px | Botones |
| `--radius-md` | 10px | Tarjetas |
| `--radius-lg` | 16px | Ventanas modales |
| `--shadow-sm` | 0 1px 3px rgba(0,0,0,0.1) | Tarjetas |
| `--shadow-md` | 0 4px 8px rgba(0,0,0,0.15) | Ventanas modales |
| `--z-header` | 100 | Encabezado |
| `--z-modal` | 200 | Ventanas modales |
| `--z-toast` | 300 | Notificaciones |

### 2.4 Bloque de variables

```css
:root {
  --color-primary: #185abc;
  --color-on-primary: #ffffff;
  --color-surface: #ffffff;
  --color-background: #f8f9fa;
  --color-text: #202124;
  --color-text-muted: #5f6368;
  --color-success: #188038;
  --color-warning: #f9ab00;
  --color-error: #d93025;

  --font-family-base: Arial, sans-serif;

  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 20px;
  --text-xl: 24px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.15);

  --z-header: 100;
  --z-modal: 200;
  --z-toast: 300;
}
```

## 3. Estrategia mobile-first con mejora progresiva

Los estilos base estarán pensados para dispositivos móviles.
Las media queries se utilizarán solamente para agregar mejoras
cuando aumente el tamaño de la pantalla.

| Capa | Dónde aplica | Qué define |
|---|---|---|
| Base (sin media queries) | Todas las pantallas | Una columna, menú sándwich y tarjetas apiladas. Botones de al menos 44px. |
| `@media (min-width: 768px)` | Tablets | Dos columnas y mayor espacio entre elementos. |
| `@media (min-width: 1024px)` | Computadoras | Tres columnas y navegación horizontal. |

## 4. Componentes (anatomía + estados)

### 4.1 Botón (primario / secundario / peligro)

- Primario: fondo azul y texto blanco.
- Secundario: fondo blanco y texto azul.
- Peligro: se utilizará para acciones como eliminar un curso del roadmap.
- Bordes redondeados y espaciado uniforme.
- Estados: `default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`.

### 4.2 Campo de formulario (input / select)

- Los campos tendrán bordes y etiquetas visibles.
- Se utilizarán en registro, login y aporte de cursos.
- Los mensajes de error aparecerán debajo del campo correspondiente.
- Estados: `default`, `focus`, `filled`, `error`, `disabled`.
- Los errores se asociarán al campo mediante `aria-describedby`.

### 4.3 Card de curso

Cada tarjeta mostrará:

- Título del curso.
- Categoría.
- Docente o disertante.
- Información sobre certificado, examen y aval.

Estados:
- `default`: visualización normal.
- `hover`: se destaca la tarjeta.
- `seleccionada`: curso agregado al roadmap.

### 4.4 Lista/tabla paginada

- En dispositivos móviles se utilizarán tarjetas apiladas.
- En pantallas grandes podrán mostrarse tablas.
- Los listados tendrán controles para cambiar de página.
- Si no hay resultados, se mostrará un mensaje indicando que no se encontraron cursos.

### 4.5 Menú sándwich

- En dispositivos móviles se utilizará un botón para abrir el menú.
- El menú mostrará las secciones principales de LearnPath.
- Estados: abierto y cerrado.
- Se podrá cerrar mediante el botón, seleccionando una opción, con ESC o haciendo clic fuera.
- Se utilizarán `aria-expanded` y `aria-controls`.
- El foco se gestionará al abrir y cerrar el menú.

### 4.6 Modal

- Se utilizará para confirmaciones cuando sea necesario.
- Tendrá fondo blanco y bordes redondeados.
- Estados: abierto y cerrado.
- Se podrá cerrar con ESC.
- El foco permanecerá dentro del modal mientras esté abierto.

### 4.7 Toast (notificación)

Se utilizará para mostrar mensajes breves.

- Éxito: cuando se complete una acción.
- Error: cuando ocurra un problema.
- Información: para avisos generales.

Las notificaciones aparecerán en la parte inferior de la pantalla,
durante aproximadamente 5 segundos, con `role="status"`.

### 4.8 Skeleton y Empty state

- Skeleton: se mostrará mientras se cargan los cursos.
- Empty state: se mostrará cuando no existan resultados, con un mensaje claro y una acción cuando corresponda.

## 5. Layout y navegación

- **Header:** contendrá el nombre de LearnPath y la navegación principal.
  En móviles tendrá menú sándwich y en computadoras navegación horizontal.
- **Contenedores:** tendrán un ancho máximo de 1140px y márgenes laterales.
- **Pantallas:** inicio, login, registro, catálogo de cursos, detalle del curso,
  aporte de cursos, roadmap personal y validación de aportes.

El detalle de las pantallas y la navegación se documentará en APPFlow.

## 6. Accesibilidad mínima

- [ ] Contraste AA de al menos 4.5:1 en textos y 3:1 en controles.
- [ ] Estados `:focus-visible` en elementos interactivos.
- [ ] Menú sándwich con `aria-expanded` y `aria-controls`.
- [ ] Respetar `prefers-reduced-motion`.
- [ ] Imágenes con texto alternativo e iconos con atributos ARIA cuando corresponda.
- [ ] Mensajes de error asociados a los campos mediante `aria-describedby`.

Estas condiciones se comprobarán durante el desarrollo.

## 7. Iconografía y assets

- **Set elegido:** Material Symbols.
- **Motivo:** mantiene una apariencia similar a Google.
- **Tamaño:** 20px para botones y 24px para navegación.
- **Color:** se utilizarán los colores definidos en la paleta.

---

## Referencias
- NN/g — Front-End Style-Guides (definición y checklist): https://www.nngroup.com/articles/front-end-style-guides/
- NN/g — Design Systems 101: https://www.nngroup.com/articles/design-systems-101/

