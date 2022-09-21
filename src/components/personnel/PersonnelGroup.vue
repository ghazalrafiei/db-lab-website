<template>
  <div>
    <h3 class="mb-4 text-xl font-bold">
      <slot name="heading"></slot>
    </h3>

    <div class="flex gap-4 flex-wrap">
      <slot></slot>
    </div>
  </div>
</template>
