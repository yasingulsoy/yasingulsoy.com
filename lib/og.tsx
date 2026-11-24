import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { content } from "./content";
import type { Locale } from "./site";

export const ogSize = { width: 1200, height: 630 };

// Paylaşım görseli (LinkedIn, WhatsApp, X). Derleme sırasında bir kez üretilir.
export async function renderOg(locale: Locale) {
  const c = content[locale];
  const photo = await readFile(join(process.cwd(), "public/yasin-gulsoy.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const areas = c.focus.items.slice(0, 4).map((f) => f.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0f2236",
          backgroundImage:
            "linear-gradient(rgba(141,185,230,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(141,185,230,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#8db9e6" }}>
            <div style={{ width: 44, height: 2, background: "#8db9e6" }} />
            yasingulsoy.com
          </div>
          <div style={{ fontSize: 104, lineHeight: 1, marginTop: 34, letterSpacing: -2 }}>Yasin Gülsoy</div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#dbe7f4" }}>{c.hero.role}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
            {areas.map((a) => (
              <div
                key={a}
                style={{
                  display: "flex",
                  fontSize: 24,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(141,185,230,0.45)",
                  color: "#cfe0f2",
                }}
              >
                {a}
              </div>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: 999, border: "6px solid #8db9e6", objectFit: "cover" }}
        />
      </div>
    ),
    ogSize,
  );
}
