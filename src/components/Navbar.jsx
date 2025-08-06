import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulación de llamada a API - reemplazar con endpoint real
    const fetchCategorias = async () => {
      try {
        // Aquí iría la llamada real a tu endpoint de categorías
        // const response = await fetch('/api/categorias')
        // const data = await response.json()
        
        // Datos de ejemplo - reemplazar con datos reales
        const data = [
          { id: 1, nombre: 'Electrónica' },
          { id: 2, nombre: 'Ropa' },
          { id: 3, nombre: 'Hogar' },
          { id: 4, nombre: 'Deportes' },
          { id: 5, nombre: 'Libros' }
        ]
        
        setCategorias(data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar categorías')
        setLoading(false)
      }
    }

    fetchCategorias()
  }, [])

  if (loading) return <div className="loading">Cargando...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        <li className="dropdown">
          <Link to="/productos">Productos</Link>
          <div className="dropdown-content">
            <Link to="/productos">Ver todos</Link>
            {categorias.map((categoria) => (
              <Link 
                key={categoria.id} 
                to={`/productos/categoria/${categoria.id}`}
              >
                {categoria.nombre}
              </Link>
            ))}
          </div>
        </li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
