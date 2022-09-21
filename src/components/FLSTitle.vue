<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1 class="text-5xl lg:text-8xl">
      <span
        class="font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-sky-500 to-purple-500"
        >FLS</span
      >
      <span class="text-white">Lab</span>
    </h1>
  </div>
</template>
