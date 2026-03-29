import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { staff } from "../data/staff";
import { Mail, Phone, MoreHorizontal } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function Staff() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState(null);
  const [titleRef, titleVisible] = useReveal(0.2);
  const [gridRef, gridVisible] = useReveal(0.1);

  return (
    <section className="staff-section" id="starfsfolk">
      <div className="staff-angle" />
      <div className="staff-bg">
        <div className="container">
          <h2 ref={titleRef} className={`reveal ${titleVisible ? "revealed" : ""}`}>
            {lang === "is" ? "Starfsf\u00F3lk" : "The Team"}
          </h2>
          <div ref={gridRef} className={`staff-grid reveal ${gridVisible ? "revealed" : ""}`}>
            {staff.map((person, i) => {
              const isOpen = openId === person.id;
              return (
                <div
                  key={person.id}
                  className={`staff-card ${isOpen ? "expanded" : ""}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
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
                      <a href={`tel:${person.phone}`}>
                        <Phone size={13} /> {person.phone}
                      </a>
                      <a href={`mailto:${person.email}`}>
                        <Mail size={13} /> {person.email}
                      </a>
                    </div>
                    <button
                      className="staff-expand-btn"
                      onClick={() => setOpenId(isOpen ? null : person.id)}
                    >
                      <MoreHorizontal size={20} />
                    </button>
                  </div>
                  {isOpen && (
                    <div className="staff-details">
                      <ul>
                        {person.bio[lang].map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
