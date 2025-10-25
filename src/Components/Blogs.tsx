import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogsCard from "./BlogsCard";
import Container from "./Conteiner";
import Scroll from "./UI/Scroll";

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  enclosure?: { link: string };
};

export default function Blogs() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://3dnews.ru/news/rss"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.items || []));
  }, []);

  const nextNews = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % news.length);
  };

  const prevNews = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + news.length) % news.length);
  };

  const currentNews = news[current];

  return (
    <section id="blogs">
      <Container className="py-[64px]">
        <Scroll />
        <h1 className="mt-[64px] text-[64px] text-center text-[#12F7D6]">
          Blogs
        </h1>
        <div className="border-b-[2px] w-[148px] mx-auto border-[#12F7D6]"></div>
        <p className="text-center mt-[16px]">
          My thoughts on technology and business, welcome to subscribe
        </p>

        <div className="relative min-h-[500px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {currentNews && (
              <motion.div
                key={currentNews.link}
                custom={direction}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <BlogsCard
                  title={currentNews.title}
                  description={currentNews.description}
                  image={currentNews.enclosure?.link}
                  date={currentNews.pubDate}
                  link={currentNews.link}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevNews}
            className="w-[162px] h-[56px] bg-[#292F36] text-[20px] text-white rounded-[32px] border-[#12F7D6] border-2 hover:opacity-80 transition cursor-pointer"
          >
            Prev
          </button>
          <button
            onClick={nextNews}
            className="w-[162px] h-[56px]  text-[20px] bg-[#12F7D6] text-black rounded-[32px] hover:opacity-80 transition cursor-pointer"
          >
            Next News
          </button>
        </div>
      </Container>
    </section>
  );
}
