# yasingulsoy.com

Yasin Gülsoy'un kişisel sitesi. Türkçe `/`, İngilizce `/en` adresinde.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production derlemesi
```

## Yapı

| Yol | Ne var |
| --- | --- |
| `lib/content.ts` | Sitedeki bütün metinler, Türkçe ve İngilizce. İçerik değişikliği buradan yapılır. |
| `lib/site.ts` | Alan adı, e-posta ve profil bağlantıları |
| `components/` | Sayfa bölümleri: başlık, giriş, terfi grafiği, deneyim, projeler, iletişim |
| `app/(tr)`, `app/(en)/en` | İki dil için ayrı kök layout'lar (`<html lang>` doğru olsun diye) |
| `app/global-not-found.tsx` | Eşleşmeyen adresler için 404 sayfası |
| `lib/og.tsx` | LinkedIn, WhatsApp ve X önizlemelerinde görünen paylaşım görseli |

Metinler CV'den alındı (`Projects/cv/cv.html` ve `cv-en.html`). CV değişince `lib/content.ts` de güncellenmeli.

## Teknolojiler

Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS 4, TypeScript. Yazı tipleri: Geist, Geist Mono, Instrument Serif.

Açık ve koyu tema var. İlk açılışta sistem tercihi kullanılıyor, seçim tarayıcıda saklanıyor.
