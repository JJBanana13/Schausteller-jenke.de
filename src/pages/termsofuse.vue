<template>
  <div class="terms-container">
    <div class="terms-box">
      <h1>Nutzungsbedingungen</h1>
      <p>
        Willkommen auf unserer Website <strong>schwerlastlogistik.eu</strong>. Durch die Nutzung der Website stimmen Sie den folgenden Nutzungsbedingungen ("Bedingungen") zu.
      </p>

      <h2>1) Zugang zur Website</h2>
      <p>
        Diese Website steht allen Personen zur Verfügung. Mit der Nutzung erklären Sie sich automatisch mit diesen Nutzungsbedingungen einverstanden.
      </p>

      <h2>2) Verhaltensregeln</h2>
      <p>
        <strong>2.1 Verbotene Handlungen:</strong> Sie verpflichten sich, keine Inhalte hochzuladen, zu teilen oder bereitzustellen, die gegen geltendes Recht verstoßen, obszön, beleidigend, diffamierend, bedrohlich oder anderweitig unangemessen sind.
      </p>
      <p>
        <strong>2.2 Geistiges Eigentum:</strong> Alle Inhalte auf der Website, einschließlich Texte, Bilder, Grafiken, Logos und andere Materialien, sind urheberrechtlich geschützt und gehören uns oder unseren Lizenzgebern. Inhalte, die nicht von uns erstellt wurden, sind ebenfalls urheberrechtlich geschützt und unterliegen den jeweiligen Bestimmungen.
      </p>

      <h2>3) Haftungsausschluss</h2>
      <p>
        <strong>3.1 Nutzung auf eigene Gefahr:</strong> Die Nutzung dieser Website erfolgt auf eigene Gefahr. Wir übernehmen keine Haftung für Schäden, die durch die Nutzung entstehen.
      </p>
      <p>
        <strong>3.2 Zugangsbeschränkung:</strong> Wir behalten uns das Recht vor, den Zugang zur Website jederzeit einzuschränken, zu sperren oder zu beenden, sollten Verstöße gegen die Nutzungsbedingungen erfolgen.
      </p>

      <h2>4) Änderungen der Nutzungsbedingungen</h2>
      <p>
        <strong>4.1 Änderungen:</strong> Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Es liegt in Ihrer Verantwortung, regelmäßig auf Aktualisierungen zu achten.
      </p>

      <h2>5) Schlussbestimmungen</h2>
      <p>
        <strong>5.1 Rechtswahl:</strong> Diese Bedingungen unterliegen deutschem Recht.
      </p>
      <p>
        <strong>5.2 Kontakt:</strong> Bei Fragen oder Bedenken können Sie uns über Discord (jjbanana) oder per E-Mail unter <a href="mailto:contact@jjbanana13.wtf">contact@jjbanana13.wtf</a> erreichen.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Keine spezielle Logik erforderlich
</script>

<style scoped>
/* Haupt-Container: Seite mittig ausrichten */
.terms-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ganze Höhe des Viewports */
  padding: 16px; /* Abstände */
  background-color: hsl(var(--background)); /* Dynamische Hintergrundfarbe */
  color: hsl(var(--foreground)); /* Dynamische Textfarbe */
  transition: background-color 0.3s, color 0.3s; /* Sanfter Übergang */
}

/* Box für die Nutzungsbedingungen */
.terms-box {
  background-color: hsl(var(--card)); /* Dynamische Kartenfarbe */
  color: hsl(var(--card-foreground)); /* Dynamische Schriftfarbe */
  padding: 2rem;
  border-radius: var(--radius); /* Dynamische Ecken */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
  max-width: 800px; /* Maximale Breite */
  line-height: 1.6; /* Lesbarkeit verbessern */
  font-family: Arial, sans-serif;
  text-align: left;
}

.terms-box h1,
.terms-box h2 {
  margin-bottom: 1rem; /* Abstand nach unten */
  font-weight: bold; /* Fettschrift */
  color: inherit; /* Farbe aus den CSS-Variablen übernehmen */
}

.terms-box p {
  margin: 0.5rem 0; /* Abstand zwischen Textabsätzen */
}

.terms-box a {
  color: hsl(var(--primary)); /* Dynamische Linkfarbe */
  text-decoration: none; /* Keine Unterstreichung */
}

.terms-box a:hover {
  text-decoration: underline; /* Unterstreichung bei Hover */
}
</style>