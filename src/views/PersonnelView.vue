<script setup>
import Personnel from "../components/personnel/Index.vue";

const personnelGroups = [
  {
    title: "Lab directory",
    items: [
      {
        name: "Professor Shahram Ghandeharizadeh",
        photo: "./src/assets/images/ShahramGhandeharizadeh.jpg",
      },
    ],
  },
  {
    title: "Affiliated faculty",
    items: [
      {
        name: "Professor Heather Culbertson",
        photo: "./src/assets/images/HeatherCulbertson.jpg",
      },
    ],
  },
  {
    title: "Ph.D. students",
    items: [
      {
        name: "Hamed Alimohammadzadeh",
        photo: "./src/assets/images/HamedAlimohammadzadeh.webp",
      },
    ],
  },
  {
    title: "M.S. students",
    items: [
      {
        name: "Jiadong Bai",
        photo: "./src/assets/images/JiadongBai.jpg",
      },
      {
        name: "Shuqin Zhu",
        photo: "./src/assets/images/ShuqinZhu.jpg",
      },
    ],
  },
  {
    title: "Affiliated Ph.D. students",
    items: [
      {
        name: "Yang Chen",
        photo: "./src/assets/images/YangChen.jpg",
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
