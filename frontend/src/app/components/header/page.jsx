import Link from 'next/link'

export default function Header(){
  return(
    <header>
        <div className="header">
          <div className="header-top">
            <div className="logo">
              <h1>Proyecto REDI</h1>
            </div>

            <div className="header-links">
              <Link href="./login/sign-up" className="header-link header-link_1">
                <div className="header-link_text">Crear cuenta</div>
              </Link>
              <Link href="./login/sign-in" className="button-link header-link header-link_2">
                <div className="header-link_text">Iniciar sesión</div>
                <span class="material-symbols-outlined">person</span>
              </Link>
            </div>
          </div>

          <nav className="header-bottom">
            <ul className="menu">
              <li>
                <Link href="#" className="link link-1">Inicio</Link>
              </li>
              <li>
                <Link href="#" className="link link-2">Nosotros</Link>
              </li>
              <li>
                <Link href="#" className="link link-3">Blog</Link>
              </li>
              <li>
                <Link href="#" className="link link-4">Eventos</Link>
              </li>
              <li>
                <Link href="#" className="link link-5">Noticias</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}