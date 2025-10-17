import Mouse from "../../assets/icons/mouse.svg";

export default function Scroll() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        style={{
          animation: "moveUpDown 6s ease-in-out infinite",
        }}
      >
        <img src={Mouse} alt="mouse" />
      </div>
      <div>|</div>
      <div>|</div>
      <div>|</div>
    </div>
  );
}
