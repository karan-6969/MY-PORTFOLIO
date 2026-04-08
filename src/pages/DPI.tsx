import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DPI() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="w-full bg-[#0D0D0D] text-background min-h-screen pt-[72px] flex flex-col font-inter">
      {/* HERO BLOCK */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative overflow-hidden flex-1">
        <span className="absolute top-10 right-10 text-[120px] md:text-[240px] font-syne font-extrabold text-[#1A1A1A] z-0 select-none leading-none">01</span>
        
        <div className="relative z-10 w-full md:w-[70%]">
          <h1 className="font-syne font-bold text-[48px] md:text-[72px] leading-tight mb-6">Deep Packet Inspection Engine</h1>
          <p className="text-[18px] md:text-[22px] italic text-[#6B6B6B] mb-12">"Reading inside encrypted traffic — legally."</p>
          
          <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px] text-[#888] items-center uppercase tracking-widest font-medium">
            <span>Type: Systems / Security</span>
            <span className="opacity-50">·</span>
            <span>Stack: C++ · Python · CMake</span>
            <span className="opacity-50">·</span>
            <span>Arch: Multi-threaded</span>
            <span className="opacity-50">·</span>
            <a href="https://github.com/karan-6969/Deep-Packet-Inspection" target="_blank" rel="noopener noreferrer" className="text-background border-b border-background hover:text-accent hover:border-accent transition-colors pb-1">GitHub</a>
          </div>
        </div>
      </section>

      {/* THE IDEA */}
      <section className="bg-background text-textMain py-32 border-t border-borderLine mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-mono text-textMuted tracking-widest">WHAT IS IT</span>
            <div className="h-[1px] w-12 bg-borderLine"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
            <h2 className="lg:w-[55%] font-syne font-bold text-[32px] md:text-[36px] leading-[1.2] tracking-tight bg-surface p-10 md:p-14 border border-borderLine">
              "A multi-threaded network engine that classifies live traffic — YouTube, Netflix, Facebook — in real time, by inspecting TLS handshakes."
            </h2>
            <div className="lg:w-[45%] flex flex-col space-y-6 text-[16px] text-textMuted leading-relaxed pt-2">
              <p>DPI (Deep Packet Inspection) examines the contents of network packets beyond just headers. Even though HTTPS is encrypted, the TLS Client Hello packet reveals the destination domain in plaintext — the SNI (Server Name Indication) field. This engine exploits that.</p>
              <p>Built for learning and demonstration purposes, it reads .pcap capture files, classifies traffic by application type, applies blocking rules, and writes filtered output — all with a multi-threaded architecture for high throughput.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background text-textMain pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-mono text-textMuted tracking-widest">ARCHITECTURE</span>
            <div className="h-[1px] w-12 bg-borderLine"></div>
          </div>

          <div className="w-full bg-[#1A1A1A] p-8 md:p-16 mb-12 flex flex-col md:flex-row flex-wrap justify-between items-center text-background font-mono text-[12px] md:text-[14px] gap-4 tracking-tight border border-[#333]">
            <span>[PCAP File]</span><span className="text-accent">→</span>
            <span>[Reader Thread]</span><span className="text-accent">→</span>
            <span>[Load Balancer ×2]</span><span className="text-accent">→</span>
            <span>[Fast Path Workers ×4]</span><span className="text-accent">→</span>
            <span>[Output Queue]</span><span className="text-accent">→</span>
            <span>[Writer Thread]</span><span className="text-accent">→</span>
            <span>[Output PCAP]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-borderLine p-8 hover:border-textMain transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4">SNI Extraction</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Reads TLS Client Hello at byte level. Finds extension type 0x0000. Extracts hostname — e.g. 'www.youtube.com' — before encryption begins.</p>
            </div>
            <div className="bg-surface border border-borderLine p-8 hover:border-textMain transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4">Flow Tracking</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Every connection is a 5-tuple: src IP, dst IP, src port, dst port, protocol. All packets sharing the same 5-tuple are one flow. Block one, block all.</p>
            </div>
            <div className="bg-surface border border-borderLine p-8 hover:border-textMain transition-colors">
              <h3 className="font-syne font-bold text-[20px] mb-4">Multi-threaded Pipeline</h3>
              <p className="text-[14px] text-textMuted leading-relaxed">Reader → Load Balancers → Fast Path workers. Consistent hashing ensures all packets of same flow go to same thread. No race conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH DEEP DIVE */}
      <section className="bg-surface text-textMain py-32 border-t border-borderLine">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-mono text-textMuted tracking-widest">UNDER THE HOOD</span>
              <div className="h-[1px] w-12 bg-borderLine"></div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8 text-[#E8E8E8] font-mono text-[13px] overflow-x-auto whitespace-pre">
{`// TLS Client Hello SNI extraction
if (payload[0] == 0x16 &&    // Handshake
    payload[5] == 0x01) {    // Client Hello
  
  skip → SessionID, CipherSuites
  
  for each extension:
    if (ext_type == 0x0000) {  // SNI
      return hostname_string;
    }
}`}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <ul className="space-y-6 text-[16px] text-textMuted font-inter list-none">
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Reads PCAP files (Wireshark captures) at packet-level</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Identifies: YouTube, Facebook, Google, Netflix, TikTok, etc.</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Block by: IP · App Type · Domain substring</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>Two versions: single-threaded (learning) + multi-threaded</li>
              <li className="flex gap-4 items-start"><span className="text-accent mt-1">•</span>No external libraries — pure C++17 + POSIX raw processing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-background py-16 border-t border-borderLine overflow-visible relative">
        <div className="max-w-7xl mx-auto px-6 whitespace-nowrap overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex gap-4 font-mono text-[13px] text-textMuted w-max">
            {['C++', 'Multi-threading', 'Network Protocols', 'TLS/SSL', 'Packet Parsing', 'PCAP', 'Systems Design', 'Python'].map(s => (
              <span key={s} className="border border-borderLine px-6 py-3 hover:bg-textMain hover:text-background transition-colors">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-textMain text-background py-32 text-center">
        <h2 className="font-syne font-bold text-[32px] md:text-[48px] mb-12">Dive into the source code.</h2>
        <a href="https://github.com/karan-6969/Deep-Packet-Inspection" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-background text-background px-12 py-5 font-inter font-medium hover:bg-background hover:text-textMain transition-colors mb-20">
          VIEW ON GITHUB →
        </a>
        <div className="flex justify-center gap-12 font-mono text-[13px] uppercase tracking-widest text-[#888]">
           <Link to="/projects/routex" className="hover:text-background transition-colors">← Prev Project</Link>
           <Link to="/projects/gitpeek" className="hover:text-background transition-colors">Next Project →</Link>
        </div>
      </section>
    </div>
  );
}
