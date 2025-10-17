import About from "./About";
import Container from "./Conteiner";
import ProfileCard from "./ProfileCard";

export default function Main() {
  return (
    <Container className="">
      <h1 className="text-center mt-[60px] text-[117px] text-[#98FAEC]">
        Developer{" "}
      </h1>
      <div className="flex">
        <ProfileCard />
        <About />
      </div>
    </Container>
  );
}
