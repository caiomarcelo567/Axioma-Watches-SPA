import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import translations from '../i18n/translations';
import type { Lang, Translations } from '../i18n/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getDefaultLang(): Lang {
  const host = window.location.hostname;
  if (host === 'localhost' || host.startsWith('192.168.') || host.endsWith('.com.br')) return 'pt';
  return 'en';
}

function getSavedLang(): Lang {
  const saved = sessionStorage.getItem('lang');
  if (saved === 'en' || saved === 'pt') return saved;
  return getDefaultLang();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getSavedLang);

  function handleSetLang(l: Lang) {
    sessionStorage.setItem('lang', l);
    setLang(l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
