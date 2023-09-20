<script setup>
import Personnel from "../components/personnel/Index.vue";
import ShahramGhandeharizadeh from "@/assets/images/ShahramGhandeharizadeh.jpg";
import GhazalRafiei from "@/assets/images/GhazalRafiei.jpg"
import ArushiChauhan from "@/assets/images/ArushiChauhan.jpg"
const personnelGroups = [
  {
    title: "Lab Directory",
    items: [
      {
        name: "Professor Shahram Ghandeharizadeh",
        photo: ShahramGhandeharizadeh,
      },
    ],
  },
  {
    title: "Ph.D. Students",
    items: [
      {
        name: "Ghazal Rafiei",
        photo: GhazalRafiei,
      },
    ],
  },
  {
    title: "M.S. Students",
    items:[
      {
        name: "Arushi Chauhan",
        photo: ArushiChauhan,
      },
      {
        name: "Romtin Toranji",
      // //   photo: ___,
      },
      ]
  },
];
</script>

<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Personnel</h1>

    <Personnel :personnel-groups="personnelGroups" />
  </div>
</template>
