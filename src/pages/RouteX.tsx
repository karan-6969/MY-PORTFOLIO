import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RouteX() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="w-full bg-[#0D0D0D] text-background min-h-screen pt-[72px] flex flex-col font-inter">
      {/* HERO BLOCK */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative overflow-hidden flex-1">
        <span className="absolute top-10 right-10 text-[120px] md:text-[240px] font-syne font-extrabold text-[#1A1A1A] z-0 select-none leading-none">03</span>
        
        <div className="relative z-10 w-full md:w-[70%]">
          <h1 className="font-syne font-bold text-[48px] md:text-[72px] leading-tight mb-6">Route-X</h1>
          <p className="text-[18px] md:text-[22px] italic text-[#6B6B6B] mb-12">"Because the fastest path isn't always obvious."</p>
          
          <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px] text-[#888] items-center uppercase tracking-widest font-medium">
            <span>Type: Networking Tool</span>
            <span className="opacity-50">·</span>
            <span>Stack: TypeScript · Node.js</span>
            <span className="opacity-50">·</span>
            <a href="https://github.com/karan-6969/Route-X" target="_blank" rel="noopener noreferrer" className="text-background border-b border-background hover:text-accent hover:border-accent transition-colors pb-1">GitHub</a>
          </div>
        </div>
      </section>

      {/* THE IDEA */}
      <section className="bg-background text-textMain py-32 border-t border-borderLine mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-mono text-textMuted tracking-widest">THE IDEA</span>
            <div className="h-[1px] w-12 bg-borderLine"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
            <h2 className="lg:w-[55%] font-syne font-bold text-[32px] md:text-[36px] leading-[1.2] tracking-tight bg-surface p-10 md:p-14 border border-borderLine">
              "A network routing utility for analyzing and optimizing packet paths with a clean developer interface."
            </h2>
            <div className="lg:w-[45%] flex flex-col space-y-6 text-[16px] text-textMuted leading-relaxed pt-2">
              <p>Route-X bridges low-level networking concepts with a modern, developer-friendly interface. It's built for understanding how packets travel, analyzing routes, and visualizing network topology — without needing to drop into raw sockets every time.</p>
              <p>No arcane flags. Just useful output.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background text-textMain pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-mono text-textMuted tracking-widest">FEATURES</span>
            <div className="h-[1px] w-12 bg-borderLine"></div>
          </div>

          <div className="w-full bg-[#1A1A1A] p-12 mb-12 flex justify-center items-center text-background font-mono text-[14px]">
            <svg width="100%" height="80" viewBox="0 0 800 80" className="opacity-80">
              <line x1="100" y1="40" x2="300" y2="40" stroke="#FF3B00" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="300" y1="40" x2="500" y2="40" stroke="#FF3B00" strokeWidth="2" />
              <line x1="500" y1="40" x2="700" y2="40" stroke="#FF3B00" strokeWidth="2" strokeDasharray="5,5" />
              
              <circle cx="100" cy="40" r="10" fill="#FFFFFF" />
              <text x="100" y="70" fill="#6B6B6B" fontSize="12" textAnchor="middle">Source</text>
              
              <circle cx="300" cy="40" r="10" fill="#1A1A1A" stroke="#FFFFFF" strokeWidth="2" />
              <text x="300" y="70" fill="#6B6B6B" fontSize="12" textAnchor="middle">Router 1</text>
              <text x="200" y="30" fill="#888" fontSize="10" textAnchor="middle">12ms</text>
              
              <circle cx="500" cy="40" r="10" fill="#1A1A1A" stroke="#FFFFFF" strokeWidth="2" />
              <text x="500" y="70" fill="#6B6B6B" fontSize="12" textAnchor="middle">Router 2</text>
              <text x="400" y="30" fill="#888" fontSize="10" textAnchor="middle">4ms (optim)</text>
              
              <circle cx="700" cy="40" r="10" fill="#FFFFFF" />
              <text x="700" y="70" fill="#6B6B6B" fontSize="12" textAnchor="middle">Destination</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-borderLine p-8 hover:border-[#0D0D0D] transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4">Route Analysis</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Trace packet paths across network hops. Identify bottlenecks and latency spikes proactively.</p>
            </div>
            <div className="bg-surface border border-borderLine p-8 hover:border-[#0D0D0D] transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4">Path Optimization</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Compare multiple routes. Surface the most efficient path based on configurable criteria.</p>
            </div>
            <div className="bg-surface border border-borderLine p-8 hover:border-[#0D0D0D] transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4">Developer Interface</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Clean CLI/API interface. Built to be integrated directly into other monitoring tools or systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH DEEP DIVE */}
      <section className="bg-surface text-textMain py-32 border-t border-borderLine">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-mono text-textMuted tracking-widest">TECH DETAILS</span>
              <div className="h-[1px] w-12 bg-borderLine"></div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 text-[#E8E8E8] font-mono text-[13px] overflow-x-auto whitespace-pre">
{`// Analyze route to host
const result = await routex.trace({
  target: "8.8.8.8",
  maxHops: 30,
  timeout: 3000
});

console.log(result.hops);
// [{ ip, latency, hostname }]`}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <ul className="space-y-6 text-[16px] text-textMuted font-inter list-none">
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>TypeScript — strongly-typed throughout and intuitive APIs</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Node.js — solid runtime performance with native networking modules</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Net/Dgram — raw socket access, avoiding heavy abstractions</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Custom algorithms — Dijkstra/A* mapping over complex topologies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-textMain text-background py-32 text-center">
        <h2 className="font-syne font-bold text-[32px] md:text-[48px] mb-12">Trace the code.</h2>
        <a href="https://github.com/karan-6969/Route-X" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-background text-background px-12 py-5 font-inter font-medium hover:bg-background hover:text-textMain transition-colors mb-20">
          VIEW ON GITHUB →
        </a>
        <div className="flex justify-center gap-12 font-mono text-[13px] uppercase tracking-widest text-[#888]">
           <Link to="/projects/gitpeek" className="hover:text-background transition-colors">← Prev Project</Link>
           <Link to="/projects/dpi" className="hover:text-background transition-colors">Next Project →</Link>
        </div>
      </section>
    </div>
  );
}
