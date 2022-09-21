<script setup>
import { RouterLink, RouterView } from "vue-router";
import FLSTitle from "./components/FLSTitle.vue";
</script>

<template>
  <div class="mx-auto my-0 p-8 lg:p-0 max-w-screen-xl">
    <header
      class="lg:fixed lg:grid lg:top-0 lg:bottom-0 lg:left-0 lg:h-full lg:w-6/12 place-items-center"
    >
      <div class="flex flex-col items-center">
        <FLSTitle />

        <nav class="p-4 flex gap-4">
          <RouterLink active-class="active-link" :to="{ name: 'home' }">
            Home
          </RouterLink>

          <RouterLink active-class="active-link" :to="{ name: 'technology' }">
            Technology
          </RouterLink>

          <RouterLink active-class="active-link" :to="{ name: 'personnel' }">
            Personnel
          </RouterLink>

          <RouterLink active-class="active-link" :to="{ name: 'courses' }">
            Courses
          </RouterLink>

          <RouterLink active-class="active-link" :to="{ name: 'publications' }">
            Publications
          </RouterLink>
        </nav>
      </div>
    </header>

    <RouterView
      class="py-8 lg:flex flex-col lg:min-h-screen justify-center lg:w-6/12 lg:ml-auto"
    />
  </div>
</template>
