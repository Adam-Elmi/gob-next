import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gob — Programming ku hadlaya Af-Soomaali",
    template: "%s | Gob",
  },
  description:
    "Baro programming-ka Af-Soomaali, soo degso Gob CLI ee Windows, oo akhri hagaha luuqadda Gob.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="so">
      <body>{children}</body>
    </html>
  );
}
