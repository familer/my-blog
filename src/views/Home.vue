<template>
  <div class="home">
    <header-top></header-top>
  </div>
</template>

<script>
import HeaderTop from "components/home/HeaderTop";
import { getData } from "apis/home";
export default {
  name: "Home",
  components: {
    HeaderTop,
  },
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
