<script setup>
const technologies = [
"FoundationDB",
"JanusGraph"
];
</script>

<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Technology</h1>

    <h3
      v-for="(tech, i) in technologies"
      :key="i"
      class="mb-4 text-xl font-bold"
    >
      {{ tech }}
    </h3>
  </div>
</template>
