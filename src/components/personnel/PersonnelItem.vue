<script setup>
defineProps({
  photoSrc: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mb-8">
    <div class="w-48 h-48 mb-2 border rounded-md border-gray-800">
      <img v-if="photoSrc" :src="photoSrc" width="100%" height="100%" />
    </div>

    <div>
      <h3>
        <slot name="name"></slot>
      </h3>
    </div>
  </div>
</template>
