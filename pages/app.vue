<template>
  <div class="app">
    <div class="app-pc only-desktop">
      <section class="header-section">
        <img class="header-bg" src="~/assets/image/app-header-bg.webp" alt="">
        <img class="hand-bg" src="~/assets/image/app-hand.webp" alt="">
        <div class="hand-container">
          <v-carousel hide-delimiters v-model="current" crossfade height="auto" :show-arrows="false" cycle
            :interval="3000">
            <v-carousel-item src="~/assets/image/app-home.webp" cover></v-carousel-item>
            <v-carousel-item src="~/assets/image/app-ai.webp" cover></v-carousel-item>
            <v-carousel-item src="~/assets/image/app-income.webp" cover></v-carousel-item>
          </v-carousel>
        </div>
        <div class="text-container">
          <div class="text-item" v-show="current === 0">
            <div class="text-title">AI-powered home energy</div>
            <div class="text-desc">Download the monitoring app for a user-friendly interface, real-time home energy flow charts and detailed energy data. Gain deep insight into production and consumption, and track everything in real time to keep your system at peak performance.</div>
          </div>
          <div class="text-item" v-show="current === 1">
            <div class="text-title">AI-powered home energy</div>
            <div class="text-desc">Download the monitoring app for a user-friendly interface, real-time home energy flow charts and detailed energy data. Gain deep insight into production and consumption, and track everything in real time to keep your system at peak performance.</div>
          </div>
          <div class="text-item" v-show="current === 2">
            <div class="text-title">AI-powered home energy</div>
            <div class="text-desc">Download the monitoring app for a user-friendly interface, real-time home energy flow charts and detailed energy data. Gain deep insight into production and consumption, and track everything in real time to keep your system at peak performance.</div>
          </div>
        </div>
        <div class="code-container">
          <div class="code-item ios-code">
            <img class="app-store-code" src="~/assets/image/ios-code.webp" alt="">
            <img class="app-store-icon" src="~/assets/image/ios-store.webp" alt="">
          </div>
          <div class="code-item">
            <img class="app-store-code" src="~/assets/image/android-code.webp" alt="">
            <img class="app-store-icon" src="~/assets/image/android-store.webp" alt="">
          </div>
        </div>
      </section>

    </div>
    <div class="app-mobile only-mobile">手机端</div>
  </div>
</template>
    
<script setup lang="ts">


import { onMounted, ref, onUnmounted, nextTick } from 'vue'
const current = ref(0)

// 页面元信息
definePageMeta({
  name:'App',
  title: 'App'
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

.app {
  .app-pc {
    .header-section {
      height: 100vh;
      position: relative;

      .header-bg {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }

      .hand-bg {
        position: absolute;
        width: fluid(16px, 759, 759);
        height: fluid(16px, 838, 838);
        right: 0;
        bottom: 0;
      }

      .code-container {
        display: flex;
        position: absolute;
        z-index: 1;
        left: fluid(16px, 170, 170);
        bottom: fluid(16px, 80, 80);

        .code-item {
          flex: 1;

          .app-store-code {
            width: fluid(16px, 164, 164);
            height: fluid(16px, 164, 164);
            display: block;
          }

          .app-store-icon {
            display: block;
            width: fluid(16px, 148, 148);
            height: fluid(16px, 44, 44);
            margin: 0 auto;
            margin-top: fluid(16px, 20, 20);
          }

        }

        .ios-code {
          margin-right: fluid(16px, 60, 60);
        }
      }

      .hand-container {
        width: fluid(16px, 339, 339);
        height: fluid(16px, 735, 735);
        position: absolute;
        z-index: 1;
        right: fluid(16px, 343, 343);
        bottom: fluid(16px, 86, 86);
      }

      .text-container {
        display: flex;
        position: absolute;
        z-index: 1;
        left: fluid(16px, 170, 170);
        top: fluid(16px, 128, 128);
        .text-item {
          .text-title {
            width: fluid(16px, 748, 748);
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: fluid(16px, 68, 68);
            color: #FFFFFF;
            line-height: fluid(16px, 95, 95);
            text-align: left;
            font-style: normal;
          }

          .text-desc {
            width: fluid(16px, 748, 748);
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            margin-top: fluid(16px, 20, 20);
            font-size: fluid(16px, 28, 28);
            color: #FFFFFF;
            line-height: fluid(16px, 40, 40);
            text-align: left;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>
  
    