import { useState } from "react";
import DefaultBlogsImg from "../assets/default-blogs-img.png";
import ArrowRight from "../assets/icons/arr-r.svg";

type BlogsCardProps = {
  title: string;
  description: string;
  image?: string;
  tag?: string;
  date?: string;
  time?: string;
  link?: string;
};

export default function BlogsCard({
  title,
  description,
  image = DefaultBlogsImg,
  tag = "Web Developer",
  date,
  link = "#",
}: BlogsCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const src = imgError ? DefaultBlogsImg : image;

  function cleanDescription(html: string) {
    return html.replace(/<img[^>]*>/g, "").trim();
  }

  return (
    <div className="flex justify-center gap-[50px] border-t border-b py-[65px] my-[64px]">
      <div className="w-[300px]">
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-[#2b2d33]">
          {/* Скелетон для картинки */}
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-700" />
          )}

          <img
            src={src}
            alt="Blog preview"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              setImgError(true);
              setImgLoaded(true);
            }}
          />
        </div>
      </div>

      <div className="max-w-[700px]">
        <h1 className="text-[32px] text-[#12F7D6] font-semibold">{title}</h1>
        <p
          className="mt-[24px] text-[#ccc]"
          dangerouslySetInnerHTML={{ __html: cleanDescription(description) }}
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="my-[24px] flex gap-1 items-center cursor-pointer group"
        >
          <span className="border-b text-[#12F7D6] group-hover:opacity-80 transition">
            Read More
          </span>
          <img
            src={ArrowRight}
            alt="ArrowRight"
            className="group-hover:translate-x-1 transition"
          />
        </a>
        <div className="flex items-center gap-4 text-sm text-[#aaa]">
          <p className="py-1 px-3 bg-[#43454D] rounded-[16px]">{tag}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
