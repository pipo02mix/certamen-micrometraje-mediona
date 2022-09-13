import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Primer Certamen Micrometrajes Mediona</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
      </Head>

      <main>
        <img src="https://mediona.cat/wp-content/uploads/2018/12/logo-mediona-header.png" alt="Mediona-logo" />
        <Header title="Bienvenido al primer certament de Micrometrajes de Mediona 2022" />
        <p className="description">
             Se cumple el primer aniversario desde que “Cineclub Mediona” hecho andar. A modo de celebración, habiamos pensado hacer algo especial.
             Así que os presentamos el primer certamen de micrometrajes de Mediona. 
             Su objetivo fundamental es animar a participar de este medio creativo a todos los habitantes de Mediona 
             Se cumple el primer aniversario desde que “Cineclub Mediona” hecho andar. A modo de celebración, habiamos pensado hacer algo especial.os presentamos el primer certamen de micrometrajes 
             o vecinos del Penedés. Más noticias pronto...
        </p>
      </main>

      <Footer />
    </div>
  )
}
