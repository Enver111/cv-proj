import Search from "../../assets/icons/Search.svg";

export default function Input() {
  return (
    <div className="flex relative items-center">
      <input
        placeholder="Поиск..."
        className="bg-white  text-black rounded-3xl px-[16px] py-[4px] w-[204px] "
      />
      <img className=" absolute right-[16px] " src={Search} alt="Search" />
    </div>
  );
}
