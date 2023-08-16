<template>
  <v-table style="margin-top: 10px">
    <thead>
      <tr>
        <th class="text-center">Skills</th>
        <th class="text-center">Languages/Tools</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in programming_skills" :key="item.skill">
        <td>{{ item.skill }}</td>
        <td>
          <div style="text-align: center">
            <img
              v-for="icon in item.icons"
              :key="icon"
              :src="icon"
              class="icon-image"
            />
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      programming_skills: [
        {
          skill: "Programming Languages",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          ],
        },
        {
          skill: "Frontend Development",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          ],
        },
        {
          skill: "Backend Development",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
          ],
        },
        {
          skill: "AI/ML",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
          ],
        },
        {
          skill: "Database",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
          ],
        },
        {
          skill: "Software",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
          ],
        },
        {
          skill: "Platform",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg",
          ],
        },
        {
          skill: "Other",
          icons: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
          ],
        },
      ],
    };
  },
};
</script>

<style>
.icon-image {
  width: 70px;
  height: 70px;
  margin: 5px;
}
</style>