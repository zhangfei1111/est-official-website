<template>
  <div class="app">
    <div class="app-pc only-desktop">
      <section class="header-section">
        <img class="header-bg" src="~/assets/image/app-header-bg.webp" alt="">
        <img class="hand-bg" src="~/assets/image/app-hand.webp" alt="">
        <div class="hand-container">
          <v-carousel hide-delimiters v-model="current" height="auto" :show-arrows="false" cycle :interval="4500">
            <v-carousel-item src="~/assets/image/app-home.webp" cover></v-carousel-item>
            <v-carousel-item src="~/assets/image/app-ai.webp" cover></v-carousel-item>
            <v-carousel-item src="~/assets/image/app-income.webp" cover></v-carousel-item>
          </v-carousel>
        </div>
        <div class="text-container">
          <div class="text-item" v-show="current === 0">
            <div class="text-title">Your Energy Command Center</div>
            <div class="text-desc">The SolarAI App gives you X-ray vision into your home’s energy. See your savings grow
              in real-time, control your battery, EV, Thermostat and more, receive instant health alerts. Complex data,
              presented simply. All at one place powered by AI. </div>
          </div>
          <div class="text-item" v-show="current === 1">
            <div class="text-title">Your Energy Command Center</div>
            <div class="text-desc">The SolarAI App gives you X-ray vision into your home’s energy. See your savings grow
              in real-time, control your battery, EV, Thermostat and more, receive instant health alerts. Complex data,
              presented simply. All at one place powered by AI. </div>
          </div>
          <div class="text-item" v-show="current === 2">
            <div class="text-title">Your Energy Command Center</div>
            <div class="text-desc">The SolarAI App gives you X-ray vision into your home’s energy. See your savings grow
              in real-time, control your battery, EV, Thermostat and more, receive instant health alerts. Complex data,
              presented simply. All at one place powered by AI. </div>
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
    <div class="app-mobile only-mobile">
      <section class="header-section">
        <img class="header-bg" src="~/assets/image/app-header-mobile-bg.webp" alt="">
        <img class="hand-bg" src="~/assets/image/app-hand-mobile.webp" alt="">
        <div class="hand-container">
          <v-carousel hide-delimiters v-model="current" height="auto" :show-arrows="false" cycle :interval="4500">
            <v-carousel-item src="~/assets/image/app-home-mobile.webp" cover></v-carousel-item>
            <v-carousel-item src="~/assets/image/app-ai-mobile.webp" cover></v-carousel-item>
            <v-carousel-item src="~/assets/image/app-income-mobile.webp" cover></v-carousel-item>
          </v-carousel>
        </div>
        <div class="text-title">Your Energy Command Center</div>
        <div class="text-desc">The SolarAI App gives you X-ray vision into your home’s energy. See your savings grow
          in real-time, control your battery, EV, Thermostat and more, receive instant health alerts. Complex data,
          presented simply. All at one place powered by AI. </div>

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
  </div>
</template>

<script setup lang="ts">


import { onMounted, ref, onUnmounted, nextTick } from 'vue'
const current = ref(0)

// 页面元信息
definePageMeta({
  name: 'App',
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
        overflow: hidden;
        border-radius: fluid(16px, 45, 45);
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
            width: fluid(16px, 850, 850);
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: fluid(16px, 54, 54);
            color: #FFFFFF;
            text-align: left;
            font-style: normal;
          }

          .text-desc {
            width: fluid(16px, 850, 850);
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            margin-top: fluid(16px, 36, 36);
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

  .app-mobile {
    padding-top: 3.75rem;

    .header-section {
      position: relative;

      .header-bg {
        width: 100%;
        display: block;
      }

      .hand-bg {
        position: absolute;
        width: 20.375rem;
        height: 29.0625rem;
        right: 0;
        top: 10.1875rem;
      }

      .code-container {
        display: flex;
        background: #2A3955;
        width: 100%;
        z-index: 1;
        padding: 0 3.75rem 2.8125rem 3.75rem;

        .code-item {
          flex: 1;

          .app-store-code {
            display: block;
            margin: 0 auto;
            width: 6.625rem;
            height: 6.625rem;
          }

          .app-store-icon {
            display: block;
            width: 6.1875rem;
            height: 1.75rem;
            margin: 0 auto;
            margin-top: 1rem;
          }
        }
      }

      .hand-container {
        width: 11.75rem;
        height: 28.125rem;
        position: absolute;
        z-index: 1;
        overflow: hidden;
        border-radius: 0.625rem;
        right: 6rem;
        top: 10.9375rem;
      }

      .text-title {
        position: absolute;
        width: 100%;
        left: 0;
        top: 3.375rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1.75rem;
        line-height: 1.875rem;
        color: #FFFFFF;
        text-align: center;
        font-style: normal;
      }

      .text-desc {
        padding: 2rem;
        background: #2A3955;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 0.875rem;
        color: #FFFFFF;
        line-height: 1.25rem;
        text-align: justify;
        font-style: normal;
      }
    }
  }

}
</style>
<style lang="scss">
.app {
  .app-pc {
    .v-window {

      &-x-transition,
      &-x-reverse-transition,
      &-y-transition,
      &-y-reverse-transition {

        &-enter-active,
        &-leave-active {
          transition: 0.7s cubic-bezier(.25, .8, .50, 1) !important;
          // 原来大概是 0.3s 左右，这里全局改慢
        }
      }
    }
  }
}
</style>