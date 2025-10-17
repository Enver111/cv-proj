import IconMail from "../assets/icons/icon-mail.svg";
import ProfilePhoto from "../assets/icons/profile-photo.svg";
import IconLink from "../assets/icons/icon-link.svg";
import IconMap from "../assets/icons/icon-map-pin.svg";
import IconBriefcase from "../assets/icons/icon-briefcase.svg";
import IconDownload from "../assets/icons/icon-download.svg";

export default function ProfileCard() {
  const stacks = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "TAILWIND" },
    { id: 4, name: "JS" },
    { id: 5, name: "TS" },
    { id: 6, name: "REACT" },
    { id: 7, name: "REDUX" },
    { id: 8, name: "NEXT" },
  ];
  return (
    <div
      className="w-[330px] p-[30px] rounded-tl-[160px] rounded-br-[160px] border-[4px] "
      style={{ boxShadow: "-4px -4px 10px #12F7D6" }}
    >
      <img src={ProfilePhoto} alt="ProfilePhoto" className="mx-auto" />
      <h2 className="text-center">Enver</h2>
      <p className="text-center">Frontend Developer</p>
      <div className="flex gap-[10px] mt-[20px] ">
        <img src={IconMail} alt="IconMail" />
        <a href="#">enver.osmanov@gmail.com</a>
      </div>
      <div className="flex gap-[10px] mt-[20px] ">
        <img src={IconMap} alt="IconMap" />
        <p>Simferopol</p>
      </div>
      <div className="flex gap-[10px] mt-[20px] ">
        <img src={IconBriefcase} alt="IconBriefcase" />
        <p>Full-time / Freelancer</p>
      </div>
      <div className="flex gap-[10px] mt-[20px]">
        <img src={IconLink} alt="IconLink" />
        <a href="#">www.enverosm.com</a>
      </div>
      <div className="flex gap-2 flex-wrap mt-[16px]">
        {stacks.map((stack) => (
          <div
            key={stack.id}
            className="bg-[#12F7D6] text-[#292F36] rounded-[8px] px-[8px]"
          >
            {stack.name}
          </div>
        ))}
      </div>
      <button className="group bg-white text-[#292F36] flex gap-[16px] px-[32px] mx-auto my-[32px] py-[16px] rounded-[32px] cursor-pointer ">
        <span className="text-[20px] font-bold animate-pulse group-hover:animate-none">
          Download CV
        </span>
        <img
          src={IconDownload}
          alt="IconDownload"
          className=" group-hover:animate-bounce"
        />
      </button>
    </div>
  );
}
