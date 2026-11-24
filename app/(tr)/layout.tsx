import "../globals.css";
import Script from "next/script";
import { Document, themeScript } from "@/components/document";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("tr");

export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  const theme = (
    <Script id="theme-init" strategy="beforeInteractive">
      {themeScript}
    </Script>
  );
  return (
    <Document locale="tr" head={theme}>
      {children}
    </Document>
  );
}