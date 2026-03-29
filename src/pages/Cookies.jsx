import { useLang } from "../context/LanguageContext";

export default function Cookies() {
  const { lang } = useLang();

  if (lang === "en") {
    return (
      <section className="page-section">
        <div className="container prose">
          <h1>Cookie Policy</h1>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit our
            website. They help us improve your experience and understand how the
            site is used.
          </p>

          <h2>Types of Cookies We Use</h2>
          <ul>
            <li>
              <strong>Session cookies:</strong> Temporary cookies deleted when you
              close your browser.
            </li>
            <li>
              <strong>Persistent cookies:</strong> Stored for up to 2 years to
              remember your preferences.
            </li>
            <li>
              <strong>Third-party cookies:</strong> Google Analytics cookies for
              site usage analysis.
            </li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and delete cookies through your browser settings. Note
            that disabling cookies may affect your experience on our website.
          </p>

          <h2>Security</h2>
          <p>
            Our website uses SSL/HTTPS encryption to protect data transmitted
            between your browser and our servers.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container prose">
        <h1>Vefkokustefna</h1>

        <h2>Hvad eru vefkokur?</h2>
        <p>
          Vefkokur eru litlar textaskrar sem vistadar eru a tadinu thinu
          thegar thu heimsaekir vefsiduna okkar. Thaer hjalpa okkur ad baeta
          upplifun thina og skilja hvernig vefsidan er notuð.
        </p>

        <h2>Tegundir vefkoka</h2>
        <ul>
          <li>
            <strong>Lotukokur:</strong> Timabundnar kokur sem eyðast thegar thu
            lokar vafranum.
          </li>
          <li>
            <strong>Varanlegar kokur:</strong> Geymdar i allt ad 2 ar til ad muna
            kjörstillingar.
          </li>
          <li>
            <strong>Thridjaaðilakokur:</strong> Google Analytics kokur til
            greiningar a notkun vefsiðu.
          </li>
        </ul>

        <h2>Stjornun vefkoka</h2>
        <p>
          Thu getur stjornad og eyt vefkokum i gegnum stillingar vafrans thins.
          Athugadu ad ad slökkva a vefkokum getur haft ahrif a upplifun thina
          a vefsidunni.
        </p>

        <h2>Oryggi</h2>
        <p>
          Vefsida okkar notar SSL/HTTPS dulkodun til ad vernda gogn sem send eru
          milli vafrans thins og thjonanna okkar.
        </p>
      </div>
    </section>
  );
}
