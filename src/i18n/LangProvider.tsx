import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dict, getDict, type Dict, type Lang } from "./dict";


type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("xoyam.lang");
    if (saved === "fr" || saved === "en") setLangState(saved);
    else if (navigator.language?.toLowerCase().startsWith("en")) setLangState("en");
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        if (typeof window !== "undefined") window.localStorage.setItem("xoyam.lang", l);
      },
      t: getDict(lang),

    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
