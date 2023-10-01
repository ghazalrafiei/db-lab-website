<script setup>
const publications = [
  {
    cite: "Huang, H., & Ghandeharizadeh, S. (2021). Nova-LSM: A Distributed, Component-based LSM-tree Key-value Store. Proceedings of the 2021 International Conference on Management of Data.",
    Link: "https://arxiv.org/pdf/2104.01305.pdf"
  },
    {
    cite: "Alabdulkarim, Y., Almaymoni, M., & Ghandeharizadeh, S. (2018). Polygraph: A Plug-n-Play Framework to Quantify Anomalies. 2018 IEEE 34th International Conference on Data Engineering (ICDE), 1308-1311.",
    Link: "https://www.computer.org/csdl/journal/tk/2021/03/08824105/1d3dTjSDQWs",
    },
    {
    cite: "Ghandeharizadeh, S., & Nguyen, H. (2019). Design, Implementation, and Evaluation of Write-Back Policy with Cache Augmented Data Stores. Proc. VLDB Endow., 12, 836-849.",
    Link: "http://www.vldb.org/pvldb/vol12/p836-ghandeharizadeh.pdf",
    },
    {
      cite: "Ghandeharizadeh, S., Almaymoni, M., & Huang, H. (2018). Rejig: A Scalable Online Algorithm for Cache Server Configuration Changes. Proceedings of the ACM Symposium on Cloud Computing.",
      Link: "https://dl.acm.org/doi/abs/10.1145/3274808.3274819",
    },
    {
      cite: "Ghandeharizadeh, S., Irani, S., & Lam, J. (2018). On Configuring a Hierarchy of Storage Media in the Age of NVM. 2018 IEEE 34th International Conference on Data Engineering (ICDE), 1380-1383.",
      Link: "https://ieeexplore.ieee.org/document/8509376",
    },
    {
      cite: "Ghandeharizadeh, Shahram & Boghrati, Reihane & Barahmand, Sumita. (2014). An Evaluation of Alternative Physical Graph Data Designs for Processing Interactive Social Networking Actions. 8904. 13-28. 10.1007/978-3-319-15350-6_2.",
      Link: "https://link.springer.com/chapter/10.1007/978-3-319-15350-6_2",
    }

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
        <br>
        <a v-if="pub.Link" :href="pub.Link" target="_blank"> [Link] </a>
      </li>
    </ol>
  </div>
</template>