import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>Copyright © 2022 Ajuntament de Mediona. Dr. Trueta, 10 - 08773 - St. Joan de Mediona - tel. 93 898 5002 - mediona@diba.cat </p>
          <br /> 
          <a href="https://mediona.cat/contacte">Contacte</a> | <a href="https://mediona.cat/condicions-dus-i-avis-legal">Condicions d’ús i Avís Legal</a> | 
          <a href="https://mediona.cat/politica-de-cookies">Política de Cookies</a> | 
          <a href="https://ipinformatica.cat" target="_blank">Disseny Web IP Informàtica</a>	
        </div>
      </footer>
    </>
  )
}
