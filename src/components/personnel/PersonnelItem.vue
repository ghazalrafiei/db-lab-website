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
    <div
      class="w-44 h-44 mb-2 grid place-content-center overflow-hidden border rounded-md border-gray-800"
    >
      <img v-if="photoSrc" :src="photoSrc" width="174" />
    </div>

    <div>
      <h3>
        <slot name="name"></slot>
      </h3>
    </div>
  </div>
</template>
