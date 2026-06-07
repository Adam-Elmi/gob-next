import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";
import { Guide } from "./guide";

export const metadata: Metadata = {
  title: "Hage",
  description: "Gob ka baro eber: lasoo deg CLI-ga oo qor barnaamijkaaga koowaad.",
};

export default function DocsPage() {
  return (
    <>
      <Header />
      <Guide />
      <Footer />
    </>
  );
}
