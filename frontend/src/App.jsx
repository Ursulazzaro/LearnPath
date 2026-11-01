
import { useEffect, useState } from 'react'

function App() {
  const [cursos, setCursos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function obtenerCursos() {
      try {
        const respuesta = await fetch('/api/v1/cursos')

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los cursos')
        }

        const datos = await respuesta.json()
        setCursos(datos.items)
      } catch (error) {
        setError(error.message)
      } finally {
        setCargando(false)
      }
    }

    obtenerCursos()
  }, [])

  return (
    <main>
      <h1>LearnPath</h1>
      <h2>Catálogo de cursos</h2>

      {cargando && <p>Cargando cursos...</p>}

      {error && <p role="alert">Error: {error}</p>}

      {!cargando && !error && cursos.length === 0 && (
        <p>Todavía no hay cursos disponibles.</p>
      )}

      {!cargando && !error && cursos.length > 0 && (
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>{curso.titulo}</li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
