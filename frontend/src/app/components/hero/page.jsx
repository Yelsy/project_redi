import Link from 'next/link'
import Image from 'next/image'

export default function Hero(){
  return(
    <section className="hero-container">
        <div className="hero-content">
            <div className="hero-target hero-target_1">
                <h2 className="hero-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut delectus obcaecati inventore dignissimos ad tempore?</h2>
                <p className="hero-text text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non est ad totam quis quaerat natus iste voluptatem exercitationem, laudantium rem repellendus reiciendis odit fuga deleniti!</p>
                <Link href="./login/sign-up" className="hero-link button-link">
                  <div className="button-link_text">Crear cuenta</div>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </div>
            <div className="hero-target hero-target_2"></div>
        </div>
    </section>
  )
}