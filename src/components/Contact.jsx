import { useLang } from "../context/LanguageContext";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const { lang } = useLang();
  const [ref, visible] = useReveal(0.1);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div ref={ref} className={`contact-layout reveal ${visible ? "revealed" : ""}`}>
          <div className="contact-form-wrapper">
            <h2>{lang === "is" ? "Hafa samband:" : "Contact us:"}</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <fieldset className="form-field">
                <legend>{lang === "is" ? "Fullt nafn" : "Full name"}</legend>
                <input type="text" required />
              </fieldset>
              <fieldset className="form-field">
                <legend>{lang === "is" ? "S\u00EDman\u00FAmer" : "Telephone"}</legend>
                <input type="tel" />
              </fieldset>
              <fieldset className="form-field">
                <legend>{lang === "is" ? "Netfang" : "Email"}</legend>
                <input type="email" required />
              </fieldset>
              <fieldset className="form-field">
                <legend>{lang === "is" ? "Erindi" : "Enquiry"}</legend>
                <textarea rows="6" required />
              </fieldset>
              <button type="submit" className="btn-send">
                <span>{lang === "is" ? "Senda" : "Send"}</span>
                <img src="/images/send-icon.svg" alt="" className="btn-send-icon" />
              </button>
            </form>
          </div>
          <div className="contact-map">
            <iframe
              title="Foss logmenn location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.5!2d-21.8868!3d64.1413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674cc84000001%3A0xf5c1c4987b4e8f48!2sLangholtsvegur%20111%2C%20104%20Reykjav%C3%ADk!5e0!3m2!1sen!2sis!4v1700000000000!5m2!1sen!2sis"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="contact-address">
          Langholtsvegi 111, 104 Reykjavik
        </div>
      </div>
    </section>
  );
}
