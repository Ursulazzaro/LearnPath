# PRD — Product Requirements Document - LearnPath

> **Qué es:** el QUÉ y el POR QUÉ. Para quién construimos, qué problema resuelve, qué hace
> y — con el mismo peso — qué **no** hace. No habla de tecnología ni de carpetas (eso es el TRD).
> **Cuándo está bien:** alguien del equipo puede construir la feature correcta sin preguntarte
> nada de producto; el "no" (out of scope) está tan claro como el "sí"; cada historia tiene
> criterios de aceptación verificables.

## 1. Resumen ejecutivo

LearnPath es una aplicación web donde los usuarios pueden encontrar y compartir cursos gratuitos de distintas plataformas.
Los cursos aportados deben ser validados antes de aparecer en el catálogo comunitario.
Además, cada usuario podrá crear su propio roadmap para organizar los cursos que quiere realizar.

## 2. Objetivos y métricas de éxito

| Objetivo | Cómo sabemos que se cumplió |
|---|---|
| Permitir compartir cursos gratuitos. | Un usuario registrado puede completar y enviar un aporte. |
| Crear un catálogo comunitario. | Los cursos aprobados aparecen en el catálogo. |
| Organizar el aprendizaje. | Un usuario puede agregar y quitar cursos de su roadmap. |
| Facilitar la búsqueda de cursos. | Los usuarios pueden consultar el catálogo y sus categorías. |

## 3. Personas

### Persona 1 — Estudiante

- **Contexto:** Estudia y busca cursos gratuitos para complementar sus conocimientos.
- **Motivaciones:** Aprender temas nuevos y organizar los cursos que quiere realizar.
- **Frustraciones:** Los cursos están distribuidos en diferentes plataformas y puede perder los enlaces que encuentra.
- **Historias tipo:**
  - Quiero encontrar cursos gratuitos sobre temas que me interesan.
  - Quiero guardar los cursos para realizarlos más adelante.

### Persona 2 — Usuario que comparte cursos

- **Contexto:** Realiza cursos online y conoce recursos que pueden servirles a otras personas.
- **Motivaciones:** Compartir información y contribuir al catálogo.
- **Frustraciones:** No cuenta con un lugar donde reunir y compartir cursos de distintas plataformas.
- **Historias tipo:**
  - Quiero compartir un curso que encontré.
  - Quiero que otras personas puedan acceder a cursos gratuitos.

## 4. Historias de usuario

**P0:** Funcionalidad necesaria para la primera versión.  
**P1:** Funcionalidad importante que puede implementarse después de las principales.

### US-001 — Registro de usuario (P0)

Como visitante, quiero registrarme en LearnPath para poder utilizar las funciones personales de la aplicación.

**Criterios de aceptación:**
- [ ] El usuario puede completar el formulario de registro.
- [ ] El sistema valida los datos ingresados.
- [ ] Si el registro es correcto, se crea la cuenta.

### US-002 — Inicio de sesión (P0)

Como usuario registrado, quiero iniciar sesión para acceder a mi cuenta.

**Criterios de aceptación:**
- [ ] El usuario puede ingresar su correo y contraseña.
- [ ] Si los datos son correctos, puede iniciar sesión.
- [ ] Si los datos son incorrectos, aparece un mensaje de error.
- [ ] El login cuenta con protección mediante rate limiting.

### US-003 — Consultar catálogo (P0)

Como visitante, quiero consultar los cursos disponibles para encontrar cursos gratuitos que me interesen.

**Criterios de aceptación:**
- [ ] El catálogo muestra solamente cursos validados.
- [ ] Se puede consultar la información de cada curso.
- [ ] El listado tiene paginación.
- [ ] Si no hay cursos disponibles, se muestra un mensaje.

### US-004 — Aportar un curso (P0)

Como usuario registrado, quiero compartir un curso gratuito para que otras personas puedan conocerlo.

