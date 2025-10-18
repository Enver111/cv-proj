import Container from "./Conteiner";
import Scroll from "./UI/Scroll";
import WorksPrew from "./WorksPrew";

export default function Works() {
  return (
    <div className="bg-[#1A1E23]  ">
      <div className="bg-[url(./assets/works.png)] ">
        <Container>
          <Scroll />
          <h1 className="mt-[64px] text-[64px] text-center text-[#12F7D6]">
            Works
          </h1>
          <div className="border-b-[2px] w-[148px] mx-auto border-[#12F7D6]"></div>
          <p className="text-center mt-[16px]">
            I had the pleasure of working with these awesome projects
          </p>
          <div className="flex items-center justify-center mt-[60px] pb-[128px]">
            <WorksPrew />
          </div>
        </Container>
      </div>
    </div>
  );
}
