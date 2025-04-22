<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import DiscordIcon from "@/icons/DiscordIcon.vue";
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Component
                class="w-20 h-20 m-auto mb-4"
                :is="DiscordIcon"
              />
              Gemeinsam
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                die Zukunft gestalten.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Ob Branchennews, Diskussionen oder exklusive Einblicke – in unserer Community erwarten Sie wertvolle Kontakte, inspirierender Austausch und echte Chancen zur Weiterentwicklung. Werden Sie Teil eines starken Netzwerks und bringen Sie Ihre Perspektive mit ein.
          </CardContent>

          <CardFooter>
            <Button as-child>
              <a
                href="https://discord.gg/SjAbqNbWYs"
                target="_blank"
              >
                Jetzt beitreten 💬
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
