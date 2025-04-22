<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Kann man das Kinderkarussell auch für private Feiern mieten?",
    answer: "Ja, unser Kinderkarussell kann auch für private Veranstaltungen wie Geburtstagsfeiern oder Hochzeiten gemietet werden. Kontaktieren Sie uns gerne, um die Details zu besprechen!",
    value: "item-1",
  },
  {
    question: "Wie viel Platz wird für den Aufbau des Karussells benötigt?",
    answer:
      "Für den Aufbau des Karussells benötigen wir eine ebene Fläche von etwa 6x8m. Falls Sie unsicher sind, ob der Platz ausreicht, helfen wir Ihnen gerne bei der Planung.",
    value: "item-2",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

  </section>
</template>
