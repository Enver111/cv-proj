import { useEffect, useState } from "react";

export type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  enclosure?: { link: string };
};

export function useNews(rssUrl: string) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!data.items || data.items.length === 0) {
          throw new Error("Нет данных в RSS");
        }
        setNews(data.items);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setNews([]);
      })
      .finally(() => setLoading(false));
  }, [rssUrl]);

  return { news, loading, error };
}
