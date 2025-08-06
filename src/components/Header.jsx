import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Tienda Online
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
