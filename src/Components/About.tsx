import { useState, useEffect } from "react";
import Button from "../assets/icons/Button.svg";

export default function About() {
  const fullText = `
    <h1 class="text-[64px]"> Hey
      <br /> I'm <span class="text-[#12F7D6]">Enver</span>,
      <br /> Frontend Developer
    </h1>
    <p class="text-[16px] my-[30px]">
      I help business grow by crafting amazing web experiences.
      <br /> If you’re looking for a developer that likes to get stuff done,
    </p>
    <div class="flex gap-2 items-center">
      <p class="text-[32px] text-[#12F7D6]">let’s talk</p>
      <a href="#"><img src=${Button} alt="Button" /></a>
    </div>
  `;

  const [displayed, setDisplayed] = useState("");
  const [visible, setVisible] = useState(false);

  const typingSpeed = 50; // скорость печати (мс)
  const repeatDelay = 50000000; // пауза перед повтором (мс)

  useEffect(() => {
    const tokens = fullText.split(/(<[^>]+>)/g).filter(Boolean);

    let tokenIndex = 0;
    let charIndex = 0;
    let currentText = "";

    function startTyping() {
      const interval = setInterval(() => {
        const token = tokens[tokenIndex];

        if (!token) {
          clearInterval(interval);
          // ждём и запускаем печать заново
          setTimeout(() => {
            setDisplayed("");
            setVisible(false);
            tokenIndex = 0;
            charIndex = 0;
            currentText = "";
            startTyping();
          }, repeatDelay);
          return;
        }

        if (token.startsWith("<")) {
          currentText += token;
          setDisplayed(currentText);
          setVisible(true);
          tokenIndex++;
          charIndex = 0;
        } else {
          currentText += token[charIndex];
          setDisplayed(currentText);
          setVisible(true);
          charIndex++;
          if (charIndex >= token.length) {
            tokenIndex++;
            charIndex = 0;
          }
        }
      }, typingSpeed);
    }

    startTyping();

    return () => setDisplayed(""); // очистка при размонтировании
  }, [typingSpeed]);

  return (
    <div
      className="text-white font-mono mx-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(5px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
      dangerouslySetInnerHTML={{ __html: displayed }}
    />
  );
}
