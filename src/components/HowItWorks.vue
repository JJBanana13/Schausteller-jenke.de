<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "🔍 Analyse & Planung",
    title: "Effiziente Planung für maximale Leistung",
    description:
      "Eine durchdachte Strategie ist der Schlüssel zur erfolgreichen Schwerlastlogistik. Präzise Routenplanung und Kapazitätsberechnungen optimieren den Transport.",
    image: "roboto.png",
  },
  {
    badgeTitle: "🚛 Transport & Umsetzung",
    title: "Sichere und termingerechte Lieferung",
    description:
      "Mit modernster Technik und erfahrenen Fachkräften gewährleisten wir einen reibungslosen Transport von Schwerlastgütern – sicher und effizient.",
    image: "runner.png",
  },
  {
    badgeTitle: "💡 Individuelle Lösungen",
    title: "Maßgeschneiderte Konzepte für jede Herausforderung",
    description:
      "Jedes Projekt ist einzigartig. Wir entwickeln individuelle Logistikkonzepte, die exakt auf die Anforderungen von Schwer- und Spezialtransporten zugeschnitten sind.",
    image: "pacheco.png",
  },
  {
    badgeTitle: "🤝 Zusammenarbeit & Support",
    title: "Zuverlässiger Partner für Ihr Projekt",
    description:
      "Von der ersten Planung bis zur finalen Umsetzung – wir stehen Ihnen mit Expertise und persönlicher Beratung zur Seite, um Ihre Schwerlastlogistik effizient zu gestalten.",
    image: "gamestation.png",
  },
];
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Wie Funktioniert es
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Ablauf – Schritt für Schritt zum erfolgreichen Schwertransport
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 "
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
