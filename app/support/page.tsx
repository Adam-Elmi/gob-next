import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "Caawimaad",
  description: "Hel caawimaad ku saabsan Gob.",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="kicker">Caawimaad</span>
        <h1>Waxaan rabnaa in Gob kuu shaqeeyo.</h1>
        <p className="lead">
          Haddii aad la kulantay cilad, su&apos;aal kaa qabto app-ka, ama aad
          hayso fikrad horumarineed, nala soo xiriir.
        </p>

        <h2>Cilad ka warbixi</h2>
        <p>
          Ku dar nooca qalabkaaga, tallaabooyinka keenay ciladda, iyo sawir
          haddii ay suurtagal tahay. Waxaad issue ka furi kartaa{" "}
          <a
            className="text-link"
            href="https://github.com/Luqadda-Gob/gob/issues"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>

        <h2>Arrin ku saabsan akoonka</h2>
        <p>
          Haddii aadan geli karin akoonkaaga ama aad u baahan tahay caawimo ku
          saabsan xogtaada, isticmaal email-ka caawimaadda ee lagu daabici doono
          boggan ka hor public release-ka.
        </p>

        <h2>Jawaabta laga filan karo</h2>
        <p>
          Gob hadda waa mashruuc madax-bannaan. Waxaan isku daynaa inaan ka
          jawaabno codsiyada caawimaadda muddo toddoba maalmood gudahood.
        </p>
      </main>
      <Footer />
    </>
  );
}
