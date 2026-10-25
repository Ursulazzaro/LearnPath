# LearnPath

> WebApp de gestión de comunidad de cursos: catálogo comunitario de cursos gratuitos + roadmaps personales de aprendizaje.

> **Estado:** 📚 Documentación (Instancia A) — desarrollo pendiente de aprobación docente.

**Stack:** React 19 + Vite + pnpm · FastAPI + uv · PostgreSQL 18.6 · Docker Compose (dev)

---

## Qué hace

LearnPath es una aplicación web donde los usuarios pueden compartir cursos gratuitos de diferentes plataformas.
Los cursos aportados deben validarse antes de aparecer en el catálogo comunitario. Desde allí, los usuarios podrán agregarlos a su roadmap personal para organizar su aprendizaje.

## Documentación

| Documento | Descripción | Enlace |
|---|---|---|
| SPEC | Especificación del producto | [SPEC](docs/SPEC.md) |
| PRD | Requisitos del producto | [PRD](docs/PRD.md) |
| TRD | Requisitos técnicos | [TRD](docs/TRD.md) |
| UX-UI | Guía visual de estilos | [UX-UI](docs/UX-UI.md) |
| APPFlow | Pantallas y navegación | [APPFlow](docs/APPFlow.md) |
| BackendSchema | Base de datos y API | [BackendSchema](docs/BackendSchema.md) |
| Implementation Plan | Plan de desarrollo | [Implementation Plan](docs/IMPLEMENTATION_PLAN.md) |

## Cómo revisar este repositorio

- Los `.md` se renderizan solos en GitHub.
- Los diagramas Mermaid (`erDiagram`, `flowchart`, `stateDiagram`) también: si los ves como
  texto crudo, falta el bloque ` ```mermaid `.
- Preview local: VS Code con `Ctrl+Shift+V` (extensión "Markdown All in One" recomendada).


## Estado del trabajo

| Instancia | Contenido | Estado |
|-----------|-----------|--------|
| A — Documentación | repo + 7 documentos | En revisión docente |
| B — Desarrollo del MVP | ejecución del Implementation Plan | ⏳ pendiente de aprobación |
| C — Clase 27/10 | testing, Docker multi-stage, gestión del cambio | ⏳ |

## Versionado

- **Flujo de Git:** Se utiliza Git con ramas para organizar los cambios.

- `main`: rama principal.
- `docs/instancia-a`: documentación inicial.
- `feat/`: funcionalidades.
- `fix/`: correcciones.

**Convención de commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `docker:`, `chore:`)

---

## Referencias de aprendizaje

### Markdown (para escribir los 6 documentos bien)

| Recurso | Para qué |
|---------|----------|
| [Markdown Guide — sintaxis básica](https://www.markdownguide.org/basic-syntax/) | encabezados, listas, énfasis, imágenes |
| [Markdown Guide — cheat sheet](https://www.markdownguide.org/cheat-sheet/) | tablas, task lists, bloques de código |
| [CommonMark — referencia](https://commonmark.org/help/) | la especificación cuando hay dudas |
| [GitHub — Writing on GitHub](https://docs.github.com/en/get-started/writing-on-github) | GFM, tablas, checklists |
| [GitHub — Mermaid en Markdown](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) | diagramas que renderizan en tu repo |

### Por tipo de documento

| Documento | Recurso |
|-----------|---------|
| PRD | [Atlassian — Plantilla PRD](https://www.atlassian.com/software/confluence/templates/product-requirements) · [Lenny Rachitsky — plantilla](https://www.atlassian.com/software/confluence/templates/requirements) |
| TRD | [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/) — el clásico: contexto, goals/non-goals, trade-offs |
| UX-UI | [NN/g — Front-End Style-Guides](https://www.nngroup.com/articles/front-end-style-guides/) · [NN/g — Design Systems 101](https://www.nngroup.com/articles/design-systems-101/) · [Material Design 3 (la inspiración)](https://m3.material.io/) · [Material Symbols (iconos)](https://fonts.google.com/icons) |
| APPFlow | [NN/g — IA vs. Sitemaps](https://www.nngroup.com/articles/information-architecture-sitemaps/) · [NN/g — User Journeys vs. User Flows](https://www.nngroup.com/articles/user-journeys-vs-user-flows/) |
| BackendSchema | [Mermaid — ER Diagrams](https://mermaid.js.org/syntax/entityRelationshipDiagram.html) · [PostgreSQL — Conceptual Model](https://www.postgresql.org/docs/current/datamodel.html) |
| Implementation Plan | [Atlassian — Plantilla de plan de proyecto](https://www.atlassian.com/software/confluence/templates/project-plan) · [Shape Up](https://basecamp.com/shapeup/) — scopes y ciclos |

---

## Licencia / uso

Trabajo Práctico — Desarrollo de Software, UTN FR La Plata, 2026.
