import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = {
  title: "Tirtir akoonka",
  description: "Codso tirtiridda akoonkaaga Gob.",
};

export default function AccountDeletionPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="kicker">Akoonkaaga</span>
        <h1>Codso tirtiridda akoonka Gob.</h1>
        <p className="lead">
          Waxaad xaq u leedahay inaad tirtirto akoonkaaga iyo xogta ku xiran.
          Habka tooska ah ee codsiga waxaa lagu dari doonaa ka hor public
          release-ka.
        </p>

        <h2>Waxa la tirtirayo</h2>
        <ul>
          <li>Profile-kaaga iyo macluumaadka akoonka</li>
          <li>Progress-ka casharrada, mawduucyada, iyo koorsooyinka</li>
          <li>Sawirka profile-ka aad soo gelisay</li>
        </ul>

        <h2>Waxa aad samayn karto hadda</h2>
        <p>
          Kala xiriir caawimaadda email-ka akoonkaaga ku xiran. Ku qor cinwaanka
          fariinta <code>Codsi tirtirid akoon Gob</code>. Email-ka rasmiga ah ee
          caawimaadda waa in lagu daraa boggan ka hor app-ka inta aan la
          daabicin.
        </p>
      </main>
      <Footer />
    </>
  );
}
