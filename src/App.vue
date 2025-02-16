<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <router-view /> <!-- Zeigt die aktuelle Seite basierend auf der Route an -->
    <Footer />
  </div>
</template>