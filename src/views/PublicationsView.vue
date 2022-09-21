<script setup>
const publications = [
  "S. Ghandeharizadeh. Display of 3D Illuminations using Flying Light Specks. In ACM Multimedia, Lisbon, Portugal, October 2022.",
  "S. Ghandeharizadeh and L. Garcia. Safety in the Emerging Holodeck Applications. In CHI 2022 Workshop on Novel Challenges of Safety, Security and Privacy in Extended Reality,  April 25, 2022.",
  "S. Ghandeharizadeh. Holodeck: Immersive 3D Displays Using Swarms of Flying Light Specks. In ACM Multimedia Asia, Gold Coast, Australia, December 1-3, 2021.",
];
</script>

<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Publications</h1>

    <ol>
      <li v-for="(pub, i) in publications" :key="i" class="mb-4">
        <span class="text-white">{{ i + 1 }}</span>
        <span class="text-cyan-500">.</span>
        {{ pub }}
      </li>
    </ol>
  </div>
</template>
