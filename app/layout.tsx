import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gob.hadrawi.com"),
  title: {
    default: "Gob — Programming ku hadlaya Af-Soomaali",
    template: "%s | Gob",
  },
  description:
    "Ku Baro programming-ka Af-Soomaali, soo degso Gob CLI ee Windows, oo akhri hagaha luuqadda Gob.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "so_SO",
    siteName: "Gob",
    title: "Gob — Programming ku hadlaya Af-Soomaali",
    description:
      "Baro programming-ka Af-Soomaali, soo degso Gob CLI ee Windows, oo akhri hagaha luuqadda Gob.",
    url: "https://gob.hadrawi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="so">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
