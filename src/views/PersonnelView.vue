<script setup>
import Personnel from "../components/personnel/Index.vue";
import ShahramGhandeharizadeh from "@/assets/images/ShahramGhandeharizadeh.jpg";
import HeatherCulbertson from "@/assets/images/HeatherCulbertson.jpg";
import HamedAlimohammadzadeh from "@/assets/images/HamedAlimohammadzadeh.jpg";
import JiadongBai from "@/assets/images/JiadongBai.jpg";
import ShuqinZhu from "@/assets/images/ShuqinZhu.jpg";
import YangChen from "@/assets/images/YangChen.jpg";

const personnelGroups = [
  {
    title: "Lab directory",
    items: [
      {
        name: "Professor Shahram Ghandeharizadeh",
        photo: ShahramGhandeharizadeh,
      },
    ],
  },
  {
    title: "Affiliated faculty",
    items: [
      {
        name: "Professor Heather Culbertson",
        photo: HeatherCulbertson,
      },
    ],
  },
  {
    title: "Ph.D. students",
    items: [
      {
        name: "Hamed Alimohammadzadeh",
        photo: HamedAlimohammadzadeh,
      },
    ],
  },
  {
    title: "M.S. students",
    items: [
      {
        name: "Jiadong Bai",
        photo: JiadongBai,
      },
      {
        name: "Shuqin Zhu",
        photo: ShuqinZhu,
      },
    ],
  },
  {
    title: "Affiliated Ph.D. students",
    items: [
      {
        name: "Yang Chen",
        photo: YangChen,
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
