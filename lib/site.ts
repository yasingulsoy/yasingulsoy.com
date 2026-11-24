export const site = {
  url: "https://yasingulsoy.com",
  name: "Yasin Gülsoy",
  email: "yasingulsoy02@gmail.com",
  linkedin: "https://www.linkedin.com/in/yasingulsoy",
  github: "https://github.com/yasingulsoy",
  source: "https://github.com/yasingulsoy/yasingulsoy.com",
} as const;

export type Locale = "tr" | "en";

export const localePath: Record<Locale, string> = { tr: "/", en: "/en" };
