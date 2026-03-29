import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import useReveal from "../hooks/useReveal";
import {
  Calculator,
  Coins,
  Search,
  TrendingUp,
  Briefcase,
  Globe,
  Users,
  Building,
  Handshake,
  Gavel,
} from "lucide-react";

const icons = [
  Calculator,
  Coins,
  Search,
  TrendingUp,
  Briefcase,
  Globe,
  Users,
  Building,
  Handshake,
  Gavel,
];

export default function Services() {
  const { t, lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);
  const [headerRef, headerVisible] = useReveal(0.2);
  const [gridRef, gridVisible] = useReveal(0.1);

  const subtitle =
    lang === "is"
      ? "Starfsmenn stofunnar b\u00FAa yfir \u00E1ralangri reynslu \u00E1 hinum \u00FDmsu s\u00E9rsvi\u00F0um l\u00F6gfr\u00E6\u00F0innar.\nOkkar s\u00E9r\u00FEekking liggur \u00FE\u00F3 einna helst \u00ED eftirfarandi m\u00E1laflokkum:"
      : "Our team has extensive experience across various fields of law.\nOur expertise lies primarily in the following practice areas:";

  const activeItem = activeIndex !== null ? t.services.items[activeIndex] : null;

  return (
    <section className="services-section" id="sersvid">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? "revealed" : ""}`}>
          <h2>{lang === "is" ? "Helstu s\u00E9rsvi\u00F0" : "Key Practice Areas"}</h2>
          <p>{subtitle}</p>
        </div>

        <div ref={gridRef} className={`services-grid reveal ${gridVisible ? "revealed" : ""}`}>
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className={`service-card ${isActive ? "active" : ""}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
                onClick={() => setActiveIndex(isActive ? null : i)}
              >
                <div className="service-icon">
                  <Icon size={64} strokeWidth={1} />
                </div>
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </div>

        {activeItem && (
          <div className="service-expanded">
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
