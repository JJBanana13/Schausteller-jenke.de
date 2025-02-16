<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Individuelle Transportlösungen",
    description:
      "Jedes Schwertransportprojekt ist einzigartig. Wir bieten maßgeschneiderte Konzepte, die perfekt auf Ihre Anforderungen abgestimmt sind.",
    pro: 0,
  },
  {
    title: "Digitale Vernetzung & Echtzeit-Tracking",
    description:
      "Dank modernster Technologie behalten Sie Ihren Transport in Echtzeit im Blick – für maximale Transparenz und Sicherheit.",
    pro: 0,
  },
  {
    title: "Effiziente Kommunikation & schnelle Abwicklung",
    description: "Unsere digitalen Systeme sorgen für eine reibungslose Kommunikation und eine schnelle Bearbeitung Ihrer Transportanfragen.",
    pro: 0,
  },
  {
    title: "Optimierte Routenplanung & Genehmigungen",
    description: "Wir übernehmen die komplexe Routenplanung und kümmern uns um alle behördlichen Genehmigungen – effizient und zuverlässig.",
    pro: 1,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Dienstleistungen
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Optimale Lösungen für Ihre Schwertransporte
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Von der Planung bis zur Umsetzung bieten wir maßgeschneiderte Lösungen für den sicheren und effizienten Transport schwerer Lasten. Vertrauen Sie auf unsere Erfahrung und modernste Technologien.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
