import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const isFirstVisit = !sessionStorage.getItem('hasVisited');

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(isFirstVisit);

  useGSAP(() => {
    if (!show) return;
    sessionStorage.setItem('hasVisited', 'true');
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
        setShow(false);
      }
    });

    tl.fromTo(textRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
    .to(textRef.current, { y: -50, opacity: 0, duration: 0.6, ease: 'power3.in', delay: 0.8 })
    .to(containerRef.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' });
  }, { scope: containerRef, dependencies: [show] });

  if (!show) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#000000] flex items-center justify-center">
      <div ref={textRef} className="font-syne font-extrabold text-[10vw] md:text-[8vw] text-[#F0EFE9] uppercase text-center leading-[0.9]">
        I BUILD<br />
        <span className="text-[#FFC200]">CRAZY SHIT</span>
      </div>
    </div>
  );
}
