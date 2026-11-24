import { content } from "@/lib/content";
import { ogSize, renderOg } from "@/lib/og";

export const alt = content.en.meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg("en");
}
