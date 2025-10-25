import IconGrid from "../assets/navigatio-icons/icon-grid.svg";
import IconUser from "../assets/navigatio-icons/icon-user.svg";
import IconCode from "../assets/navigatio-icons/icon-code.svg";
import IconMonitor from "../assets/navigatio-icons/icon-monitor.svg";
import IconEdit from "../assets/navigatio-icons/icon-edit.svg";
import IconMail from "../assets/navigatio-icons/icon-mail.svg";

import { useState, useEffect } from "react";

export default function NavigaionBar() {
  const [activeId, setActiveId] = useState("header");

  const navigation = [
    { id: "main", logo: IconGrid, alt: "Главная", href: "#main" },
    { id: "about", logo: IconUser, alt: "Обо мне", href: "#about" },
    { id: "skills", logo: IconCode, alt: "Навыки", href: "#skills" },
    { id: "works", logo: IconMonitor, alt: "Работы", href: "#works" },
    { id: "blogs", logo: IconEdit, alt: "Блог", href: "#blogs" },
    { id: "contact", logo: IconMail, alt: "Контакты", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% блока в зоне видимости
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="fixed left-6 top-1/4 -translate-y-1/2 flex flex-col gap-6 bg-[#1A1E23] px-3 py-2 rounded-[40px] border border-gray-700 z-10">
      {navigation.map((nav) => (
        <a
          key={nav.id}
          href={nav.href}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(nav.href)!.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className={`p-2 rounded-full transition-colors ${
            activeId === nav.id ? "bg-white" : "bg-transparent"
          }`}
        >
          <img
            src={nav.logo}
            alt={nav.alt}
            className={`w-6 h-6 ${activeId === nav.id ? "invert" : "invert-0"}`}
          />
        </a>
      ))}
    </div>
  );
}
