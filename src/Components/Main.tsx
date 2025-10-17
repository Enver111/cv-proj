import Hero from "./Hero";
import Container from "./Conteiner";
import ProfileCard from "./ProfileCard";
import SkillsCard from "./SkillsCard";

export default function Main() {
  return (
    <Container className="">
      <h1 className="text-center mt-[60px] text-[117px] text-[#98FAEC]">
        Developer{" "}
      </h1>
      <div className="flex items-center justify-between pb-[128px]">
        <ProfileCard />
        <Hero />
        <SkillsCard />
      </div>
    </Container>
  );
}
