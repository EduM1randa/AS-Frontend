import { Link } from 'react-router-dom';
import '../styles/layout.css'

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/singup">Registrarse</Link></li>
        </ul>
      </nav>
    </header>

    <main>{children}</main>
    </>
  )
}