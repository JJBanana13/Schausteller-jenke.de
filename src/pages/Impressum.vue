<template>
  <div class="impressum-container">
    <div class="impressum-box">
      <h1>Impressum</h1>
      <p>Simon Jenke</p>
      <p>
        Beethovenstrasse 13<br />
        79787 Lauchringen<br />
        Steuernummer: 20187/01450<br />
        Reisegewerbe: 0088191<br />
      </p>
      <p>
        E-Mail: <a href="mailto:simon@schausteller-jenke.de">simon@schausteller-jenke.de</a>
      </p>
      <p> Sollte diese Adresse missbraucht werden, bleibt der Rechtsweg nicht ausgeschlossen. </p>
      <h2>Zuständige Regulierungs- und Aufsichtsbehörde:</h2>
      <p>
        Landratsamt Waldshut<br />
        Sitz: Deutschland
      </p>
      <p>
        Das hier angegebene Impressum gilt für alle Belange der Impressumspflicht nach §5 TMG, §55 Abs.2 RStV & MStV §18
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Keine Logik erforderlich
</script>

<style scoped>
/* Haupt-Container: Seite mittig ausrichten */
.impressum-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
  background-color: hsl(var(--background)); /* Verwendung der Hintergrundfarbe aus index.css */
  color: hsl(var(--foreground)); /* Verwendung der Textfarbe */
  transition: background-color 0.3s, color 0.3s; /* Weicher Übergang bei Farbumschaltung */
}

/* Kasten um das Impressum */
.impressum-box {
  background-color: hsl(var(--card)); /* Verwendung der Farbvariable für Karten */
  color: hsl(var(--card-foreground)); /* Textfarbe im Kartenhintergrund */
  padding: 2rem;
  border-radius: var(--radius); /* Abgerundete Ecken (aus Variablen) */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
  max-width: 600px;
  text-align: left; /* Text linksbündig */
  line-height: 1.6; /* Lesbarkeit verbessern */
  font-family: Arial, sans-serif;
}

.impressum-box h1,
.impressum-box h2 {
  margin-bottom: 1rem;
  font-weight: bold;
  color: inherit; /* Erbt die Farbe, basierend auf dem Modus */
}

.impressum-box a {
  color: hsl(var(--primary)); /* Farbe für Links */
  text-decoration: none;
}

.impressum-box a:hover {
  text-decoration: underline;
}
</style>