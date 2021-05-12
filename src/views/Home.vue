<template>
  <div class="home">
    <header-top></header-top>
    <banner></banner>
  </div>
</template>

<script>
// 组件
import HeaderTop from "components/home/HeaderTop";
import Banner from "components/home/Banner";
// 这里是 api
import { getData } from "apis/home";
export default {
  name: "Home",
  components: {
    HeaderTop,
    Banner,
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
