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
      <h3>BASES</h3>
      <p><b>1.- </b>
        Se podr&aacute; inscribir cualquier persona sin importar edad, incluso siendo un proyecto conjunto, siempre que se resida en l&rsquo; Alt Pened&eacute;s.
      </p>
      <p>2.- La tem&aacute;tica del micrometraje ser&aacute; totalmente libre pero hemos pensado para esta edici&oacute;n que en toda propuesta deber&aacute; aparecer en alg&uacute;n momento del metraje una alusi&oacute;n al mundo rural.</p>
      <p>3.-Los cortometrajes presentados podr&aacute;n ser registrados con cualquier dispositivo de grabaci&oacute;n: c&aacute;mara de tel&eacute;fono m&oacute;vil, c&aacute;mara fotogr&aacute;fica digital, tablet, videoc&aacute;mara etc, pudiendo luego editarse con herramientas externas (ver consejos).</p>
      <p>3.- La duraci&oacute;n del micrometraje deber&aacute; ser mayor de 60 segundos y menor de 180.</p>
      <p>4.- Todo micrometraje deber&aacute; incluir un t&iacute;tulo y adem&aacute;s unos cr&eacute;ditos en los que aparezcan reflejados los autores y participantes en el mismo.</p>
      <p>5.- Se aceptar&aacute;n propuestas tanto de car&aacute;cter narrativo como experimental.</p>
      <p>6.- A ser posible, las propuestas deber&aacute;n ser grabadas en la m&aacute;xima resoluci&oacute;n y calidad posibles. </p>
      <p>Los formatos de archivo pueden ser MOV, MPEG4, AVI, WMV, MPEGPS, FLV, 3GPP, WebM.</p>
      <p>7.- La inscripci&oacute;n es gratuita y puede realizarse rellenando el siguiente formulario.</p>
      <p><b>FECHAS</b></p>
      <p>La fecha del certamen es el 8 de noviembre a las 18:00h en el teatro de Sant Joan de Mediona.</p>
      <p>La fecha l&iacute;mite para presentar la propuesta ser&aacute; el pr&oacute;ximo 31 de octubre.&nbsp;</p>
      <p><b>PREMIOS</b></p>
      <p>Se configurar&aacute; un jurado independiente, compuesto por un miembro vinculado profesionalmente al &aacute;mbito cinematogr&aacute;fico, un representante del Ayuntamientoy un miembro del cineclub &ldquo;Vilafranca&rdquo;.</p>
      <p>Se otorgar&aacute; un &uacute;nico premio compuesto por:&nbsp;</p>
      <ol>
      <li> - Trofeo personalizado realizado por el ceramista Juan Pach&oacute;n..</li>
      </ol>
      <p>2.- Una botella de vino de la bodega Jean Le&oacute;n.</p>
      <p>3.- Una suscripci&oacute;n trimestral al Cineclub Vilafranca.</p>
      <p>4.- Una inscripci&oacute;n a un curso on-line de la plataforma Dom&eacute;stika vinculado con el &aacute;mbito cinematogr&aacute;fico. (?)&nbsp;</p>
      <p><br /><br /></p>
      <p><b>CONSEJOS</b></p>
      <ol>
      <li aria-level="1">Para la edici&oacute;n de video dejamos a continuaci&oacute;n una serie de herramientas que os pueden ser de ayuda:</li>
      <ol>
      <li aria-level="2">(M&oacute;vil) La aplicaci&oacute;n gratuita <a href="https://play.google.com/store/apps/details?id=com.camerasideas.instashot&amp;hl=es_419&amp;gl=US">InShot</a>. Puedes usar como referencia<a href="https://www.youtube.com/watch?v=iJjXVLIq6m4"> este tutorial</a>.</li>
      <li aria-level="2">(Escritorio Windows) Por defecto Windows viene con <a href="https://www.youtube.com/watch?v=Ms_KUYH019Y">Movie Maker</a> para versiones antigua y <a href="https://www.youtube.com/watch?v=TzY_W9uAsmE">Fotos</a> para window 10 y 11. Ambas son f&aacute;ciles de usar.</li>
      <li aria-level="2">(Escritorio Mac) La aplicaci&oacute;n incluida por defecto en todos Mac <a href="https://www.apple.com/es/imovie/">iMovie</a>. Puedes ver una introducci&oacute;n<a href="https://www.youtube.com/watch?v=X0otrV9teww"> al programa aqu&iacute;</a>.&nbsp;</li>
      <li aria-level="2">Obviamente si tienes conocimientos de un programa de edici&oacute;n profesional te apoyamos para que lo uses, aunque buscamos historias frescas y creativas aunque a nivel de montaje no sean perfectas.</li>
      </ol>
      <li aria-level="1">Se da total libertad durante la filmaci&oacute;n para utilizar cualquier elemento, sea un tripode o estabilizador de c&aacute;mara como tambi&eacute;n equipos de grabaci&oacute;n de audio.</li>
      </ol>
      </main>

      <Footer />
    </div>
  )
}
