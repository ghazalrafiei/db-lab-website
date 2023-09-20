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
        class="font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
        >FLS</span
      >
      <span class="text-white">Lab</span>
    </h1>
  </div>
</template>