**Criterios de aceptación:**
- [ ] El usuario puede completar los datos obligatorios del curso.
- [ ] Debe indicar si realizó el curso o no.
- [ ] El sistema valida la información ingresada.
- [ ] El aporte queda pendiente de validación.

### US-005 — Gestionar mi roadmap (P1)

Como usuario registrado, quiero agregar y quitar cursos de mi roadmap para organizar mi aprendizaje.

**Criterios de aceptación:**
- [ ] El usuario puede agregar un curso validado a su roadmap.
- [ ] Puede consultar los cursos agregados.
- [ ] Puede eliminar un curso de su roadmap.
- [ ] Solamente puede modificar su propio roadmap.

### US-006 — Validar cursos (P1)

Como administrador, quiero revisar los cursos aportados para decidir si pueden publicarse.

**Criterios de aceptación:**
- [ ] El administrador puede consultar los aportes pendientes.
- [ ] Puede aprobar o rechazar un curso.
- [ ] Los cursos aprobados aparecen en el catálogo.
- [ ] Los cursos rechazados no aparecen en el catálogo.

## 5. Requisitos funcionales

| ID | Requisito | Historia relacionada |
|---|---|---|
| RF-001 | El sistema permite registrar usuarios. | US-001 |
| RF-002 | El sistema permite iniciar sesión. | US-002 |
| RF-003 | El sistema permite recuperar la contraseña. | Cuenta de usuario |
| RF-004 | El sistema muestra los cursos validados en el catálogo. | US-003 |
| RF-005 | El sistema permite aportar cursos gratuitos. | US-004 |
| RF-006 | El sistema permite gestionar un roadmap personal. | US-005 |
| RF-007 | El sistema permite aprobar o rechazar cursos. | US-006 |

## 6. Requisitos no funcionales

| ID | Requisito |
|---|---|
| RNF-001 | Los listados deben tener paginación. |
| RNF-002 | La interfaz debe seguir un diseño mobile-first con mejora progresiva. |
| RNF-003 | La navegación móvil debe incluir un menú sándwich. |
| RNF-004 | Las contraseñas deben almacenarse utilizando bcrypt como mínimo. |
| RNF-005 | El inicio de sesión debe contar con rate limiting. |
| RNF-006 | La aplicación debe tener una apariencia inspirada en Google. |
| RNF-007 | La estructura de carpetas debe seguir Screaming Architecture. |

## 7. Reglas de negocio

| ID | Regla | Origen |
|---|---|---|
| BR-001 | Los cursos aportados deben validarse antes de aparecer en el catálogo. | SPEC de clase |
| BR-002 | Quien comparte un curso debe indicar si lo realizó o no. | SPEC de clase |
| BR-003 | Cada usuario administra su propio roadmap. | SPEC de clase |
| BR-004 | Los administradores revisan los cursos antes de publicarlos. | Decisión propia |

## 8. Fuera de alcance

Para esta primera versión no se incluirán:

- Cursos pagos.
- Pagos dentro de la aplicación.
- Emisión de certificados propios.
- Aplicación móvil nativa.
- Clases dictadas directamente desde LearnPath.

## 9. Supuestos y decisiones sobre la SPEC

Se tomaron algunas decisiones sobre los puntos que la consigna original dejó sin definir:

- Los usuarios registrados podrán aportar cursos.
- Los administradores serán responsables de validar los aportes.
- El catálogo podrá consultarse sin iniciar sesión.
- Cada usuario tendrá un roadmap personal.

Estas decisiones se encuentran registradas en la sección 8 de `docs/SPEC.md`.

## 10. Preguntas abiertas

| Pregunta | Impacto | Estado |
|---|---|---|
| ¿Qué mecanismo de autenticación se utilizará? | Alto | A definir en el TRD |
| ¿Cómo se realizará la validación de los enlaces de los cursos? | Medio | Pendiente |
| ¿Qué categorías estarán disponibles inicialmente? | Medio | Pendiente |
