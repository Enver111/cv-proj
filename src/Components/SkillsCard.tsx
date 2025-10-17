export default function SkillsCard() {
  const skils = [
    { id: 1, num: 4, text: "Programming Language" },
    { id: 2, num: 6, text: "Development Tools" },
    { id: 3, num: 8, text: "Years of Experience" },
  ];

  return (
    <div className="w-[215px] px-[32px] py-[48px] bg-[#1A1E23] h-auto rounded-[80px]">
      {skils.map((skil) => (
        <div className="flex items-center gap-[16px] " key={skil.id}>
          <h1 className="text-[48px] text-[#12F7D6]">{skil.num}</h1>
          <p className="text-[16px]">{skil.text}</p>
        </div>
      ))}
    </div>
  );
}
