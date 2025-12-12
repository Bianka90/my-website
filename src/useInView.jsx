import { useState } from "react";
import { useEffect } from "react";
export function useInView(ref, rootMargin = "0px") {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Is intersecting?", entry.isIntersecting);
          setIsInView(true);
          observer.unobserve(ref.current); // stop observing after triggered
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isInView;
}
