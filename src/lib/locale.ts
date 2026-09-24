import { create } from "zustand";

export type Locale = "en" | "zh";

export type Tx = { en: string; zh: string };

export const useLocale = create<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),
}));

export function tx(locale: Locale, value: Tx | string): string {
  if (typeof value === "string") return value;
  return value[locale];
}
