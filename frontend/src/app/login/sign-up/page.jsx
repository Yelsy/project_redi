import Link from 'next/link'

export default function SignUp(){
  return(
    <div className="body-SignUp">
      <section className="sign-up_container">
        <div className='form-title'>
          <h1>Proyecto REDI</h1>
          <h2>Crear cuenta</h2>
        </div>

        <form className="sign-up_form">
          <input className="input" type="text" placeholder="Nombres completos"/>
          <input className="input" type="email" placeholder="Correo electrónico"/>
          <input className="input" type="password" placeholder="Crear contraseña"/>
          <input className="input" type="password" placeholder="Repetir contraseña"/>
        </form>

        <ul className="form-requeriments_list">
          <li>
            <Link href="/" className='requeriments'>Mínimo 8 caracteres</Link>
          </li>
          <li>
            <Link href="/" className='requeriments'>Contiene mayúsculas y minúsculas</Link>
          </li>
          <li>
            <Link href="/" className='requeriments'>Contiene caracteres especiales</Link>
          </li>
          <li>
            <Link href="/" className='requeriments'>Las contraseñas coinciden</Link>
          </li>
        </ul>

        <button type="submit" className="submit">Crear cuenta</button>

        <div className='form-links'>
          <li>
            <Link href="./sign-in" className='form-link'>¿Ya tienes una cuenta?</Link>
          </li>
        </div>
      </section>
    </div>
  )
}