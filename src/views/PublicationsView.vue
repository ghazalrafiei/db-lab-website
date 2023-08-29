<script setup>
const publications = [
  {
    cite: "T. Phan, H. Alimohammadzadeh, H. Culbertson, and S. Ghandeharizadeh. An Evaluation of Three Distance Measurement Technologies for Flying Light Specks. 2023.",
    pdf: "https://arxiv.org/pdf/2308.10115.pdf",
  },
  {
    cite: "H. Alimohammadzadeh, R. Bernard, Y. Chen, T. Phan, P. Singh, S. Zhu, H. Culbertson, and S. Ghandeharizadeh. Dronevision: An Experimental 3D Testbed for Flying Light Specks. 2023.",
    pdf: "https://arxiv.org/pdf/2308.10121.pdf",
  },
  {
    cite: "H. Alimohammadzadeh, D. Mehraban, and S. Ghandeharizadeh. Modeling Illumination Data with Flying Light Specks. In Proceedings of the 14th Conference on ACM Multimedia Systems, Vancouver, Canada, June 2023.",
    pdf: "https://dl.acm.org/doi/pdf/10.1145/3587819.3592544",
  },
  {
    cite: "S. Ghandeharizadeh. Display of 3D Illuminations using Flying Light Specks. In ACM Multimedia, Lisbon, Portugal, October 2022.",
    pdf: "https://arxiv.org/pdf/2207.08346.pdf",
  },
  {
    cite: "S. Ghandeharizadeh and L. Garcia. Safety in the Emerging Holodeck Applications. In CHI 2022 Workshop on Novel Challenges of Safety, Security and Privacy in Extended Reality, April 25, 2022.",
    pdf: "https://arxiv.org/pdf/2208.08398.pdf",
  },
  {
    cite: "S. Ghandeharizadeh. Holodeck: Immersive 3D Displays Using Swarms of Flying Light Specks. In ACM Multimedia Asia, Gold Coast, Australia, December 1-3, 2021.",
    pdf: "https://arxiv.org/pdf/2111.03657.pdf",
  },
];
</script>

<template>
  <div>
    <h1 class="mb-8 text-4xl font-black text-white">Publications</h1>

    <ol>
      <li v-for="(pub, i) in publications" :key="i" class="mb-4">
        <span class="text-white">{{ i + 1 }}</span>
        <span class="text-cyan-500">.</span>
        {{ pub.cite }}

        <a v-if="pub.pdf" :href="pub.pdf" target="_blank"> pdf </a>
      </li>
    </ol>
  </div>
</template>
