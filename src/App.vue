<script setup>
import { RouterLink, RouterView } from "vue-router";
import FLSTitle from "./components/FLSTitle.vue";
</script>

<template>
  <div class="mx-auto my-0 lg:p-0 max-w-screen-xl">
    <header
      class="pt-4 sticky top-0 z-30 bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 lg:pt-0 lg:fixed lg:grid lg:top-16 lg:bottom-16 lg:left-0 lg:w-6/12 lg:border-r lg:border-r-gray-800 place-items-center"
    >
      <div class="text-center">
        <FLSTitle />

        <nav
          class="p-4 flex gap-4 overflow-x-scroll border-b border-b-gray-800 lg:border-b-0"
        >
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
      class="p-4 py-8 lg:py-16 lg:px-8 lg:flex flex-col lg:min-h-screen justify-center lg:w-6/12 lg:ml-auto"
    />
  </div>
</template>
