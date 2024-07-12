<template>
  <v-app-bar app class="custom-bar">
    <router-link to="/" class="title-link">
      <span class="title">RayTsai</span>
    </router-link>

    <v-spacer></v-spacer>

    <div class="subtitle-container">
      <router-link to="/about" class="subtitle-link">
        <span>About</span>
      </router-link>
      <!-- <router-link to="/posts" class="subtitle-link">
        <span>Posts</span>
      </router-link> -->
      <router-link to="/projects" class="subtitle-link">
        <span>Projects</span>
      </router-link>
      <router-link to="/CV" class="subtitle-link">
        <span>CV</span>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.custom-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78px;
}
.title-link {
  text-decoration: none;
  color: #00ced1;
}
.subtitle-link {
  text-decoration: none;
  color: #00ced1;
  font-size: 18px;
  margin-right: 48px;
  font-weight: bold;
}
.title-link:hover,
.subtitle-link:hover {
  text-decoration: underline;
  transform: scale(1.1);
}
.title {
  font-size: 28px;
  font-weight: bold;
  margin-left: 60%;
}
.subtitle-container {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 2%;
}
</style>