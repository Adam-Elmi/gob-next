import type { Metadata } from "next";
import { Download, Monitor, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "Lasoo Degis",
  description: "Soo degso Gob CLI ee Windows, macOS, ama Linux.",
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
        <span className="kicker">Gob CLI</span>
        <h1>Gob kulasoo Deg Kombiyuutarkaaga</h1>
        <p className="lead">
          Windows release-ka koowaad waa diyaar. Linux weli waa la diyaarinayaa,
          waxaana lagu dari doonaa GitHub Releases marka uu diyaar noqdo.
        </p>

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
          href="https://github.com/yaseressa/gob/releases"
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
