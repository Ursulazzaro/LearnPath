# SPEC — LearnPath

> **Qué es este documento:** tu versión refinada de la SPEC de clase.
> El repo empieza con la SPEC de clase **tal cual** (primer commit). Este archivo es su evolución:
> mismos requisitos, ambigüedades resueltas, decisiones incorporadas.
> **Regla:** si la SPEC de clase no lo decía y vos lo definiste, queda acá (con el porqué)
> o se referencia al documento donde quedó decidido (PRD para producto, TRD para técnica).
> **Cuándo está bien:** un lector que no estuvo en el aula del 20/10 entiende el producto
> completo leyendo solo este archivo, y puede rastrear cada decisión hasta su origen.

## 1. Identidad del producto

- **Nombre:** LearnPath.
- **Descripción:** Aplicación web para compartir cursos gratuitos y organizar recorridos personales de aprendizaje.

## 2. Problema

Actualmente existen muchos cursos gratuitos en diferentes plataformas, pero no siempre es fácil encontrarlos o tener toda su información en un mismo lugar.
Además, cuando una persona quiere realizar varios cursos, puede resultar difícil organizar cuáles le interesan y cuáles ya realizó.
LearnPath busca reunir cursos gratuitos aportados por los usuarios y permitir que cada persona organice su propio roadmap de aprendizaje.

## 3. Visión

La idea es que LearnPath se convierta en una herramienta útil para encontrar cursos gratuitos de diferentes plataformas y organizar el aprendizaje.
A medida que los usuarios compartan nuevos cursos, el catálogo comunitario podrá seguir creciendo.

## 4. Alcance

### Funcionalidades incluidas

- Registro de usuarios.
- Inicio de sesión.
- Recuperación de contraseña.
- Protección del login con rate limiting y contraseñas protegidas mediante bcrypt como mínimo.
- Creación y gestión de roadmaps personales.
- Carga de cursos gratuitos mediante un enlace web activo.
- Registro de los datos solicitados: categoría, tema, título, versión, año, docentes, cuestionarios, examen, certificado y aval de una organización.
- Declaración de si el usuario realizó el curso que comparte.
- Validación de los cursos aportados.
- Catálogo comunitario de cursos validados.
- Posibilidad de agregar cursos del catálogo al roadmap personal.

### Fuera de alcance

- Cursos pagos.
- Pagos dentro de la aplicación.
- Emisión de certificados propios.
- Aplicación móvil nativa.
- Clases dictadas directamente desde LearnPath.

## 5. Reglas principales del producto

| ID | Regla | Origen |
|---|---|---|
| BR-001 | Los cursos aportados deben validarse antes de aparecer en el catálogo comunitario. | SPEC de clase |
| BR-002 | Quien aporte un curso debe indicar si lo realizó o no. | SPEC de clase |
| BR-003 | Cada usuario administra su propio roadmap. | SPEC de clase |
| BR-004 | Los cursos serán revisados por un administrador. | Decisión propia |


## 6. Stack tecnológico

Se utilizarán las tecnologías indicadas en la consigna.

| Capa | Tecnología |
|---|---|
| Frontend | React 19 + Vite + pnpm |
| Backend | FastAPI + uv |
| Base de datos | PostgreSQL 18.6 |
| Infraestructura | Docker + Docker Compose |

## 7. Restricciones técnicas

| Restricción | Cómo se cumplirá |
|---|---|
| Mobile-first | Se comenzará con estilos para pantallas pequeñas y luego se agregarán mejoras con media queries `min-width`. |
| Paginación | Los listados y consultas que devuelvan múltiples registros tendrán paginación. |
| Menú sándwich | Se utilizará en la navegación de dispositivos móviles. |
| Screaming Architecture | Las carpetas se organizarán según las funcionalidades del proyecto. |
| Diseño inspirado en Google | Se utilizará una interfaz sencilla, con espacios claros, azul primario y componentes con estados definidos. |

## 8. Vacíos de la SPEC y decisiones tomadas

La consigna establece las funcionalidades generales, pero deja algunos aspectos sin definir.

| Aspecto | Opciones | Decisión propuesta | Referencia |
|---|---|---|---|
| ¿Quién valida los cursos? | Administrador o comunidad | Administrador | PRD |
| ¿Quién puede aportar cursos? | Visitantes o usuarios registrados | Usuarios registrados | PRD |
| ¿Quién puede consultar el catálogo? | Público o usuarios registrados | Público | PRD |
| ¿Cómo se organiza el roadmap? | Lista simple o lista con progreso | Lista personal de cursos | PRD |
| ¿Cómo se implementa la autenticación? | Sesiones o tokens | A definir en el TRD | TRD |


## 9. Historia de la SPEC

| Fecha | Cambio | Motivo |
|---|---|---|
| 20/10/2026 | Se planteó la SPEC original en clase. | Definir las funcionalidades iniciales. |
| 21/10/2026 | Se recibió la consigna formal. | Establecer los requisitos del trabajo. |
| 23/10/2026 | Se preparó la SPEC de LearnPath. | Completar los aspectos no definidos. |

La SPEC original se conserva en la raíz del repositorio. Esta versión se encuentra en `docs/SPEC.md`.
