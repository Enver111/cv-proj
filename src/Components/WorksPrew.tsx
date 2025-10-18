import { useState } from "react";
import BtnNextIcon from "../assets/icons/icon-chevron-right.svg";
import BtnPrevIcon from "../assets/icons/icon-chevron-left.svg";
import DualScreen from "../assets/dual-screen.png";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import Dodo from "../assets/img/dodoIcon.png";
import Pulce from "../assets/img/pulse.png";
import JobIcon from "../assets/img/job_yan.png";
import DropIcon from "../assets/img/dropIcon.png";
import MarvelIcon from "../assets/img/marvelIcon.png";
import Uber from "../assets/img/uber.png";
import ResumeEditor from "../assets/img/resume-editor.png";

export default function WorksPrew() {
  const works = [
    { id: 1, img: JobIcon, host: "https://enver111.github.io/web/" },
    { id: 2, img: Dodo, host: "https://enver111.github.io/dodo_pizza_live/" },
    { id: 3, img: Pulce, host: "https://enver111.github.io/pulse/" },
    { id: 4, img: DropIcon, host: "https://enver111.github.io/dropdown_live/" },
    { id: 5, img: MarvelIcon, host: "https://enver111.github.io/marvel_live/" },
    { id: 6, img: Uber, host: "https://enver111.github.io/uber/" },
    {
      id: 7,
      img: ResumeEditor,
      host: "https://enver111.github.io/visual-resume-editor-live/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  // 👇 типизированные варианты
  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handlePrev}
        className="w-[72px] h-[72px] p-[16px] bg-[#292F36] rounded-[48px]"
      >
        <img src={BtnPrevIcon} alt="BtnPrevIcon" />
      </button>

      <div className="relative">
        <a
          href={works[currentIndex].host} // 👈 динамическая ссылка
          target="_blank" // 👈 открывать в новой вкладке
          rel="noopener noreferrer" // 👈 безопасный атрибут
          className="absolute right-35 top-15 text-[24px] text-[#12F7D6] border-b-2"
        >
          View Website
        </a>

        <img src={DualScreen} alt="DualScreen" />

        <div className="absolute left-76 top-32">
          <div className="relative w-[297px] h-[175px] overflow-hidden flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={works[currentIndex].id}
                src={works[currentIndex].img}
                alt={`Work ${works[currentIndex].id}`}
                className="absolute"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-[72px] h-[72px] p-[16px] bg-[#292F36] rounded-[48px] cursor-pointer"
      >
        <img src={BtnNextIcon} alt="BtnNextIcon" />
      </button>
    </div>
  );
}
