import { useState } from "react";

type MessageInputProps = {
  inputHeader: string;
  placeholder?: string;
};

export default function MessageInput({
  inputHeader,
  placeholder,
}: MessageInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div
        className={`flex gap-2 items-center transition-all duration-300 ${
          isFocused
            ? "text-[#12F7D6] drop-shadow-[0_0_6px_#12F7D6]"
            : "text-[#12F7D6]"
        }`}
      >
        <h1>Your {inputHeader}</h1>
        {value === "" && <span>*</span>}
      </div>

      <div className="relative w-full mt-[15px]">
        <input
          className="w-full border-none bg-transparent focus:outline-none text-white  py-[5px]"
          type="text"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 pointer-events-none ${
            isFocused
              ? "bg-[#12F7D6] shadow-[0_0_8px_#12F7D6]"
              : "bg-[#98FAEC] shadow-none"
          }`}
        />
      </div>
    </div>
  );
}
