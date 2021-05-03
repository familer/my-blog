<template>
  <header>
    <div class="ww">
      <div class="logo">eternalcoder</div>
      <ul class="list-item">
        <!-- 这里通过 template 进行判断显示 -->
        <li v-for="(item, index) of HeaderTopLinks" :key="index">
          <template v-if="item.title === '视频中心'">
            <div class="dropdown">
              <a :href="item.src">
                {{ item.title }}
              </a>
              <i class="fa fa-angle-down"></i>
            </div>
            <!-- <div class="video">
              <a href="/video"> 音乐视频 </a>
            </div> -->
          </template>
          <template v-else>
            <a :href="item.src">
              {{ item.title }}
            </a>
          </template>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderTop",
  computed: {
    ...mapState({
      HeaderTopLink: (state) => state.home.HeaderTopLink,
    }),
  },
  data() {
    return {
      HeaderTopLinks: null,
    };
  },
  // 初始化获取 store 中的数据
  created() {
    this.HeaderTopLinks = this.HeaderTopLink;
  },
};
</script>

<style lang='scss'>
@import "../../styles/home/HeaderTop.css";
</style>
