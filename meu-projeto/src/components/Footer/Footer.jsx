import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import style from "./style.module.css";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerSection}>
                    <h3>Sobre Nós</h3>
                    <p>Oferecemos acomodações incríveis para tornar sua viagem inesquecível.</p>
                </div>

                <div className={style.footerSection}>
                    <h3>Links Úteis</h3>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Contato</a>
                </div>

                <div className={style.footerSection}>
                    <h3>Redes Sociais</h3>
                    <div className={style.footerSocial}>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            <div className={style.footerBottom}>
                © 2025 Todos os direitos reservados.
            </div>
        </footer>
    );
}
