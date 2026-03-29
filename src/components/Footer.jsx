import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-contact-col">
            <div className="footer-contact-row">
              <span className="footer-label">{lang === "is" ? "Simi:" : "Phone:"}</span>
              <span className="footer-value">+354 537 5111</span>
            </div>
            <div className="footer-contact-row">
              <span className="footer-label">{lang === "is" ? "Netfang:" : "Email:"}</span>
              <span className="footer-value">fosslogmenn@fosslogmenn.is</span>
            </div>
            <div className="footer-contact-row">
              <span className="footer-label">{lang === "is" ? "Vefur:" : "Web:"}</span>
              <span className="footer-value">fosslogmenn.is</span>
            </div>
            <Link to="/privacy" className="footer-policy-link">
              {t.footer.privacy}
            </Link>
          </div>

          <div className="footer-info-col">
            <h4>{lang === "is" ? "Upplysingar:" : "Information:"}</h4>
            <p className="footer-brand-name">Foss logmenn | fjarmal</p>
            <p>Langholtsvegi 111, 2. haed, 104 Reykjavik |</p>
          </div>

          <div className="footer-logo-col">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.png" alt="Foss" className="footer-logo-img" />
            </Link>
          </div>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Foss logmenn | fjarmal. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
