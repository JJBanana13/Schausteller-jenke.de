<template>
  <div class="privacy-container">
    <div class="privacy-box">
      <h1>Datenschutzerklärung</h1>
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. In dieser Datenschutzerklärung informieren wir Sie darüber, wie wir Ihre Daten auf der Website <strong>schwerlastlogistik.eu</strong> verarbeiten.
      </p>

      <h2>1) Verantwortlicher</h2>
      <p>
        Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:
      </p>
      <p>
        <strong>Simon Jenke</strong><br />
        Beethovenstrasse 13<br />
        79787 Lauchringen
      </p>
      <p>
        E-Mail: <a href="mailto:contact@jjbanana13.wtf">contact@jjbanana13.wtf</a><br />
        Website: <a href="https://schausteller-jenke.de" target="_blank">schausteller-jenke.de</a>
      </p>

      <h2>2) Erfassung personenbezogener Daten</h2>
      <p>
        Wir erfassen personenbezogene Daten nur, wenn Sie uns diese freiwillig übermitteln, z.B. durch Eingabe in ein Kontaktformular oder durch die Nutzung unserer Website. Zu den erfassten Daten können gehören:
      </p>
      <ul>
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>IP-Adresse</li>
        <li>Nutzungsdaten (z. B. besuchte Seiten, Klickverhalten)</li>
      </ul>

      <h2>3) Verwendungszwecke</h2>
      <p>Wir verwenden Ihre Daten ausschließlich für folgende Zwecke:</p>
      <ul>
        <li>Bereitstellung und Verbesserung unserer Website</li>
        <li>Bearbeitung von Kontaktanfragen</li>
        <li>Einhaltung gesetzlicher Bestimmungen</li>
      </ul>

      <h2>4) Rechtsgrundlage für die Verarbeitung</h2>
      <p>
        Die Datenverarbeitung erfolgt nach den Vorschriften der Datenschutz-Grundverordnung (DSGVO). Rechtsgrundlagen sind insbesondere:
      </p>
      <ul>
        <li>
          <strong>Einwilligung:</strong> Sie haben uns Ihre ausdrückliche Zustimmung gegeben (z. B. bei Nutzung des Kontaktformulars).
        </li>
        <li>
          <strong>Vertragserfüllung:</strong> Die Verarbeitung ist erforderlich, um Verträge mit Ihnen zu erfüllen oder Maßnahmen vor Vertragsschluss durchzuführen.
        </li>
        <li>
          <strong>Rechtliche Verpflichtung:</strong> Die Verarbeitung ist zur Erfüllung rechtlicher Verpflichtungen erforderlich.
        </li>
        <li>
          <strong>Berechtigtes Interesse:</strong> Zur Optimierung unserer Website und zur Gewährleistung der Sicherheit bei der Nutzung.
        </li>
      </ul>

      <h2>5) Weitergabe an Dritte</h2>
      <p>
        Eine Weitergabe Ihrer Daten erfolgt nur, wenn dies für die Vertragserfüllung erforderlich ist, Sie Ihre Einwilligung gegeben haben oder wir gesetzlich dazu verpflichtet sind.
      </p>

      <h2>6) Speicherdauer</h2>
      <p>
        Ihre Daten werden nur so lange gespeichert, wie es für die oben genannten Zwecke erforderlich ist. Gesetzlich vorgeschriebene Aufbewahrungsfristen bleiben unberührt.
      </p>

      <h2>7) Ihre Rechte</h2>
      <p>
        Gemäß der DSGVO stehen Ihnen folgende Rechte zu:
      </p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung Ihrer Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Übertragbarkeit Ihrer Daten (Art. 20 DSGVO)</li>
      </ul>
      <p>
        Um eines dieser Rechte auszuüben, wenden Sie sich bitte an uns per E-Mail: <a href="mailto:contact@jjbanana13.wtf">contact@jjbanana13.wtf</a>.
      </p>

      <h2>8) Änderung der Datenschutzerklärung</h2>
      <p>
        Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version finden Sie jederzeit auf unserer Website.
      </p>

      <h2>9) Kontakt</h2>
      <p>
        Für Fragen oder Bedenken bezüglich des Datenschutzes können Sie uns jederzeit unter folgender Adresse kontaktieren:
      </p>
      <p>
        <strong>Simon Jenke</strong><br />
        Beethovenstrasse 13<br />
        79787 Lauchringen
      </p>
      <p>
        E-Mail: <a href="mailto:contact@jjbanana13.wtf">contact@jjbanana13.wtf</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Keine spezielle Logik erforderlich
</script>

<style scoped>
/* Haupt-Container: Seite mittig ausrichten */
.privacy-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
  background-color: hsl(var(--background)); /* Dynamische Hintergrundfarbe */
  color: hsl(var(--foreground)); /* Dynamische Textfarbe */
  transition: background-color 0.3s, color 0.3s;
}

/* Kasten der Datenschutzerklärung */
.privacy-box {
  background-color: hsl(var(--card)); /* Dynamische Kartenfarbe */
  color: hsl(var(--card-foreground)); /* Dynamische Schriftfarbe in Karten */
  padding: 2rem; /* Innenabstand */
  border-radius: var(--radius); /* Abgerundete Ecken */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
  max-width: 800px;
  font-family: Arial, sans-serif;
  text-align: left;
  line-height: 1.6;
}

.privacy-box h1,
.privacy-box h2 {
  margin-bottom: 1rem; /* Abstand nach unten */
  font-weight: bold; /* Fettschrift */
}

.privacy-box ul {
  list-style-type: disc; /* Standard-Aufzählung */
  padding-left: 1.2rem;
}

.privacy-box a {
  color: hsl(var(--primary)); /* Linkfarbe */
  text-decoration: none; /* Keine Unterstreichung */
}

.privacy-box a:hover {
  text-decoration: underline; /* Unterstreichung bei Hover */
}
</style>