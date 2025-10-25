import Container from "./Conteiner";
import Input from "./UI/Input";
import ThemeText from "./UI/ThemeText";
import Instagram from "../assets/icons/instagram.svg";
import Telegram from "../assets/icons/telegram.svg";
import GitHub from "../assets/icons/github.svg";

export default function Header() {
  return (
    <section>
      <Container className="flex items-center justify-between py-[30px] border-b-zinc-500 border-b-1">
        <div className="flex items-center gap-[8px] ">
          <div className="text-[#12F7D6]  text-[32px]">&lt; E &frasl;&gt;</div>
          <ThemeText className="text-[32px]"> Enver Osmanov</ThemeText>
        </div>
        <div className="flex gap-[32px]">
          <button className="text-[24px] hover:text-[#12F7D6] cursor-pointer">
            Home
          </button>
          <button className="text-[24px] hover:text-[#12F7D6] cursor-pointer">
            Blogs
          </button>
          <Input />
          <button className="text-[16px] flex items-center gap-[9px] hover:text-[#12F7D6] cursor-pointer hover:scale-120 transition">
            <img src={Instagram} alt={Instagram} />
            Instagram
          </button>
          <button className="text-[16px] flex items-center gap-[9px] hover:text-[#12F7D6] cursor-pointer hover:scale-120 transition">
            <img className="w-[20px]" src={Telegram} alt={Telegram} />
            Telegram
          </button>
          <button className="text-[16px] flex items-center gap-[9px] hover:text-[#12F7D6] cursor-pointer hover:scale-120 transition">
            <img src={GitHub} alt={GitHub} />
            GitHub
          </button>
        </div>
      </Container>
    </section>
  );
}
