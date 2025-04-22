<template>
  <div class="gallery-container">
    <!-- Galerie-Komponente -->
    <gallery v-if="index !== null" :images="fullImages" :index="index" @close="index = null" />

    <!-- Thumbnails (Lazy Loading der Vorschau-Bilder) -->
    <div class="thumbnails">
      <div
          v-for="(image, imageIndex) in previewImages"
          :key="imageIndex"
          class="thumbnail lazy-load"
          @click="openGallery(imageIndex)"
          :data-src="image"
      ></div>
    </div>
  </div>
</template>



<script>
import VueGallery from 'vue-gallery';
import ClazyLoad from 'vue-clazy-load';

export default {
  components: {
    gallery: VueGallery,
  },
  data() {
    return {
      // Vorschau-Bilder (kleinere Versionen)
      previewImages: [
        '/images/IMG_9130_compressed.webp',
        '/images/KarusellTag.webp',
        '/images/FB_IMG_1463350306899.webp',
        '/images/IMG_20210109_141116.webp',
        '/images/IMG_20210109_141124.webp',
        '/images/IMG_20210109_141138.webp',
        '/images/Screenshot_20241220_093358_Facebook.webp',
        '/images/Screenshot_20250205_142204_WhatsApp.webp',
        '/images/Screenshot_20250205_142208_WhatsApp.webp',
        '/images/Screenshot_20250205_142213_WhatsApp.webp',
        '/images/Screenshot_20250205_142217_WhatsApp.webp',
        '/images/Screenshot_20250205_142223_WhatsApp.webp',
      ],
      // Hochauflösende Bilder
      fullImages: [
        '/images/IMG_9130.webp',
        '/images/KarusellTag.webp',
        '/images/FB_IMG_1463350306899.webp',
        '/images/IMG_20210109_141116.webp',
        '/images/IMG_20210109_141124.webp',
        '/images/IMG_20210109_141138.webp',
        '/images/Screenshot_20241220_093358_Facebook.webp',
        '/images/Screenshot_20250205_142204_WhatsApp.webp',
        '/images/Screenshot_20250205_142208_WhatsApp.webp',
        '/images/Screenshot_20250205_142217_WhatsApp.webp',
        '/images/Screenshot_20250205_142223_WhatsApp.webp',
      ],
      index: null, // Index des aktuell angeklickten Bildes
    };
  },
  methods: {
    openGallery(imageIndex) {
      this.index = imageIndex; // Öffnet die Galerie mit dem entsprechenden Bild
    },
  },
  mounted() {
    this.lazyLoadImages();
  },
  methods: {
    lazyLoadImages() {
      const lazyElements = document.querySelectorAll('.lazy-load');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const src = element.getAttribute('data-src');
            element.style.backgroundImage = `url(${src})`;
            observer.unobserve(element);
          }
        });
      });

      lazyElements.forEach((element) => observer.observe(element));
    },
  },
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontale Zentrierung */
  padding: 50px 0; /* Abstand oben und unten */
}

.thumbnails {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Zentriert die Thumbnails horizontal */
  margin-top: 20px; /* Abstand zwischen Galerie und Thumbnails */
}

.thumbnail {
  width: 400px; /* Thumbnail-Größe angepasst */
  height: 300px;
  background-size: cover;
  background-position: center;
  margin: 10px;
  cursor: pointer;
  border-radius: 25px; /* Abgerundete Ecken für Thumbnails */
}

.thumbnail:hover {
  transform: scale(1.05); /* Hover-Effekt */
}
</style>
