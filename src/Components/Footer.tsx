import Container from "./Conteiner";
import TelegramIcon from "../assets/footer-icons/Telegram.svg";
import InstagramIcon from "../assets/footer-icons/Instagram.svg";
import GitGubIcon from "../assets/footer-icons/Github.svg";

const Contacts = [
  { id: 1, icon: InstagramIcon, link: "#" },
  { id: 1, icon: TelegramIcon, link: "#" },
  { id: 1, icon: GitGubIcon, link: "#" },
];
export default function Footer() {
  return (
    <div className="bg-[#1A1E23] py-[16px] border-[#43454D] border-t-1">
      <Container>
        <div className="flex justify-between">
          <div>
            <div>© 2025 SinanTokmak. All rights reserved.</div>
          </div>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="flex gap-8">
            {Contacts.map((contact) => (
              <a
                className="hover:scale-120 transition"
                key={contact.id}
                href={contact.link}
              >
                <img src={contact.icon} alt="contact-icon" />
              </a>
            ))}
          </div>
          <div>
            <span>Design By</span>
            <span className="text-[#12F7D6] ml-2 border-b-1 cursor-pointer  hover:scale-120 transition">
              JohannLeon
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
