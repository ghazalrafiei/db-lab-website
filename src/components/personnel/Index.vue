<script setup>
import PersonnelGroup from "./PersonnelGroup.vue";
import PersonnelItem from "./PersonnelItem.vue";

defineProps({
  personnelGroups: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <PersonnelGroup v-for="group in personnelGroups" :key="group.title">
    <template #heading>{{ group.title }}</template>

    <PersonnelItem
      v-for="item in group.items"
      :key="item.name"
      :photoSrc="item.photo"
    >
      <template #name>{{ item.name }}</template>
    </PersonnelItem>
  </PersonnelGroup>
</template>
