import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { staff } from "../data/staff";
import { Mail, Phone, X } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function Staff() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState(null);
  const [titleRef, titleVisible] = useReveal(0.2);
  const [gridRef, gridVisible] = useReveal(0.1);

  const openPerson = staff.find((p) => p.id === openId);

  return (
    <section className="staff-section" id="starfsfolk">
      <div className="staff-angle" />
      <div className="staff-bg">
        <div className="container">
          <h2 ref={titleRef} className={`reveal ${titleVisible ? "revealed" : ""}`}>
            {lang === "is" ? "Starfsfólk" : "The Team"}
          </h2>

          {openPerson ? (
            <div className="staff-popup">
              <div className="staff-popup-photo">
                <img src={openPerson.image} alt={openPerson.name} />
              </div>
              <div className="staff-popup-content">
                <button className="staff-popup-close" onClick={() => setOpenId(null)}>
                  <X size={24} />
                </button>
                <div className="staff-popup-name">{openPerson.name}</div>
                <div className="staff-popup-role">{openPerson.role[lang]}</div>
                {openPerson.cv[lang].map((section, i) => (
                  <div key={i} className="staff-popup-section">
                    <h4>{section.heading}</h4>
                    {section.items.map((item, j) => (
                      <div key={j} className="staff-popup-row">
                        <span className="staff-popup-year">{item.year}</span>
                        <span className="staff-popup-text">{item.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div ref={gridRef} className={`staff-grid reveal ${gridVisible ? "revealed" : ""}`}>
              {staff.map((person, i) => (
                <div
                  key={person.id}
                  className="staff-card"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  onClick={() => setOpenId(person.id)}
                >
                  <div className="staff-photo">
                    <img
                      src={person.image}
                      alt={person.name}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="staff-placeholder" style={{ display: "none" }}>
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="staff-name-overlay">
                      <span className="staff-overlay-name">{person.name}</span>
                      <span className="staff-overlay-role">{person.role[lang]}</span>
                    </div>
                  </div>
                  <div className="staff-contact-bar">
                    <div className="staff-contact-info">
                      <a href={`tel:${person.phone}`} onClick={(e) => e.stopPropagation()}>
                        <Phone size={13} /> {person.phone}
                      </a>
                      <a href={`mailto:${person.email}`} onClick={(e) => e.stopPropagation()}>
                        <Mail size={13} /> {person.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
