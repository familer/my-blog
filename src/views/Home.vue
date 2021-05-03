<template>
  <div class="home">home</div>
</template>

<script>
import { getData } from "apis/home";
export default {
  name: "Home",
  components: {},
  created() {
    getData()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
