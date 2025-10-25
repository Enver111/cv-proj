import Container from "./Conteiner";
import Scroll from "./UI/Scroll";
import Mac from "../assets/bg/mac.png";

export default function About() {
  return (
    <section id="about" className="bg-[#1A1E23]">
      <div className="bg-[url(./assets/bg/about-me.png)]">
        <Container className="pb-[128px]">
          <Scroll />
          <div className="flex justify-between items-center mt-[120px]">
            <div>
              <h1 className="w-[367px] text-[64px] bg-[#1A1E23] rounded-tl-[40px] rounded-br-[40px] border-[4px] text-center border-[#12F7D6] mb-[60px]">
                About Me
              </h1>
              <div className="px-[40px] py-[58px] rounded-[40px] bg-[#292F36] w-[880px]">
                <h2 className="text-[32px] text-[#12F7D6]">Hello!</h2>
                <br />
                <p className="text-[16px]">
                  My name is Sinan and I specialize in web developement that
                  utilizes HTML, CSS, JS, and REACT etc.
                </p>
                <br />
                <p>
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, concise, robust code that works.
                  Striving to never stop learning and improving.
                </p>
                <br />
                <p>
                  When I'm not coding, I am writing bolgs, reading, or picking
                  up some new hands-on art project like photography.
                </p>
                <br />
                <p>
                  I like to have my perspective and belief systems challenged so
                  that I see the world through new eyes.
                </p>
              </div>
            </div>
            <div>
              <img src={Mac} alt="Mac" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
