import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Certamen (µ)metrajes Mediona 2022</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Outfit:wght@300;400&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
      </Head>

      <ul>
				<li><a href="/">Inicio</a></li>
				<li><a href="/bases">Bases</a></li>
				<li><a href="/">Contacto</a></li>
			</ul>

      <main>
        <p className="description">Contacto</p>
      </main>

      <Footer />
    </div>
  )
}
