import { createRouter, createWebHistory } from "vue-router";
import Home from "../Site.vue"; // Hauptseite
import Impressum from "../pages/Impressum.vue"; // Impressum-Seite importieren
import Termsofuse from "../pages/termsofuse.vue"
import Datenschutz from "../pages/Datenschutz.vue";
import History from "../pages/History.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/impressum", component: Impressum }, // Impressum-Route
    { path: "/terms-of-use", component: Termsofuse }, // Impressum-Route
    { path: "/datenschutzerklarung", component: Datenschutz }, // Impressum-Route
    { path: "/Geschichte", component: History }, // Impressum-Route


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;