<template>
  <div class="im">
    <v-avatar :image="require('../assets/ray.png')" size="200"> </v-avatar>
    <p class="my-name">Ray Tsai 蔡師睿</p>
    <div class="icon-container">
      <Icon_link href="https://github.com/Ray-1026" icon_name="mdi-github" />
      <span class="icon-gap"></span>
      <Icon_link
        href="https://www.linkedin.com/in/ray-tsai-264274264"
        icon_name="mdi-linkedin"
      />
      <span class="icon-gap"></span>
      <Icon_link href="mailto:0410330@gmail.com" icon_name="mdi-gmail" />
      <span class="icon-gap"></span>
      <Icon_link
        href="https://www.facebook.com/people/%E8%94%A1%E5%B8%AB%E7%9D%BF/pfbid02w7FDGTNJM18k7f4YsFMWcPCP9cHbR49qNrfZwFKMbEC4HhRfzaBRWMNs7mzh31qvl/?mibextid=ZbWKwL"
        icon_name="mdi-facebook"
      />
      <span class="icon-gap"></span>
      <Icon_link
        href="https://www.instagram.com/candickrush/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        icon_name="mdi-instagram"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Icon_link from "../components/Icon.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Icon_link,
  },
});
</script>

<style>
.im {
  text-align: center;
  margin-top: 100px;
}
.icon-container {
  text-align: center;
  margin-top: 45px;
}
.icon-gap {
  width: 35px;
  display: inline-block;
}
.my-name {
  font-size: 24px;
  margin-top: 45px;
}
</style>