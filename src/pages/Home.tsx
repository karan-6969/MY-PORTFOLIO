import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Basic pop-in animations
    gsap.fromTo('.rm-pop', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        }
      }
    );
    
    // Readymag Parallax Effect
    gsap.utils.toArray<HTMLElement>('.rm-parallax').forEach((el) => {
      const speed = parseFloat(el.dataset.speed || '1');
      gsap.to(el, {
        y: () => -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });

    // Magnetic buttons
    const magnets = document.querySelectorAll('.magnetic');
    magnets.forEach((elem) => {
      const el = elem as HTMLElement;
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.4, y: y * 0.4, duration: 0.8, ease: 'power3.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
      });
    });

     // And for sections
    gsap.utils.toArray<HTMLElement>('.rm-section').forEach((sec) => {
      gsap.fromTo(sec.querySelectorAll('.rm-reveal'), 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: sec, start: 'top 75%' }
        }
      );
    });
  }, { scope: heroRef.current?.parentElement || undefined });

  return (
    <div className="w-full bg-background selection:bg-rmOrange selection:text-surface">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen pt-[120px] pb-20 px-6 max-w-[1400px] mx-auto flex flex-col justify-between">
        <h1 className="font-syne font-extrabold text-[15vw] leading-[0.8] tracking-tighter text-textMain uppercase relative z-10 w-full mt-10">
          <div className="flex flex-col items-start gap-4">
            <span className="block hover:text-rmBlue transition-colors duration-300 rm-pop rm-parallax" data-speed="0.8">KARAN</span>
            <span className="block bg-[#FFC200] text-[#1A1A1A] px-[4vw] pt-[1.5vw] pb-[0.5vw] rounded-[999px] transform -rotate-3 hover:translate-y-[-10px] hover:rotate-0 transition-transform duration-500 rm-pop rm-parallax" data-speed="1.2">BHATT</span>
          </div>
        </h1>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-24 gap-12">
          <p className="text-[24px] md:text-[36px] font-inter font-medium text-textMain max-w-2xl leading-tight rm-pop">
            I craft interfaces that are <span className="bg-[#FFC200] text-[#1A1A1A] px-2 rounded-lg">bold</span>, fast, and unforgettable. Creative Developer & Frontend Engineer.
          </p>
          <div className="flex flex-col items-start lg:items-end gap-3 text-[14px] font-inter font-bold rm-pop sm:mb-12">
            <span className="bg-textMain text-surface px-6 py-3 rounded-[999px]">BASED IN INDIA</span>
            <span className="bg-rmOrange text-surface px-6 py-3 rounded-[999px] flex items-center gap-3">
              <span className="w-2 h-2 rounded-[999px] bg-surface animate-pulse"></span>
              AVAILABLE 2025
            </span>
          </div>
        </div>
      </section>

      {/* YELLOW ABOUT MARQUEE / OVERLAP */}
      <section id="about" className="bg-rmYellow py-24 overflow-hidden border-t-8 border-textMain rm-section">
        <div className="flex animate-marquee whitespace-nowrap min-w-full">
           <span className="font-syne font-bold text-[8vw] text-textMain uppercase px-8">OBSESSED WITH DETAILS</span>
           <span className="font-syne font-bold text-[8vw] text-surface uppercase px-8 italic">ALWAYS EATING</span>
           <span className="font-syne font-bold text-[8vw] text-rmOrange uppercase px-8">REFACTORS FOR FUN</span>
           <span className="font-syne font-bold text-[8vw] text-textMain uppercase px-8">OBSESSED WITH DETAILS</span>
           <span className="font-syne font-bold text-[8vw] text-surface uppercase px-8 italic">ALWAYS EATING</span>
           <span className="font-syne font-bold text-[8vw] text-rmOrange uppercase px-8">REFACTORS FOR FUN</span>
        </div>
      </section>

      {/* BLUE WORK SECTION */}
      <section id="work" className="bg-rmBlue py-32 rounded-t-[80px] -mt-10 relative z-20 border-[8px] border-b-0 border-textMain rm-section">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-syne font-medium text-[10vw] text-surface leading-[0.8] mb-24 rm-reveal">
            SELECTED<br/><span className="text-[#FFC200]">WORKS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { n: '01', title: 'Deep Packet Inspection', sub: 'Network traffic engine', bg: 'bg-[#0050CC]', link: '/projects/dpi' },
              { n: '02', title: 'GitPeek', sub: 'Dev profile analyzer', bg: 'bg-[#0047B3]', link: '/projects/gitpeek' },
              { n: '03', title: 'Route-X', sub: 'Path optimization tool', bg: 'bg-[#003D99]', link: '/projects/routex' }
            ].map((work, index) => (
              <a href={work.link} 
                 key={work.n} 
                 className={`group ${work.bg} rounded-[48px] p-12 lg:p-16 hover:bg-rmOrange transition-colors duration-500 min-h-[400px] flex flex-col justify-between rm-reveal relative overflow-hidden ${index === 2 ? 'md:col-span-2 md:min-h-[500px]' : ''}`}>
                 <span className="font-mono text-[14px] text-surface opacity-60 bg-textMain/20 px-4 py-2 rounded-full w-max">PROJ {work.n}</span>
                 <div className="absolute top-12 right-12 w-20 h-20 bg-rmYellow rounded-full flex items-center justify-center text-textMain scale-0 group-hover:scale-100 transition-transform duration-500 ease-out shadow-2xl">
                   <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                 </div>
                 <div className="mt-20">
                   <h3 className="font-syne font-extrabold text-[5vw] lg:text-[4vw] text-surface leading-[0.9]">{work.title}</h3>
                   <p className="font-inter text-surface opacity-80 mt-6 text-[20px] font-medium">{work.sub}</p>
                 </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ORANGE CONTACT */}
      <section id="contact" className="bg-rmOrange py-40 rounded-t-[80px] -mt-16 relative z-30 border-[8px] border-textMain rm-section text-center">
        <h2 className="font-syne font-extrabold text-[12vw] leading-[0.8] text-textMain uppercase rm-reveal rm-parallax" data-speed="0.5">
          LET'S
        </h2>
        <h2 className="font-syne font-extrabold text-[12vw] leading-[0.8] text-surface uppercase rm-reveal flex flex-wrap justify-center items-center gap-4 mt-4 rm-parallax" data-speed="0.8">
          BUILD <span className="bg-textMain text-rmOrange px-[3vw] pt-[3vw] pb-[1vw] rounded-[999px] transform rotate-3 inline-block">THIS</span>
        </h2>
        <div className="mt-24 flex flex-col sm:flex-row justify-center items-center gap-6 rm-reveal">
          <a href="mailto:karanbahtt@gmail.com" className="bg-textMain text-surface font-inter font-bold text-[18px] px-12 py-6 rounded-[999px] magnetic inline-block border-2 border-transparent hover:text-rmOrange transition-colors cursor-none">
            SAY HELLO
          </a>
          <a href="https://github.com/karan-6969" className="bg-surface text-textMain font-inter font-bold text-[18px] px-12 py-6 rounded-[999px] border-4 border-transparent hover:border-textMain magnetic inline-block cursor-none">
            GITHUB
          </a>
        </div>
      </section>
    </div>
  );
}
