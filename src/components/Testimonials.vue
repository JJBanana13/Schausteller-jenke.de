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
    name: "Lena S.",
    userName: "Grundschullehrerin aus Freiburg",
    comment:
        "Das Kinderkarussell war das Highlight unseres Schulfestes! Die Kinder waren begeistert, und die Eltern haben die liebevolle Gestaltung sehr gelobt. Vielen Dank für den großartigen Einsatz!",
    rating: 5.0,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Thomas W.",
    userName: "Eventmanager aus Stuttgart",
    comment:
        "Wir haben das Karussell für unser Sommerfest gebucht, und es war ein voller Erfolg! Die Organisation war top, und die Kinder hatten riesigen Spaß. Absolut empfehlenswert!",
    rating: 4.8,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Dr. Miriam K.",
    userName: "Kinderärztin aus Karlsruhe",
    comment:
        "Das Karussell hat auf dem Stadtfest für strahlende Kinderaugen gesorgt. Besonders beeindruckt hat mich die Sicherheit und Professionalität des Teams – einfach klasse!",
    rating: 4.9,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Jan P.",
    userName: "Student aus Heidelberg",
    comment:
        "Ich fand die Atmosphäre rund um das Karussell einfach toll! Es war nicht nur optisch ein Highlight, sondern auch super organisiert. Großes Lob an das Team!",
    rating: 5.0,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Sophie L.",
    userName: "Buchhändlerin aus Konstanz",
    comment:
        "Euer Karussell hat unsere Veranstaltung so besonders gemacht! Die liebevolle Gestaltung und der freundliche Service haben uns alle begeistert. Vielen Dank!",
    rating: 5.0,
  },
  {
    image: "https://data.schwerlastlogistik.eu/logo/pfp/firma1.svg",
    name: "Karim D.",
    userName: "Außendienstmitarbeiter aus Mannheim",
    comment:
        "Für jemanden wie mich, der viel unterwegs ist, war es toll zu sehen, wie flexibel und zuverlässig ihr seid. Das Karussell war pünktlich aufgebaut und hat für eine großartige Stimmung gesorgt!",
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
        Das sagen unsere Kunden über unser Kinderkarussell! Lesen Sie, warum unser Karussell auf jedem Fest ein Highlight ist und wie es für strahlende Kinderaugen sorgt
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
