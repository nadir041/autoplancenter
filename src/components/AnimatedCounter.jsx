import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ target, isDecimal = false, duration = 1600 }) {
  const [value, setValue] = useState('0');
  const ref = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const start = performance.now();

            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = target * eased;
              setValue(isDecimal ? current.toFixed(1) : Math.round(current).toString());
              if (progress < 1) {
                requestAnimationFrame(tick);
              }
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isDecimal, duration]);

  return (
    <span className="stat-num" ref={ref} data-count={target}>
      {value}
    </span>
  );
}
