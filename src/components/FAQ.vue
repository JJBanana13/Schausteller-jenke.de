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
    question: "Welche Transportlösungen bietet Schwerlastlogistik.eu an?",
    answer: "Wir bieten spezialisierte Lösungen für Schwer- und Spezialtransporte, einschließlich maßgeschneiderter Logistikkonzepte für übergroße und schwere Güter.",
    value: "item-1",
  },
  {
    question: "Kann ich eine individuelle Transportberatung erhalten?",
    answer:
      "Ja! Unser Expertenteam steht Ihnen zur Verfügung, um individuelle Transportlösungen zu entwickeln und den gesamten Ablauf effizient zu gestalten.",
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
