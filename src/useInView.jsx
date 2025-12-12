import { useEffect, useState } from "react";

export function useInView(ref, rootMargin = "0px 0px -50px 0px") {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🚨 force Safari to paint first
          requestAnimationFrame(() => {
            setInView(true);
          });
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}
