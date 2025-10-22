import Container from "./Conteiner";
import MessageInput from "./UI/MessageInput";
import Scroll from "./UI/Scroll";
import IconSend from "../assets/icons/icon-send.svg";

export default function Contact() {
  return (
    <div className="bg-[#1A1E23] py-[64px]">
      <Container>
        <Scroll />
        <h1 className="mt-[64px] text-[64px] text-center text-[#12F7D6]">
          Contact
        </h1>
        <div className="border-b-[2px] w-[148px] mx-auto border-[#12F7D6]"></div>
        <p className="text-center mt-[16px]">
          I’m currently available for freelance work
        </p>
        <h1 className="max-w-[407px] px-[40px] py-[16px] text-[32px] bg-[#1A1E23] rounded-tl-[32px] rounded-br-[32px] border-[2px] text-center border-[#12F7D6] mx-auto mt-[100px] ">
          Send me a message
        </h1>

        <div className="flex flex-col gap-6 my-[64px]">
          <div className="flex gap-40">
            <div className="w-1/2">
              <MessageInput inputHeader="name" placeholder="Enter your name" />
            </div>
            <div className="w-1/2">
              <MessageInput
                inputHeader="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <MessageInput
              inputHeader="message"
              placeholder="Enter your needs"
            />
          </div>
        </div>

        <button className="mx-auto flex items-center text-[20px] text-[#292F36] gap-[15px] px-[32px] py-[16px] bg-[#12F7D6] rounded-[32px] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_4px_12px_#12F7D6] cursor-pointer">
          <span>Send Message</span>
          <img src={IconSend} alt="IconSend" />
        </button>
      </Container>
    </div>
  );
}
