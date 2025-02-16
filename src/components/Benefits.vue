<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Vertrauen in Ihre Marke stärken",
    description:
      "Unsere Fachkompetenz und termingerechte Lieferungen sorgen für zufriedene Kunden und langfristige Partnerschaften.",
  },
  {
    icon: "lineChart",
    title: "Mehr Aufträge & Kunden gewinnen",
    description:
      "Durch optimierte Logistikprozesse helfen wir Ihnen, neue Märkte zu erschließen und Ihren Kundenstamm auszubauen.",
  },
  {
    icon: "wallet",
    title: "Höhere Effizienz & Rentabilität",
    description:
      "Wir reduzieren Transportkosten und steigern die Effizienz durch intelligente Routenplanung und moderne Technik.",
  },
  {
    icon: "sparkle",
    title: "Neue Transportstrategien testen",
    description:
      "Innovative Lösungen für komplexe Schwertransporte – wir entwickeln individuelle Konzepte für Ihre Anforderungen.",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Vorteile</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ihr Schlüssel zum Erfolg in der Schwerlastlogistik
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Schwerlastlogistik.eu steht für sichere, effiziente und maßgeschneiderte Schwertransporte. Wir bringen Ihre Güter zuverlässig ans Ziel – mit innovativen Lösungen und erstklassigem Service.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
