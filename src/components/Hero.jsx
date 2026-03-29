import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLang();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const paragraphs =
    lang === "is"
      ? [
          "Foss l\u00F6gmenn \u01C0 fj\u00E1rm\u00E1l veita einstaklingum, fyrirt\u00E6kjum og stofnunum alhl\u00ED\u00F0a \u00FEj\u00F3nustu \u00E1 svi\u00F0um l\u00F6gfr\u00E6\u00F0i og fj\u00E1rm\u00E1la. Stofan er \u00FEannig \u00ED stakk b\u00FAin til a\u00F0 veita heildst\u00E6\u00F0a og \u00FEverfaglega r\u00E1\u00F0gj\u00F6f vi\u00F0 \u00FArlausn m\u00E1la fyrir vi\u00F0skiptavini.",
          "Foss l\u00F6gmenn hafa fj\u00F6l\u00FE\u00E6tta reynslu af l\u00F6gmannst\u00F6rfum og l\u00F6gfr\u00E6\u00F0ilegri r\u00E1\u00F0gj\u00F6f. L\u00F6g\u00F0 er \u00E1hersla \u00E1 a\u00F0 veita fyrsta flokks \u00FEj\u00F3nustu \u00E1 flestum svi\u00F0um l\u00F6gfr\u00E6\u00F0innar.",
          "Foss fj\u00E1rm\u00E1l b\u00FDr yfir yfirgripsmikilli reynslu af fj\u00E1rfestingum, fj\u00E1rhagslegri endurskipulagningu og r\u00E1\u00F0gj\u00F6f vi\u00F0 innlend og erlend fyrirt\u00E6ki.",
        ]
      : [
          "Foss Legal \u01C0 Finance provides individuals, companies, and organizations with comprehensive services in the fields of law and finance. The firm is well-equipped to provide holistic and interdisciplinary advisory services for its clients.",
          "Foss Legal has extensive experience in legal practice and legal advisory. Emphasis is placed on providing first-class service across most areas of law.",
          "Foss Finance possesses comprehensive experience in investments, financial restructuring, and advisory services for domestic and international companies.",
        ];

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className={`hero-content container ${loaded ? "hero-loaded" : ""}`}>
        <h1>{"Foss l\u00F6gmenn | fj\u00E1rm\u00E1l"}</h1>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ transitionDelay: `${0.3 + i * 0.15}s` }}>{p}</p>
        ))}
      </div>
      <div className="hero-angle" />
    </section>
  );
}
