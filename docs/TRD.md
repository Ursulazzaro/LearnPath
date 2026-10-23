# TRD — Technical Requirements Document — LearnPath

> **Qué es:** el CÓMO técnico. Decisiones de arquitectura, stack, estructura de carpetas y
> convenciones. No es el plan de tareas (eso es el IMPLEMENTATION_PLAN) ni el producto (PRD).
> **Cuándo está bien:** un developer que no estuvo en la charla puede levantar el proyecto y
> tomar las mismas decisiones que vos; cada decisión importante tiene alternativas, la opción
> elegida y el porqué.

## 1. Stack y versiones

Para desarrollar LearnPath utilizaremos las tecnologías establecidas en la consigna.

| Capa | Tecnología | Versión | Motivo |
|---|---|---|---|
| Frontend | React + Vite + pnpm | React 19 | Requisito de la materia. |
| Backend | FastAPI + uv | Pendiente de instalación | Requisito de la materia. |
| Acceso a datos | SQLAlchemy | Por definir | Permite trabajar con PostgreSQL desde Python. |
| Base de datos | PostgreSQL | 18.6 | Requisito de la materia. |
| Infraestructura | Docker + Compose | Pendiente de instalación | Permite ejecutar los servicios del proyecto. |

## 2. Decisiones técnicas

Se definieron algunas decisiones para mantener un funcionamiento sencillo.

| ID | Decisión | Alternativas | Elección | Motivo |
|---|---|---|---|---|
| TD-001 | Autenticación | JWT o sesiones del servidor | Sesiones del servidor | Permiten mantener el control de las sesiones desde el backend. |
| TD-002 | Paginación | Offset o cursor | Offset y total | Es sencilla de implementar y permite navegar por páginas. |
| TD-003 | Errores de API | Formato propio o RFC 7807 | Formato propio | Permite mostrar mensajes de error de forma uniforme. |

### Autenticación

Los usuarios podrán registrarse, iniciar sesión y recuperar su contraseña.
Las contraseñas se almacenarán utilizando bcrypt como mínimo.
Para el inicio de sesión se propone utilizar sesiones gestionadas por el servidor, identificadas mediante una cookie segura, HttpOnly y SameSite.
También se implementará rate limiting en el endpoint de login.

### Paginación

Los listados utilizarán los parámetros page y page_size.

Por ejemplo:

GET /api/v1/cursos?page=1&page_size=20

La respuesta incluirá los cursos de la página solicitada y la cantidad total de resultados.

### Manejo de errores

Se utilizará un formato común para devolver errores desde la API.

## 3. Arquitectura

### 3.1 Patrón y capas

Se utilizará Screaming Architecture junto con una arquitectura en capas.

El backend estará organizado por funcionalidades, como usuarios, cursos, aportes y roadmap.

Cada funcionalidad tendrá las siguientes responsabilidades:

- **Router:** recibe las solicitudes HTTP.
- **Service:** contiene las reglas de negocio.
- **Repository:** realiza el acceso a la base de datos.
- **Models:** representa los datos del sistema.

    flowchart LR
        Router --> Service
        Service --> Repository
        Repository --> PostgreSQL

### 3.2 Estructura de carpetas propuesta

La siguiente estructura corresponde a la futura Instancia B

    LearnPath/
    ├── backend/
    │   ├── pyproject.toml
    │   ├── Dockerfile
    │   ├── app/
    │   │   ├── main.py
    │   │   ├── config.py
    │   │   ├── usuarios/
    │   │   ├── cursos/
    │   │   ├── aportes/
    │   │   └── roadmap/
    │   └── tests/
    ├── frontend/
    │   ├── package.json
    │   ├── Dockerfile
    │   └── src/
    │       ├── main.jsx
    │       ├── app/
    │       ├── features/
    │       │   ├── usuarios/
    │       │   ├── cursos/
    │       │   ├── aportes/
    │       │   └── roadmap/
    │       └── styles/
    ├── docker-compose.yml
    └── docs/

Dentro de cada módulo del backend se utilizarán los archivos necesarios para separar las responsabilidades.
En el frontend, los componentes se organizarán por funcionalidad y se separarán cuando tengan una responsabilidad propia.

### 3.3 Servicios Docker

Se utilizarán tres servicios principales.

| Servicio | Base | Puerto | Función |
|---|---|---|---|
| postgres | postgres:18.6 | 5432 | Base de datos |
| backend | Python + uv | 8000 | API FastAPI |
| frontend | Node.js + pnpm | 5173 | Aplicación React |

El frontend se comunicará con el backend mediante solicitudes HTTP, y el backend accederá a PostgreSQL.

## 4. Convenciones

### Git

Se utilizará Git para registrar los cambios del proyecto.

Las ramas se crearán según el tipo de tarea:

- main: rama principal.
- docs/: documentación.
- feat/: funcionalidades nuevas.
- fix/: correcciones.

Los commits seguirán Conventional Commits.

Cada tarea se desarrollará en una rama y se integrará a main luego de revisar los cambios.

### Variables de entorno

Los datos de configuración se guardarán en variables de entorno.

| Variable | Uso |
|---|---|
| DATABASE_URL | Conexión a PostgreSQL |
| SECRET_KEY | Clave utilizada para la seguridad de la aplicación |
| FRONTEND_URL | Dirección del frontend |

Los archivos con contraseñas y claves privadas no se subirán al repositorio.

### Errores y registros

El backend registrará errores importantes para facilitar su identificación.
Los mensajes enviados al frontend serán claros y no incluirán información sensible.
Las excepciones se controlarán para evitar que un error interno cierre la aplicación o muestre detalles privados.

## 5. Requisitos no funcionales técnicos

| Restricción | Cómo se cumplirá | Dónde se verificará |
|---|---|---|
| Paginación | Listados con page y page_size | API de cursos y roadmap |
| Mobile-first | Estilos base para móviles y mejoras con min-width | Interfaz React y UX-UI |
| Menú sándwich | Navegación desplegable y accesible | Encabezado de la aplicación |
| Screaming Architecture | Organización por funcionalidades | Estructura de carpetas |
| Diseño inspirado en Google | Colores, tipografía y componentes definidos | Documento UX-UI |
| Seguridad | bcrypt, sesiones y rate limiting | Backend de autenticación |

## 6. Riesgos técnicos

| Riesgo | Probabilidad | Impacto | Cómo se puede resolver |
|---|---|---|---|
| Problemas de configuración de Docker | Media | Alto | Configurar y comprobar los servicios por separado. |
| Errores de conexión con PostgreSQL | Media | Alto | Revisar las variables de entorno y la conexión. |
| Dificultades con la autenticación | Media | Alto | Implementarla por etapas y realizar pruebas. |
| Problemas de comunicación entre frontend y backend | Media | Medio | Probar los endpoints antes de integrarlos con React. |

