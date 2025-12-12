import { useState, useEffect } from "react";

export function useInView(ref, rootMargin = "0px 0px -150px 0px") {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // iOS Safari / webview / SSR fallback
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      // No IO support? Just show the element.
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // stop after first time
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isInView;
}
