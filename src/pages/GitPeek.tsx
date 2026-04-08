import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GitPeek() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="w-full bg-background text-textMain min-h-screen pt-[100px] flex flex-col font-inter selection:bg-[#FF3B00] selection:text-surface">
      <section className="w-full max-w-[1400px] mx-auto px-6 py-24 relative overflow-hidden flex-1">
        <span className="absolute top-10 right-10 text-[20vw] font-syne font-extrabold text-[#FF3B00] opacity-10 z-0 select-none leading-none rotate-3">02</span>
        
        <div className="relative z-10 w-full lg:w-[80%] mt-12">
          <h1 className="font-syne font-extrabold text-[8vw] md:text-[6vw] leading-[0.8] mb-12 uppercase tracking-tighter">Git<span className="bg-[#FF3B00] text-surface px-[2vw] pt-[1vw] pb-[0.5vw] rounded-[999px] inline-block rotate-2 transform">Peek</span></h1>
          <p className="text-[20px] md:text-[28px] font-medium text-textMain mb-16 max-w-2xl">Visualizing Developer Profiles in seconds.</p>
          
          <div className="flex flex-wrap gap-4 text-[14px] md:text-[16px] items-center uppercase tracking-widest font-bold">
            <span className="bg-[#FF3B00] text-surface px-6 py-3 rounded-full">Frontend / Web</span>
            <span className="bg-textMain text-surface px-6 py-3 rounded-full">Next.js · TS</span>
            <a href="https://github.com/karan-6969/GitPeek" target="_blank" rel="noopener noreferrer" className="border-4 border-textMain px-6 py-2 rounded-full hover:bg-textMain hover:text-surface transition-all magnetic cursor-none">GitHub</a>
          </div>
        </div>
      </section>

      <section className="bg-[#FF3B00] text-surface py-32 rounded-t-[80px] -mt-10 relative z-20 border-[8px] border-textMain border-b-0">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-20">
            <span className="text-[14px] font-mono tracking-widest bg-textMain text-surface px-6 py-2 rounded-full font-bold">WHAT IS IT</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <h2 className="lg:w-[55%] font-syne font-extrabold text-[36px] md:text-[4vw] leading-[0.9] tracking-tight bg-surface text-textMain p-12 md:p-16 rounded-[48px] border-[8px] border-textMain shadow-[16px_16px_0px_#1A1A1A]">
              "GitPeek transforms bland JSON GitHub data into a gorgeous, readable dashboard."
            </h2>
            <div className="lg:w-[45%] flex flex-col space-y-8 text-[20px] font-medium leading-relaxed pt-2">
              <p>Developers are more than their raw commit counts. GitPeek pulls directly from the GitHub API and renders repos, languages, and stars in beautiful interactive charts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-textMain text-surface py-40 border-8 border-textMain text-center relative z-40 rounded-t-[80px] -mt-10">
        <h2 className="font-syne font-extrabold text-[10vw] uppercase leading-[0.8] mb-16 text-[#FF3B00]">Go<br/>Peek</h2>
        <a href="https://github.com/karan-6969/GitPeek" target="_blank" rel="noopener noreferrer" className="inline-block bg-surface border-4 border-transparent hover:border-[#FF3B00] text-textMain px-12 py-5 font-inter font-bold text-[20px] rounded-[999px] magnetic cursor-none transition-all">
          VIEW ON GITHUB
        </a>
        <div className="flex justify-center gap-12 font-inter text-[16px] font-bold mt-24">
           <Link to="/projects/dpi" className="hover:text-[#0055FF] transition-colors underline decoration-2">← PREV PROJECT</Link>
           <Link to="/projects/routex" className="hover:text-[#FFC200] transition-colors underline decoration-2">NEXT PROJECT →</Link>
        </div>
      </section>
    </div>
  );
}
