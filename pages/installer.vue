<template>
  <div class="installer">
    <div class="installer-pc only-desktop">
      <section class="installer-header">
        <img class="installer-header-bg" src="../assets/image/installer-header-bg.webp" alt="">
        <div class="installer-header-content">
          Simple installation, saves time and effort
        </div>
        <div class="installer-scroll">
          Scroll to see more
          <img class="installer-scroll-icon" src="../assets/image/home-introduce-scroll.webp" alt="" />
        </div>
      </section>
      <section class="installer-content">
        <div class="installer-title">Easy installation</div>
        <v-carousel height="auto">
          <v-carousel-item v-for="(item, index) in items" :key="index">
            <div class="installation-content">
              <img class="installation-content-img" :src="item.url" alt="">
              <div class="step-content">
                <div class="setp-content-title">{{ item.title }}</div>
                <div class="setp-content-desc">{{ item.text }}</div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>

      </section>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import installer1 from '~/assets/image/installer-1.webp'
import installer2 from '~/assets/image/installer-2.webp'
import installer3 from '~/assets/image/installer-3.webp'
import { onMounted, ref, onUnmounted, nextTick } from 'vue'
const model = ref(0)
const items = [
  {
    url: installer1,
    title: 'Fast one-visit onsite installation',
    text: 'Standardized workflow and pre-checks let the team mount, wire, power on and commission everything in a single visit. Connect to the app on site and start using it right away, with minimal disruption or downtime.'
  },
  {
    url: installer2,
    title: 'Remote O&M with less hassle, more efficiency',
    text: 'SolarAI provides 24/7 remote monitoring, smart alerts with root-cause hints, one-click work orders and OTA updates, so installers can keep systems stable with fewer site visits and shorter outages.'
  },
  {
    url: installer3,
    title: 'Scheduled panel cleaning, less hassle, better yield',
    text: 'When soiling causes generation loss beyond a set threshold, the system recommends cleaning and shows expected extra yield and payback. With one tap you can book certified cleaners to restore performance and keep returns stable.'
  },
]



// 页面元信息
definePageMeta({
  name: 'Installer',
  title: 'Installer'
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

.installer {
  .installer-pc {
    background: #F9F9F9;

    .installer-header {
      height: 100vh;

      .installer-header-bg {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
      }

      .installer-header-content {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: fluid(16px, 165, 165);
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: fluid(16px, 80, 80);
        color: #FFFFFF;
        line-height: fluid(16px, 112, 112);
        text-align: center;
        font-style: normal;
      }

      .installer-scroll {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: fluid(16px, 35, 35);
        z-index: 2;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: fluid(16px, 20, 20);
        color: #FFFFFF;
        line-height: fluid(16px, 28, 28);
        font-style: normal;

        .installer-scroll-icon {
          width: fluid(16px, 40, 40);
          height: fluid(16px, 44, 44);
          margin: 0 auto;
          display: block;
          margin-top: fluid(16px, 18, 18);
          animation: bounceY 1.4s ease-in-out infinite;
          will-change: transform;
        }
      }

      @keyframes bounceY {

        0%,
        100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(8px);
        }
      }
    }

    .installer-content {
      padding: 0 fluid(16px, 124, 124) fluid(16px, 137, 137) fluid(16px, 124, 124);

      .installer-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: fluid(16px, 64, 64);
        color: #222222;
        line-height: fluid(16px, 90, 90);
        text-align: center;
        font-style: normal;
        margin: fluid(16px, 80, 80) 0;
      }

      .installation-content {
        width: 100%;
        position: relative;

        .installation-content-img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          display: block;
        }

        .step-content {
          position: absolute;
          width: fluid(16px, 579, 579);
          height: 100%;
          top: 0;
          box-sizing: border-box;
          right: fluid(16px, 108, 108);
          background-color: rgba(47, 194, 191, 1);
          padding: fluid(16px, 70, 70) fluid(16px, 62, 62);

          .setp-content-title {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: fluid(16px, 50, 50);
            color: #FFFFFF;
            line-height: fluid(16px, 70, 70);
            text-align: left;
            font-style: normal;
          }

          .setp-content-desc {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: fluid(16px, 28, 28);
            color: #FFFFFF;
            line-height: fluid(16px, 40, 40);
            text-align: justify;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>
  
    