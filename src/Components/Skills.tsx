import Container from "./Conteiner";
import Scroll from "./UI/Scroll";
import Monitor from "../assets/icons/icon-monitor.svg";
import HtmlIcon from "../assets/icons/skills/html.svg";
import CssIcon from "../assets/icons/skills/css.svg";
import JsIcon from "../assets/icons/skills/js.svg";
import TSIcon from "../assets/icons/skills/ts.svg";
import ReactIcon from "../assets/icons/skills/react.svg";
import ReduxIcon from "../assets/icons/skills/redux.svg";
import TaiwindIcon from "../assets/icons/skills/tailwind.svg";
import NextIcon from "../assets/icons/skills/next.svg";

export default function Skills() {
  const skills = [
    { id: 1, img: HtmlIcon, name: "HTML", color: "#E54F26" },
    { id: 2, img: CssIcon, name: "CSS", color: "#3178C6" },
    { id: 3, img: TaiwindIcon, name: "TAILWIND", color: "#161D2D" },
    { id: 4, img: JsIcon, name: "JS", color: "#E7A020" },
    { id: 5, img: TSIcon, name: "TS", color: "#3178C6" },
    { id: 6, img: ReactIcon, name: "REACT", color: "#28A9E0" },
    { id: 7, img: ReduxIcon, name: "REDUX", color: "#764ABC" },
    { id: 8, img: NextIcon, name: "NEXT", color: "white" },
  ];
  return (
    <section id="skills" className="bg-[#292F36]">
      <div className="bg-[url(./assets/bg/skills.png)]">
        <Container className="relative py-[128px] flex flex-col">
          <Scroll />
          <div className="text-[#12F7D6]  text-[168px] absolute top-[128px] right-[340px]">
            &lt;&frasl;&gt;
          </div>
          <h1 className="mt-[64px] text-[64px] text-center text-[#12F7D6]">
            Skills
          </h1>
          <div className="border-b-[2px] w-[148px] mx-auto border-[#12F7D6]"></div>
          <p className="text-center mt-[16px]">
            I am striving to never stop learning and improving
          </p>
          <div className="flex mt-[64px] mx-auto">
            <div className=" w-[6px] bg-[#0C73B8] rounded-tl-[8px] rounded-bl-[8px]"></div>
            <div className="px-[24] py-[16px] bg-[#98FAEC] w-[288px] flex flex-col items-center justify-center rounded-tr-[8px] rounded-br-[8px]">
              <img src={Monitor} alt="Monitor" />
              <h2 className="text-[24px] text-[#292F36]">Web Developement</h2>
              <p className="text-[#292F36]">HTML · CSS · JS · REACT</p>
            </div>
          </div>
          <div className="mx-auto mt-[90px] flex gap-15 flex-wrap">
            {skills.map((skil) => (
              <div key={skil.id} className="text-center">
                <img src={skil.img} alt={skil.name} />
                <h2
                  className="text-[25px] mt-[24px] "
                  style={{ color: skil.color }}
                >
                  {skil.name}
                </h2>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
