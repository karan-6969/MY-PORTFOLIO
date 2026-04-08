import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GitPeek() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="w-full bg-background text-textMain min-h-screen pt-[72px] flex flex-col font-inter">
      {/* HERO BLOCK */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative overflow-hidden flex-1">
        <span className="absolute top-10 right-10 text-[120px] md:text-[240px] font-syne font-extrabold text-[#E0DDD8] z-0 select-none leading-none opacity-50">02</span>
        
        <div className="relative z-10 w-full md:w-[70%] text-textMain">
          <h1 className="font-syne font-bold text-[48px] md:text-[72px] leading-tight mb-6">GitPeek</h1>
          <p className="text-[18px] md:text-[22px] italic text-textMuted mb-12">"Stalk GitHub profiles. Professionally."</p>
          
          <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px] text-textMuted items-center uppercase tracking-widest font-medium">
            <span>Type: Dev Tool</span>
            <span>·</span>
            <span>Stack: TypeScript · Next.js · GitHub API</span>
            <span>·</span>
            <a href="https://github.com/karan-6969/G-Peek" target="_blank" rel="noopener noreferrer" className="border-b border-textMain text-textMain hover:text-accent hover:border-accent transition-colors pb-1">GitHub</a>
          </div>
        </div>
      </section>

      {/* THE IDEA */}
      <section className="bg-surface py-32 border-t border-borderLine mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-mono text-textMuted tracking-widest">THE IDEA</span>
            <div className="h-[1px] w-12 bg-borderLine"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
            <h2 className="lg:w-[55%] font-syne font-bold text-[32px] md:text-[36px] leading-[1.2] tracking-tight text-textMain bg-background p-10 md:p-14 border border-borderLine">
              "Type any GitHub username. Get a complete developer dossier — languages, repos, streaks, contributions."
            </h2>
            <div className="lg:w-[45%] flex flex-col space-y-6 text-[16px] text-textMuted leading-relaxed pt-2">
              <p>GitPeek is a GitHub profile analyzer that surfaces the data GitHub buries. Commit patterns, most-used languages, top repositories, contribution activity — all in one clean view.</p>
              <p>Built for developers who love data about other developers (and themselves). Instead of endless scrolling, everything is visualized beautifully for quick reading.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background py-32 border-t border-borderLine border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-mono text-textMuted tracking-widest">FEATURES</span>
            <div className="h-[1px] w-12 bg-borderLine"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-borderLine p-8 hover:border-[#0D0D0D] transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4 text-textMain">Profile Overview</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Avatar, bio, follower count, location, account age. The basics, beautifully presented with zero clutter.</p>
            </div>
            <div className="bg-surface border border-borderLine p-8 hover:border-[#0D0D0D] transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4 text-textMain">Language Breakdown</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Visual breakdown of all repos by language. See what a dev actually codes in, vs what their README claims.</p>
            </div>
            <div className="bg-surface border border-borderLine p-8 hover:border-[#0D0D0D] transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4 text-textMain">Activity Analysis</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Contribution graph data, commit frequency, most active days/times. Know exactly when they're grinding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH DEEP DIVE */}
      <section className="bg-surface py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-mono text-textMuted tracking-widest">TECH DETAILS</span>
              <div className="h-[1px] w-12 bg-borderLine"></div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 text-[#E8E8E8] font-mono text-[13px] overflow-x-auto whitespace-pre">
{`// Example API fetching format
const data = await fetch(
  \`https://api.github.com/users/\${username}\`
);
// Fetch and aggregate:
// -> repos (stars, forks)
// -> events (commits, PRs)
// -> gists, starred...`}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <ul className="space-y-6 text-[16px] text-textMuted font-inter list-none">
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Next.js — routing + SSR for fast, SEO-friendly pages</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>TypeScript — full type safety from API to UI</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>GitHub REST API — deep integration and rate-limit handling</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Recharts / Chart.js — bespoke data visualization</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Tailwind CSS — rapid prototyping and atomic styling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0D0D] text-background py-32 text-center">
        <h2 className="font-syne font-bold text-[32px] md:text-[48px] mb-12">Ready to peak?</h2>
        <a href="https://github.com/karan-6969/G-Peek" target="_blank" rel="noopener noreferrer" className="inline-block bg-background text-[#0D0D0D] px-12 py-5 font-inter font-medium hover:bg-accent hover:text-background transition-colors mb-20">
          VIEW ON GITHUB →
        </a>
        <div className="flex justify-center gap-12 font-mono text-[13px] uppercase tracking-widest text-[#888]">
           <Link to="/projects/dpi" className="hover:text-background transition-colors">← Prev Project</Link>
           <Link to="/projects/routex" className="hover:text-background transition-colors">Next Project →</Link>
        </div>
      </section>
    </div>
  );
}
