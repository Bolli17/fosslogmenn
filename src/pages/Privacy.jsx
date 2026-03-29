import { useLang } from "../context/LanguageContext";

export default function Privacy() {
  const { lang } = useLang();

  if (lang === "en") {
    return (
      <section className="page-section">
        <div className="container prose">
          <h1>Privacy Policy</h1>
          <p className="text-muted">Last updated: October 7, 2019</p>

          <p>
            Foss logmenn operates in compliance with the Icelandic Data
            Protection Act (No. 90/2018) and the EU General Data Protection
            Regulation (GDPR).
          </p>

          <h2>Data We Collect</h2>
          <p>
            In connection with our legal services, we may collect the following
            personal data: names, addresses, phone numbers, email addresses,
            national ID numbers (kennitala), and bank account details.
          </p>

          <h2>Data Retention</h2>
          <p>
            Personal data is retained for up to 5 years from the closure of a
            case. Accounting records are retained for 7 years as required by law.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your
            personal data. You may also request data portability or lodge a
            complaint with the Icelandic Data Protection Authority
            (Personuvernd).
          </p>

          <h2>Contact</h2>
          <p>
            Privacy contact: Ragnar Bjorgvinsson,{" "}
            <a href="mailto:ragnar@fosslogmenn.is">ragnar@fosslogmenn.is</a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container prose">
        <h1>Personuverndarstefna</h1>
        <p className="text-muted">Sidast uppfaerd: 7. oktober 2019</p>

        <p>
          Foss logmenn starfar i samraemi vid log um personuvernd og medferd
          persónuupplysinga nr. 90/2018 og reglugerð Evrópuþingsins og ráðsins
          (ESB) 2016/679 (GDPR).
        </p>

        <h2>Gogn sem vid soefnum</h2>
        <p>
          I tengslum vid logfraedithjonustu okkar kunnum vid ad safna eftirfarandi
          personuupplysingum: nofn, heimilisföng, simanumer, netföng, kennitolur
          og bankareikningsupplysingar.
        </p>

        <h2>Varðveisla gagna</h2>
        <p>
          Personuupplysingar eru vardveittar i allt ad 5 ar fra lokum mals.
          Bokhaldsupplysingar eru vardveittar i 7 ar samkvaemt logum.
        </p>

        <h2>Rettindi thin</h2>
        <p>
          Thu att rett a ad fa adgang ad, leidrettingu eda eyðingu
          personuupplysinga thinna. Thu getur einnig okt eftir flutningsretti gagna
          eda lagt fram kvaertun hja Personuvernd.
        </p>

        <h2>Tengiliður</h2>
        <p>
          Abyrgdarmadur personuverndar: Ragnar Bjorgvinsson,{" "}
          <a href="mailto:ragnar@fosslogmenn.is">ragnar@fosslogmenn.is</a>
        </p>
      </div>
    </section>
  );
}
