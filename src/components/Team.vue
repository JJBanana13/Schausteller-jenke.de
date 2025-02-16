<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";
import YouTubeIcon from "@/icons/YouTubeIcon.vue";
import Kofiicon from "@/icons/KOFIICON.vue";
import tiktokicon from "@/icons/TiktokIcon.vue";
import TwitchIcon from "@/icons/TwitchIcon.vue";


interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://data.schwerlastlogistik.eu/logo/pfp/JJBanana13.webp",
    firstName: "JJBanana",
    lastName: "13",
    positions: ["Website Developer", "Event Team", "Media Team", "Fahrer"],
    socialNetworks: [
      {
        name: "Github",
        url: "https://github.com/JJBanana13",
      },
      {
        name: "Youtube", // Corrected name here
        url: "https://www.youtube.com/@jjbanana13",
      },
      {
        name: "KOFI",
        url: "https://ko-fi.com/jjbanana13",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@jjbanana13",
      },
      {
        name: "Twitch",
        url: "https://www.twitch.tv/jjbanana13",
      },
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/mrhello.gif",
    firstName: "Mr",
    lastName: "Hello",
    positions: ["Website Developer", "Event Team", "Fahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
      "https://data.schwerlastlogistik.eu/logo/pfp/zero.webp",
    firstName: "Zero",
    lastName: "Two",
    positions: ["Inhaber", "Eventmanager", "Media Team"],
    socialNetworks: [
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@mangosnock",
      },
    ],
  },
  {
    imageUrl:
      "https://data.schwerlastlogistik.eu/logo/pfp/max.webp",
    firstName: "",
    lastName: "Max",
    positions: ["Inhaber", "Event Team"],
    socialNetworks: [
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@v8_scania__max_v8",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@maxwinkler-hz2vk",
      },
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/enji.webp",
    firstName: "Enji",
    lastName: "Todoroki",
    positions: ["Stvl. Inhaber", "Fahrer"],
    socialNetworks: [

    ],
  },
  {
    imageUrl:
      "https://data.schwerlastlogistik.eu/logo/pfp/standard.webp",
    firstName: "Jan",
    lastName: "Spielt20002",
    positions: ["fahrer"],
    socialNetworks: [

    ],
},
  {
    imageUrl:
      "https://data.schwerlastlogistik.eu/logo/pfp/Tim.webp",
    firstName: "!",
    lastName: "Tim",
    positions: ["Probefahrer"],
    socialNetworks: [
      {
        name: "Twitch",
        url: "https://www.twitch.tv/mind_tim7",
      },
    ],
  },
  {
    imageUrl:
      "https://data.schwerlastlogistik.eu/logo/pfp/brokenboy.webp",
    firstName: "Broken",
    lastName: "boy",
    positions: ["Probefahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
      "https://data.schwerlastlogistik.eu/logo/pfp/blondie.webp",
    firstName: "",
    lastName: "Blondie",
    positions: ["Probefahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/standard.webp",
    firstName: "Duplex",
    lastName: "Asp",
    positions: ["Probefahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/Meiestro.webp",
    firstName: "",
    lastName: "Meiestro",
    positions: ["Fahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/standard.webp",
    firstName: "mell",
    lastName: "2506",
    positions: ["Probefahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/standard.webp",
    firstName: "",
    lastName: "Svenii",
    positions: ["Probefahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/Tobi.webp",
    firstName: "",
    lastName: "tobi",
    positions: ["Probefahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/Tyrell.webp",
    firstName: "",
    lastName: "Tyrell",
    positions: ["Fahrer"],
    socialNetworks: [
    ],
  },
  {
    imageUrl:
        "https://data.schwerlastlogistik.eu/logo/pfp/VAchenbach.webp",
    firstName: "VA",
    lastName: "chenbach",
    positions: ["Fahrer"],
    socialNetworks: [
      {
        name: "Youtube",
        url: "https://www.youtube.com/@volkhardkatjaachenbach9478",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;

    case "Github":
      return GithubIcon;

    case "X":
      return XIcon;

    case "Youtube": // Include case for YouTube
      return YouTubeIcon;

    case "KOFI":
      return Kofiicon;

    case "TikTok":
      return tiktokicon;

    case "Twitch":
      return TwitchIcon;

  }
};
</script>

<template>
  <section
    id="team"
    class="container lg:w-[75%] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Team</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Unser gesamtes Team
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6"
            >{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          v-for="(position, index) in positions"
          :key="index"
          :class="{
            'pb-0 text-muted-foreground ': true,
            'pb-4': index === positions.length - 1,
          }"
        >
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a
            v-for="{ name, url } in socialNetworks"
            key="name"
            :href="url"
            target="_blank"
            class="hover:opacity-80 transition-all"
            :aria-label="`Visit our ${name} page`"
          >
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
