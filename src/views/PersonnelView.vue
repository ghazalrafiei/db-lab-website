<script setup>
import Personnel from "../components/personnel/Index.vue";

const personnelGroups = [
  {
    title: "Lab directory",
    items: [
      {
        name: "Shahram Ghandeharizadeh",
        photo: "",
      },
    ],
  },
  {
    title: "Affiliated faculty",
    items: [
      {
        name: "Header Culbertson",
        photo: "",
      },
    ],
  },
  {
    title: "Ph.D. students",
    items: [
      {
        name: "Hamed Alimohammadzadeh",
        photo: "",
      },
    ],
  },
  {
    title: "M.S. students",
    items: [
      {
        name: "Jiadong Bai",
        photo: "",
      },
      {
        name: "Shuqin Zhu",
        photo: "",
      },
    ],
  },
  {
    title: "Affiliated Ph.D. students",
    items: [
      {
        name: "Yang Chen",
        photo: "",
      },
    ],
  },
];
</script>

<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Personnel</h1>

    <Personnel :personnel-groups="personnelGroups" />
  </div>
</template>
