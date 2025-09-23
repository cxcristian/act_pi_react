import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Logo / Nombre */}
        <div className={styles.brand}>
          <h1 className={styles.logo}>MiSitio</h1>
          <p className={styles.copy}>© 2025 Todos los derechos reservados</p>
        </div>

        {/* Redes Sociales */}
        <div className={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
            aria-label="Facebook"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
            aria-label="Twitter"
          >
            <Twitter size={28} />
          </a>
          
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
