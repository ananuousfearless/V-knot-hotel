export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent backdrop-blur-md pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[10px] uppercase tracking-[0.2em] font-light text-white/50">
        <p className="font-serif italic text-white text-3xl mb-6 font-light tracking-wide normal-case drop-shadow-md">V KNOT <span className="text-gold-500 font-sans font-light tracking-[0.3em] text-xs uppercase not-italic">PORT</span></p>
        <p className="mb-4">© {currentYear} V KNOT RESIDENCY PORT. All rights reserved.</p>
        <div className="flex justify-center gap-8 mt-8">
          <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
