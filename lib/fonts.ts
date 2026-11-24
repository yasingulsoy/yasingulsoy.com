import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

// latin-ext: ğ, ş, ı, İ gibi Türkçe harfler için gerekli
export const sans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

export const mono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const display = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const fontVariables = `${sans.variable} ${mono.variable} ${display.variable}`;
