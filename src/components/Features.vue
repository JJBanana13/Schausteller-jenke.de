<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Digital vernetzt & effizient",
    description:
      "Unsere modernen Systeme ermöglichen eine nahtlose digitale Auftragsabwicklung – für eine schnelle und transparente Kommunikation.",
  },
  {
    icon: "badgeCheck",
    title: "Bewährte Expertise & Vertrauen",
    description:
      "Langjährige Erfahrung und zufriedene Kunden sind der beste Beweis für unsere Zuverlässigkeit in der Schwerlastlogistik.",
  },
  {
    icon: "goal",
    title: "Zielgerichtete Transportlösungen",
    description:
      "Wir entwickeln individuelle Konzepte für jeden Schwertransport, um Effizienz und Sicherheit zu maximieren.",
  },
  {
    icon: "pictureInPicture",
    title: "Klare & präzise Planung",
    description:
      "Dank detaillierter Planung und modernster Technik gewährleisten wir einen reibungslosen Ablauf – auch bei komplexen Anforderungen.",
  },
  {
    icon: "Klare Kommunikation & schnelle Reaktion",
    title: "Clear CTA",
    description:
      "Unser Team steht Ihnen jederzeit zur Verfügung und sorgt für eine direkte, schnelle und verlässliche Kommunikation.",
  },
  {
    icon: "newspaper",
    title: "Höchste Standards & Sicherheit",
    description:
      "Wir setzen auf geprüfte Prozesse und höchste Sicherheitsstandards, um Ihre Ladung optimal zu schützen.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Merkmale
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Was uns einzigartig macht
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Schwerlastlogistik.eu bietet maßgeschneiderte Lösungen für den sicheren und effizienten Transport schwerer Lasten. Unsere modernen Technologien und unser erfahrenes Team garantieren höchste Qualität und Zuverlässigkeit.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
