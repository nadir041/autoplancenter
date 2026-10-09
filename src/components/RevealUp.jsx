import React, { useEffect, useRef, useState } from 'react';

export default function RevealUp({ children, className = '', tag: Tag = 'div', style, ...props }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal-up${isInView ? ' in-view' : ''} ${className}`} style={style} {...props}>
      {children}
    </Tag>
  );
}
