<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
      {
        image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
        name: "Lumitech",
        userName: "Handy Marke",
        comment:
          "Die Zusammenarbeit mit diesem Team war ausgezeichnet! Unsere Schwerlastgüter wurden sicher und pünktlich geliefert. Die Professionalität und das Know-how in der Schwerlastlogistik haben uns beeindruckt. Wir werden definitiv wieder zusammenarbeiten!",
        rating: 5.0,
      },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Nexora",
    userName: "Bau unternehmen",
    comment:
      "Vielen Dank für die großartige Unterstützung bei unserem letzten Großprojekt! Die Planung, Organisation und Durchführung des Transports waren von höchster Qualität. Ihr Service war zuverlässig und effizient, selbst bei schweren und sperrigen Gütern. ",
    rating: 4.8,
  },

  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Vantrex",
    userName: "Micro-Chip Produktion",
    comment:
      "Ein Top-Partner für Schwerlasttransporte! Die Kommunikation war jederzeit klar und professionell, und alle Abläufe liefen reibungslos. Unsere hohen Erwartungen wurden sogar übertroffen – absolut empfehlenswert!",
    rating: 4.9,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Solvex",
    userName: "Datacenter",
    comment:
      "Wir waren beeindruckt, wie reibungslos der Transport unserer Schwerlastgüter ablief. Trotz der komplexen Anforderungen wurde alles pünktlich und sicher geliefert. Ein echter Profi in der Schwerlastlogistik – absolut vertrauenswürdig!",
    rating: 5.0,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Dynavo",
    userName: "Solar Park",
    comment:
      "Herausragender Service! Die Expertise und Präzision dieses Teams haben unser Projekt enorm erleichtert. Vom ersten Kontakt bis zur finalen Lieferung lief alles perfekt. Vielen Dank für die großartige Unterstützung!",
    rating: 5.0,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Zentrix",
    userName: "Auto Hersteller",
    comment:
      "Unsere Schwerlastlieferung war eine echte Herausforderung, aber dieses Team hat gezeigt, wie professionell und zuverlässig es agiert. Wir schätzen die exzellente Planung und die termingerechte Ausführung. Gerne wieder!",
    rating: 4.9,
  },
];
</script>

<template>
  <section
    id="testimonials"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Bewertungen
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Was sagen unsere Auftraggeber ?
      </h2>
    </div>

    <Carousel
      :opts="{
        align: 'start',
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src="https://www.radix-vue.com/logo.svg"
                    alt="@radix-vue"
                  />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
