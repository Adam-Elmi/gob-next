import type { Metadata } from "next";
import {
  BookOpen,
  Download,
  GraduationCap,
  Monitor,
  Smartphone,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Footer, Header } from "../site-chrome";

const androidDownloadUrl =
  "https://github.com/Luqadda-Gob/gob/releases/download/FL_1.0.0/gob-mobile.apk";

export const metadata: Metadata = {
  title: "Lasoo Degis",
  description: "Hel Gob Mobile ama lasoo deg Gob CLI ee Windows.",
};

const platforms = [
  {
    name: "Windows",
    detail: "Gob CLI v0.0.1 ee Windows 10 iyo wixii ka dambeeya.",
    icon: Monitor,
    downloadUrl: "https://github.com/yaseressa/gob/releases/download/0.0.1/gob-win64.zip",
    checksum: "70400f24b6dcfdd8cc76f14facdcbab5d36b38d96c40979e6fd250be0261c66d",
  },
  {
    name: "Linux",
    detail: "Gob CLI binary ee Linux x64.",
    icon: Terminal,
  },
];

export default function DownloadsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="kicker">Gob Mobile iyo Gob CLI</span>
        <h1>Laba hab oo aad Gob ku bilaabi karto.</h1>
        <p className="lead">
          App-ka Gob wuxuu ku barayaa programming-ka Af-Soomaali. Gob CLI-na
          wuxuu kuu oggolaanayaa inaad barnaamijyadaada ku qorto
          kombiyuutarkaaga.
        </p>

        <section className="mobile-download-promo">
          <div className="mobile-download-copy">
            <span className="product-label">
              <Smartphone size={17} /> Gob Mobile
            </span>
            <h2>Programming-ka gacantaada ku baro.</h2>
            <p>
              Casharro nidaamsan, tijaabooyin, la socodka horumarkaaga, iyo
              Goobta Tijaabinta oo aad code-ka Gob ku tijaabiso.
            </p>
            <div className="mobile-download-actions">
              <a
                className="download-action"
                href={androidDownloadUrl}
                rel="noreferrer"
              >
                <Download size={15} /> Android lasoo deg
              </a>
              <Link className="text-link" href="/#mobile">
                Wax badan ka ogow <BookOpen size={16} />
              </Link>
            </div>
          </div>
          <div className="mobile-download-mark">
            <GraduationCap size={46} />
            <strong>Baro afkaaga.</strong>
            <span>Ku dhis Gob.</span>
          </div>
        </section>

        <section className="cli-download-section">
          <span className="product-label">
            <Terminal size={17} /> Gob CLI
          </span>
          <h2>Gob kulasoo deg kombiyuutarkaaga.</h2>
          <p>
            Windows release-ka koowaad waa diyaar. Linux weli waa la
            diyaarinayaa, waxaana lagu dari doonaa GitHub Releases marka uu
            diyaar noqdo.
          </p>
        </section>

        <div className="download-list">
          {platforms.map(({ name, detail, icon: Icon, downloadUrl, checksum }) => (
            <article className="download-item" key={name}>
              <Icon size={27} />
              <div>
                <h2>{name}</h2>
                <p>{detail}</p>
                {checksum && (
                  <p className="checksum">
                    SHA-256 <code>{checksum}</code>
                  </p>
                )}
              </div>
              {downloadUrl ? (
                <a
                  className="download-action"
                  href={downloadUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Download size={15} /> Lasoo Degis
                </a>
              ) : (
                <span className="status-pill">Soo socda</span>
              )}
            </article>
          ))}
        </div>

        <h2>Source-ka ka dhis</h2>
        <p>
          Inta release binaries-ka la diyaarinayo, waxaad la socon kartaa
          horumarka Gob ama source-ka ka dhisi kartaa GitHub.
        </p>
        <a
          className="button button-dark"
          href="https://github.com/Luqadda-Gob/gob/releases"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={18} /> Fur GitHub
        </a>
      </main>
      <Footer />
    </>
  );
}
