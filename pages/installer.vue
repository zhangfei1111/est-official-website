<template>
  <div class="home">
    <div class="home-pc only-desktop">
      Installer
    </div>
    <div class="home-mobile only-mobile">手机端</div>
  </div>
</template>
    
<script setup lang="ts">


import { onMounted, ref, onUnmounted, nextTick } from 'vue'



// 页面元信息
definePageMeta({
  title: 'Home'
})
</script>
  
<style scoped lang="scss">
@use "sass:math";

@function to-px($v) {
  @return 0px+$v;
}

@function fluid($min, $pxAt1920, $max, $base: 1920) {
  $min: to-px($min);
  $target: to-px($pxAt1920); // 例如 90px
  $max: to-px($max);

  // 去单位：把 90px 变成数值 90
  $target_number: math.div($target, 1px);
  // 计算对应的 vw 值： (90 / 1920) * 100 = 4.6875
  $vwVal: math.div($target_number, $base) * 100;

  // 中间项必须是纯 vw，不需要 calc()
  @return clamp($min, #{$vwVal}vw, $max);
}
</style>
  
    