import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navigation() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects');

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const handleScroll = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-b-[8px] border-textMain z-50 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 h-[100px] flex items-center justify-between">
        <Link to="/" className="font-syne font-extrabold text-[40px] tracking-tighter hover:text-rmBlue transition-colors uppercase">K_B</Link>
        <div className="hidden md:flex gap-4 font-inter text-[16px] font-bold uppercase">
          {isProjectPage ? (
            <Link to="/#work" className="bg-textMain text-surface px-6 py-3 rounded-full hover:bg-rmBlue hover:scale-105 transition-all">
              ← Back
            </Link>
          ) : (
            <>
              <button onClick={() => handleScroll('work')} className="bg-surface border-4 border-transparent hover:border-textMain px-6 py-2 rounded-full transition-all outline-none">
                Work
              </button>
              <button onClick={() => handleScroll('about')} className="bg-surface border-4 border-transparent hover:border-textMain px-6 py-2 rounded-full transition-all outline-none">
                About
              </button>
              <button onClick={() => handleScroll('contact')} className="bg-textMain text-surface px-6 py-2 rounded-full hover:bg-rmOrange transition-colors outline-none cursor-none">
                Contact
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
