<template>
  <AppBar />
  <v-main style="min-height: 300px">
    <div>
      <h1 class="subtitle"># About me</h1>
      <div>
        <div class="about-block">
          <h2 class="subsubtitle"># Self Introduction</h2>
          <p class="text">
            Hello there, I'm Ray Tsai, and I'm an undergraduate student majoring
            in computer science at National Yang Ming Chiao Tung University. I
            have a strong interest in image processing, computer vision, and
            machine learning. Currently, I'm preparing to conduct research
            within these fields, and I'm actively looking for internships.
          </p>
        </div>
        <div class="about-block">
          <h2 class="subsubtitle"># Skills</h2>
          <Table />
        </div>
      </div>
    </div>
  </v-main>
</template>


<script>
import AppBar from "../components/AppBar.vue";
import Table from "../components/Table.vue";

export default {
  components: {
    AppBar,
    Table,
  },
};
</script>

<style>
.about-block {
  text-align: left;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 3%;
  margin-bottom: 3%;
}
.subsubtitle {
  font-size: 28px;
  color: #00ced1;
}
.subsubtitle:hover {
  text-decoration: underline;
}
.text {
  margin-top: 10px;
  font-size: 18px;
  line-height: 2.5;
}
</style>
