import { useEffect, useState } from "react";

const useMedia = (media: string) => {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    function changeMatch() {
      if (typeof window === "object") {
        const { matches } = window.matchMedia(media);
        setMatch(matches);
      }
    }
    changeMatch();
    const isBrowser = () => typeof window !== "undefined";
    if (isBrowser()) window.addEventListener("resize", changeMatch);

    return () => {
      if (isBrowser()) window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};
export default useMedia;
