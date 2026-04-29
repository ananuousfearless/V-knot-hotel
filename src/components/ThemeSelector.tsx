import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings2, Check } from 'lucide-react';
import { THEMES, Theme } from '../lib/themes';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onChange: (theme: Theme) => void;
}

export function ThemeSelector({ currentTheme, onChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originY: 1, originX: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-3 min-w-[200px]"
          >
            <div className="text-[10px] uppercase tracking-widest text-white/50 px-2 pb-2 border-b border-white/10 mb-2">
              Select Theme
            </div>
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onChange(theme);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs uppercase tracking-widest transition-all ${
                  currentTheme.id === theme.id ? 'bg-gold-500 text-black font-bold' : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: theme.preview }}
                  />
                  {theme.name}
                </div>
                {currentTheme.id === theme.id && <Check size={14} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full shadow-lg hover:bg-white/10 transition-all flex items-center justify-center group"
        aria-label="Theme Settings"
      >
        <Settings2 size={24} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>
    </div>
  );
}
