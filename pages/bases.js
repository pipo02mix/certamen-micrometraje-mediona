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
        <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@300&family=Syncopate:wght@300;400&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
      </Head>

      <ul>
				<li><a href="/">Inici</a></li>
				<li><a href="/bases">Bases</a></li>
				<li><a href="/contacte">Contacte</a></li>
			</ul>

      <h1>FICCIONA</h1>

      <main>
      <h3>BASES</h3>
      <p>1.- Es podr&agrave; inscriure qualsevol persona sense importar edat, fins i tot sent un projecte conjunt, sempre que es resideixi al municipi de Mediona.
      </p>
      <p>2.- La temàtica del micrometratge serà totalment lliure, però hem pensat que per a aquesta edició tota proposta haurà d'aparèixer en algun moment del metratge una al·lusió al món rural.</p>
      <p>3.- Els curtmetratges presentats podran enregistrats amb qualsevol dispositiu d'enregistrament: càmera de telèfon mòbil, càmera fotogràfica digital, tablet, càmera de vídeo etc, podent després editar-se amb eines externes (<a href="#consells">veure consells</a>).</p>
      <p>4.- La durada del metratge haurà de ser més gran de 60 segons i menor de 180.</p>
      <p>5.- Tot projecte haurà d'incloure un títol i a més a més uns crèdits en què apareguin reflectits els autors i participants.</p>
      <p>6.- S'acceptaran propostes tant de caràcter narratiu com experimental.</p>
      <p>7.- Les propostes hauran de ser enregistrades en la màxima resolució i qualitat possible. </p>
      <p>8.- Els formats permesos són MOV, MPEG4, AVI, WMV, MPEGPS, FLV, 3GPP, WebM tenint en compte no excedir els 2GB.</p>
      <p>9.- La inscripció és gratuïta i es pot fer emplenant el següent <a href="https://forms.gle/UV1pqZ7uVy2kBvNv7" target="_blank" rel="noopener noreferrer">formulari</a>.</p>
      <p><b>DATES</b></p>
      <p>La data del certamen és el 8 de novembre a les 18:00h al teatre de Sant Joan de Mediona.</p>
      <p>La data l&iacute;mit per presentar la proposta ser&agrave; el proper 31 doctubre.</p>
      <p><b>PREMIS</b></p>
      <p>Es configurar&agrave; un jurat independent, format per membres vinculat professionalment a l&agrave;mbit cinematogr&agrave;fic.</p>
      <p>S'otorgarà un únic premi compost per:</p>
      <ol>
      <li>- Trofeu personalitzat realitzat pel ceramista Juan Pach&oacute;n.</li>
      <li>- Una subscripci&oacute; trimestral al Cine Club Vilafranca.</li>
      <li>- Una inscripció a un curs en línia de la plataforma Doméstika vinculat amb l'&agrave;mbit cinematogràfic.</li>
      </ol>
      <p><br /><br /></p>
      <p id="consells"><b>CONSELLS</b></p>
      <ol>
      <li aria-level="1">Per a l&apos;edici&oacute; de v&iacute;deo deixem a continuaci&oacute; una s&egrave;rie d&apos;eines que us poden ajudar:</li>
      <ol>
      <li aria-level="2">(M&ograve;bil) L&apos;aplicaci&oacute; gratu&iuml;ta <a href="https://play.google.com/store/apps/details?id=com.camerasideas.instashot&amp;hl=es_419&amp;gl=US">InShot</a>. Pots fer servir com a refer&egrave;ncia <a href="https://www.youtube.com/watch?v=iJjXVLIq6m4"> aquest tutorial.</a>.</li>
      <li aria-level="2">(Escriptori Windows) Per defecte Windows ve amb <a href="https://www.youtube.com/watch?v=Ms_KUYH019Y">Movie Maker</a> per a versions antigas i <a href="https://www.youtube.com/watch?v=TzY_W9uAsmE">Fotos</a> per a window 10 i 11. Totes dues s&oacute;n f&agrave;cils d&apos;usar.</li>
      <li aria-level="2">(Escriptori Mac) L&apos;aplicaci&oacute; inclosa per defecte a tots Mac <a href="https://www.apple.com/es/imovie/">iMovie</a>. . Podeu veure una introducci&oacute<a href="https://www.youtube.com/watch?v=X0otrV9teww"> al programa aqu&iacute;</a>.&nbsp;</li>
      <li aria-level="2">O&Ograve;bviament si tens coneixements d&apos;un programa d&apos;edici&oacute; professional et donem suport perqu&egrave; el facis servir, encara que busquem hist&ograve;ries fresques i creatives encara que a nivell de muntatge no siguin perfectes.</li>
      </ol>
      <li aria-level="1">Es d&oacute;na total llibertat durant la filmaci&oacute; per utilitzar qualsevol element, sigui un tripode o estabilitzador de c&agrave;mera com tamb&eacute; equips d&apos;enregistrament d&apos;&agrave;udio.</li>
      </ol>
      </main>

      <Footer />
    </div>
  )
}
