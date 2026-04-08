export default function Footer() {
  return (
    <footer className="border-t border-borderLine pt-8 pb-6 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-textMuted text-sm">
        <p>© 2025 Karan Bhatt</p>
        <p className="mt-4 md:mt-0">Designed & built by KB</p>
      </div>
      <p className="text-center mt-6 text-[11px] text-textMuted italic">
        No AIs were harmed in the making of this portfolio.
      </p>
    </footer>
  );
}
