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

      <h1>FICCIONA</h1>
      
      <ul>
				<li><a href="/">Inici</a></li>
				<li><a href="/bases">Bases</a></li>
				<li><a href="/contacte">Contacte</a></li>
			</ul>
      
      <main>
        <h1 className="title">Certamen Amateur (µ)metrajes Mediona</h1>
        <p className="description">Es compleix el primer aniversari des que “Cineclub Mediona” va començar a caminar. Com a celebració, havíem pensat fer alguna cosa especial.</p>
        <p className="description">Així que us presentem el primer certamen de micrometratges de Mediona.</p>
        <p className="description">El seu objectiu fonamental és animar tots els habitants de Mediona a participar d'aquest mitjà creatiu sense importar edat o condició.</p>
        <p className="description">Consulta les nostres bases i apunta't!</p>
      </main>

      <Footer />
    </div>
  )
}
