import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Primer Certamen Micrometrajes Mediona</title>
        <link rel="icon" href="/favicon.ico" />
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

      <Footer id="footer" class="fusion-footer-copyright-area fusion-footer-copyright-center">
        <div class="fusion-row">
	  <div class="fusion-copyright-content">
	    <div class="fusion-copyright-notice" style="padding-bottom: 0px;">
	      <div>
	      Copyright © 2022 Ajuntament de Mediona. Dr. Trueta, 10 - 08773 - St. Joan de Mediona - tel. 93 898 5002 - mediona@diba.cat <br /> 
	      <a href="https://mediona.cat/contacte">Contacte</a> | <a href="https://mediona.cat/condicions-dus-i-avis-legal">Condicions d’ús i Avís Legal</a> | 
	      <a href="https://mediona.cat/politica-de-cookies">Política de Cookies</a> | 
	      <a href="https://ipinformatica.cat" target="_blank">Disseny Web IP Informàtica</a>	
              </div>
            </div>
          </div> <!-- fusion-fusion-copyright-content -->
	</div> <!-- fusion-row -->
      </ Footer>
    </div>
  )
}
