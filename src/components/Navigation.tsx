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
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', '/');
        }, 100);
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
        <Link to="/" className="hover:scale-110 transition-transform origin-left magnetic cursor-none w-12 h-12 flex items-center justify-center">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="w-full h-full">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <defs> 
                <style>{`.cls-1{fill:#ffee33;}.cls-2{fill:#fdd089;}.cls-3{fill:#a79a86;}.cls-4{fill:#f5ebe0;}.cls-5{fill:#3e3c44;}.cls-6{fill:#f4f0ec;}.cls-7{fill:#ff0000;}.cls-8{fill:none;stroke:#000000;stroke-linejoin:round;stroke-width:2px;}`}</style> 
              </defs> 
              <g data-name="Layer 21" id="Layer_21"> 
                <path className="cls-1" d="M8,26,4,19V18A10,10,0,0,1,14,8H28A10,10,0,0,1,38,18h0l-4,8H8Z"></path> 
                <path className="cls-2" d="M8,26H8a4,4,0,0,0-4,4H4a4,4,0,0,0,4,4H8"></path> 
                <path className="cls-2" d="M34,26a4,4,0,0,1,4,4h0a4,4,0,0,1-4,4h0"></path> 
                <path className="cls-3" d="M30,16H12l-2,2v3L8,23v8A13,13,0,0,0,21,44h0A13,13,0,0,0,34,31V23l-2-2V18Z"></path> 
                <path className="cls-2" d="M10,21,8,23v8A13,13,0,0,0,19.5,43.91,13,13,0,0,0,31,31V23l-2-2V18l-2-2H12l-2,2Z"></path> 
                <circle className="cls-4" cx="16" cy="25" r="2"></circle> 
                <circle className="cls-4" cx="26" cy="25" r="2"></circle> 
                <polygon className="cls-3" points="16 43 16 48 21 51 26 48 26 43 16 43"></polygon> 
                <polygon className="cls-2" points="19.5 50.1 23 48 23 43 16 43 16 48 19.5 50.1"></polygon> 
                <path className="cls-5" d="M26,48h7.17A6.84,6.84,0,0,1,38,50h0a6.84,6.84,0,0,1,2,4.83V62H2V54.83A6.84,6.84,0,0,1,4,50H4a6.84,6.84,0,0,1,4.83-2H16l5,3Z"></path> 
                <path className="cls-1" d="M37,51.83a6.86,6.86,0,0,0-.74-3.09A6.86,6.86,0,0,0,33.17,48H26l-5,3-5-3H8.83A6.83,6.83,0,0,0,2,54.83V62H37Z"></path> 
                <path className="cls-6" d="M56,18A6,6,0,0,0,56,6a6.16,6.16,0,0,0-1.3.14,6,6,0,0,0-11.4,0A6.16,6.16,0,0,0,42,6a6,6,0,0,0,0,12Z"></path> 
                <path className="cls-6" d="M38,50h0a6.84,6.84,0,0,1,2,4.83V62H60a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H52a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h2a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2Z"></path> 
                <path className="cls-7" d="M59,60a2,2,0,0,0-2-2H49a2,2,0,0,1,0-4h2a2,2,0,0,0,0-4H38a6.84,6.84,0,0,1,2,4.83V62H57A2,2,0,0,0,59,60Z"></path> 
                <path className="cls-7" d="M56,9a6.16,6.16,0,0,0-1.3.14,6,6,0,0,0-11.4,0A6.16,6.16,0,0,0,42,9a6,6,0,0,0-5.8,4.5A6,6,0,0,0,42,18H56a6,6,0,0,0,5.8-4.5A6,6,0,0,0,56,9Z"></path> 
                <path className="cls-8" d="M30,16H12l-2,2v3L8,23v8A13,13,0,0,0,21,44h0A13,13,0,0,0,34,31V23l-2-2V18Z"></path> 
                <path className="cls-8" d="M8,26H8a4,4,0,0,0-4,4H4a4,4,0,0,0,4,4H8"></path> 
                <path className="cls-8" d="M18,39h0a3,3,0,0,1,3-3h0a3,3,0,0,1,3,3h0"></path> 
                <circle className="cls-8" cx="16" cy="25" r="2"></circle> 
                <circle className="cls-8" cx="26" cy="25" r="2"></circle> 
                <path className="cls-8" d="M34,26a4,4,0,0,1,4,4h0a4,4,0,0,1-4,4h0"></path> 
                <path className="cls-8" d="M8,26,4,19V18A10,10,0,0,1,14,8H28A10,10,0,0,1,38,18h0l-4,8h0"></path> 
                <polyline className="cls-8" points="16 43 16 48 21 51 26 48 26 43"></polyline> 
                <path className="cls-8" d="M26,48h7.17A6.84,6.84,0,0,1,38,50h0a6.84,6.84,0,0,1,2,4.83V62H2V54.83A6.84,6.84,0,0,1,4,50H4a6.84,6.84,0,0,1,4.83-2H16"></path> 
                <path className="cls-8" d="M38,16.47A6,6,0,0,0,42,18H56A6,6,0,0,0,56,6a6.16,6.16,0,0,0-1.3.14,6,6,0,0,0-11.4,0A6.16,6.16,0,0,0,42,6a6,6,0,0,0-6,6"></path> 
                <line className="cls-8" x1="46" x2="46" y1="23" y2="39"></line> 
                <line className="cls-8" x1="54" x2="54" y1="23" y2="39"></line> 
                <line className="cls-8" x1="50" x2="50" y1="37" y2="27"></line> 
                <line className="cls-8" x1="50" x2="50" y1="21" y2="25"></line> 
                <path className="cls-8" d="M40,62H60a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H52a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h2a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H38"></path> 
              </g> 
            </g>
          </svg>
        </Link>
        <div className="flex gap-2 md:gap-4 font-inter text-[12px] md:text-[16px] font-bold uppercase">
          {isProjectPage ? (
            <Link to="/#work" className="bg-textMain text-surface px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-rmBlue hover:scale-105 transition-all">
              ← Back
            </Link>
          ) : (
            <>
              <button onClick={() => handleScroll('work')} className="bg-surface border-[2px] md:border-4 border-transparent hover:border-textMain px-3 py-1 md:px-6 md:py-2 rounded-full transition-all outline-none">
                Work
              </button>
              <button onClick={() => handleScroll('about')} className="bg-surface border-[2px] md:border-4 border-transparent hover:border-textMain px-3 py-1 md:px-6 md:py-2 rounded-full transition-all outline-none">
                About
              </button>
              <button onClick={() => handleScroll('contact')} className="bg-textMain text-surface px-3 py-1 md:px-6 md:py-2 rounded-full hover:bg-rmOrange transition-colors outline-none cursor-none">
                Contact
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
