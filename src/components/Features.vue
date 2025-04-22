<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  Earth,
  Lightbulb,
  ShieldPlus,
  Beer,
  Unplug,
  CalendarFold,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Earth",
    title: "Mobil und flexibel",
    description:
        "Unser Karussell ist mobil und kann auf verschiedenen Festplätzen oder privaten Veranstaltungen eingesetzt werden.",
  },
  {
    icon: "Lightbulb",
    title: "Leuchtendes Highlight",
    description:
        "Die moderne LED-Beleuchtung macht das Karussell zu einem echten Hingucker – besonders bei Dunkelheit.",
  },
  {
    icon: "ShieldPlus",
    title: "Sicherer Fahrspaß",
    description:
      "Wir legen großen Wert auf Sicherheit, damit Kinder sorgenfrei Spaß haben können.",
  },
  {
    icon: "Beer",
    title: "Perfekt für Feste",
    description:
      "Ob Volksfest, Stadtfest oder Vereinsfeier – unser Karussell ist immer ein Publikumsmagnet.",
  },
  {
    icon: "Unplug",
    title: "Vermietung möglich",
    description:
        "Mieten Sie unser Kinderkarussell für Ihre Veranstaltung und machen Sie sie zu etwas ganz Besonderem!",
  },
  {
    icon: "CalendarFold",
    title: "Erfahrung und Zuverlässigkeit",
    description:
        "Mit jahrelanger Erfahrung als Schaustellerbetrieb stehen wir für Zuverlässigkeit und professionellen Service.",
  },
];

const iconMap: Record<
  string,
  | typeof Earth
  | typeof Lightbulb
  | typeof ShieldPlus
  | typeof Beer
  | typeof Paintbrush
  | typeof Unplug
  | typeof MessageCircle
  | typeof CalendarFold
> = {
  Earth: Earth,
  Lightbulb: Lightbulb,
  ShieldPlus: ShieldPlus,
  Beer: Beer,
  paintbrush: Paintbrush,
  Unplug: Unplug,
  messageCircle: MessageCircle,
  CalendarFold: CalendarFold,
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
      Kinderkarussell Simon Jenke
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Wir sind ein Schaustellerbetrieb mit Herz und Leidenschaft! Unser Kinderkarussell ist die perfekte Attraktion für Volksfeste, Stadtfeste, Vereinsfeiern oder private Veranstaltungen. Mit seinem farbenfrohen Design und moderner Beleuchtung sorgt es für strahlende Kinderaugen. Sie können unser Karussell auch mieten – für eine unvergessliche Zeit voller Spaß und Freude!
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
