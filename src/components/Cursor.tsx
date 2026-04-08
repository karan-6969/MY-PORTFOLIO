import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const handleHoverIn = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], .project-row');
      
      if (clickable) {
        if (clickable.classList.contains('project-row')) {
          setHoverText('VIEW →');
          gsap.to(ringRef.current, { 
            width: 60, height: 60, 
            backgroundColor: 'transparent',
            borderColor: 'var(--color-primary-text)'
          });
        } else {
          gsap.to(ringRef.current, { 
            width: 60, height: 60, 
            backgroundColor: 'rgba(255, 59, 0, 0.15)', 
            borderColor: 'transparent' 
          });
        }
        gsap.to(dotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
      }
    };

    const handleHoverOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], .project-row');
      
      if (clickable) {
        setHoverText('');
        gsap.to(ringRef.current, { 
          width: 40, height: 40, 
          backgroundColor: 'transparent',
          borderColor: 'var(--color-primary-text)'
        });
        gsap.to(dotRef.current, { scale: 1, opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleHoverIn);
    document.addEventListener('mouseout', handleHoverOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHoverIn);
      document.removeEventListener('mouseout', handleHoverOut);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor-dot" ref={dotRef}></div>
      <div id="custom-cursor-ring" ref={ringRef}>{hoverText}</div>
    </>
  );
}
