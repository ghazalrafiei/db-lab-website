<script setup>
const courses = [
  {
    number: "CSCI 485",
    title: "File and Database Management",
    syllabus: "https://web-app.usc.edu/soc/syllabus/20203/30110.pdf",
  },
  {
    number: "CSCI 550",
    title: "Advanced Data Stores",
    syllabus: "https://web-app.usc.edu/soc/syllabus/20203/30037.pdf",
  },
  {
    number: "CSCI 685",
    title: "Advanced Topics in Database Systems"
  },
];
</script>

<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Courses</h1>

    <ol>
      <li v-for="(course, i) in courses" :key="i" class="mb-4">
        <span class="text-white">{{ i + 1 }}</span>
        <span class="text-cyan-500">.</span>

        {{ course.number }}: {{ course.title }}

        <a v-if="course.syllabus" :href="course.syllabus" target="_blank">
          [Syllabus]
        </a>
      </li>
    </ol>
  </div>
</template>
