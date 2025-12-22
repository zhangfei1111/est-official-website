<template>
  <div class="installer">
    <div class="installer-pc only-desktop">
      <section class="installer-header">
        <img class="installer-header-bg" src="../assets/image/installer-header-bg.webp" alt="">
        <div class="installer-header-content">
          <div class="installer-header-title">
            Empowering Installers with Speed, Insight, and Profit.
          </div>
          <div class="installer-header-text">
            SolarAI isn't just a product; it's a partner that lowers your operational costs and creates new revenue
            streams long after the install is done.
          </div>
        </div>
        <div class="installer-scroll">
          Scroll to see more
          <img class="installer-scroll-icon" src="../assets/image/home-introduce-scroll.webp" alt="" />
        </div>
      </section>
      <section class="installer-content">
        <div class="installer-title">Easy installation</div>
        <v-carousel height="auto">
          <v-carousel-item>
            <div class="installation-content">
              <img class="installation-content-img" src="~/assets/image/installer-1.webp" alt="">
              <div class="step-content">
                <div class="setp-content-title">Streamlined Installation</div>
                <div class="setp-content-desc"><span style="font-weight: 600;">Plug-and-Play Commissioning.</span> Time
                  on the roof is your biggest cost. SolarAI is designed for speed, featuring a universal 'Operating
                  System' that integrates seamlessly with major inverter and battery brands. Our intuitive Installer App
                  simplifies configuration, allowing you to commission systems in minutes—not hours—so your crew can
                  move to the next job faster.</div>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="installation-content">
              <img class="installation-content-img" src="~/assets/image/installer-2.webp" alt="">
              <div class="step-content">
                <div class="setp-content-title">Smarter Operations</div>
                <div class="setp-content-desc"><span style="font-weight: 600;">AI-Driven Remote Diagnostics.</span> Stop
                  rolling trucks for false alarms. SolarAI’s predictive engine monitors your entire fleet 24/7,
                  identifying specific hardware faults or efficiency drops remotely. You get precise fault analysis
                  before you leave the office, allowing you to troubleshoot problems from your desk or ensure
                  technicians arrive with exactly the right parts.</div>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="installation-content">
              <img class="installation-content-img" src="~/assets/image/installer-3.webp" alt="">
              <div class="step-content">
                <div class="setp-content-title">Business Growth</div>
                <div class="setp-content-desc"><span style="font-weight: 600;">Turn O&M Into a Recurring Revenue
                    Stream.</span> Don't just install and leave. SolarAI provides you with actionable opportunities for
                  ongoing service. Our system monitors fleet cleanliness and calculates the exact ROI of cleaning for
                  every homeowner. Instead of cold-calling, you can contact customers with data-backed proof—'Your
                  system is losing money due to debris'—creating a justified, profitable service call that customers
                  welcome.</div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>

      </section>
    </div>
    <div class="installer-mobile only-mobile">
      <section class="installer-header">
        <img class="installer-header-bg" src="../assets/image/installer-header-mobile-bg.webp" alt="">
        <div class="installer-header-title">
          Empowering Installers with Speed, Insight, and Profit.
        </div>
        <div class="installer-header-text">
          SolarAI isn't just a product; it's a partner that lowers your operational costs and creates new revenue
          streams long after the install is done.
        </div>
      </section>
      <section class="installer-content">
        <div class="installer-title">Easy installation</div>
        <div class="installer-content-carousel">
          <v-carousel height="auto" v-model="mobileIndex">
            <v-carousel-item src="~/assets/image/installer-mobile-1.webp" cover>
            </v-carousel-item>
            <v-carousel-item src="~/assets/image/installer-mobile-2.webp" cover>
            </v-carousel-item>
            <v-carousel-item src="~/assets/image/installer-mobile-3.webp" cover>
            </v-carousel-item>
          </v-carousel>
        </div>
        <!-- 文案：只显示当前一条，并做淡入淡出 -->
        <Transition name="fadeSwap" mode="out-in">
          <div class="installer-content-carousel-text" :key="mobileIndex">
            <div class="installer-content-carousel-text-title">
              {{ mobileSlides[mobileIndex].title }}
            </div>
            <div class="installer-content-carousel-text-desc" v-html="mobileSlides[mobileIndex].descHtml" />
          </div>
        </Transition>
        <!-- <div class="installer-content-carousel-text">
          <div class="installer-content-carousel-text-title">Streamlined Installation</div>
          <div class="installer-content-carousel-text-desc"><span style="font-weight: 600;">Plug-and-Play
              Commissioning.</span> Time
            on the roof is your biggest cost. SolarAI is designed for speed, featuring a universal 'Operating
            System' that integrates seamlessly with major inverter and battery brands. Our intuitive Installer App
            simplifies configuration, allowing you to commission systems in minutes—not hours—so your crew can
            move to the next job faster.</div>
        </div>
        <div class="installer-content-carousel-text">
          <div class="installer-content-carousel-text-title">Smarter Operations</div>
          <div class="installer-content-carousel-text-desc"><span style="font-weight: 600;">AI-Driven Remote
              Diagnostics.</span> Stop
            rolling trucks for false alarms. SolarAI’s predictive engine monitors your entire fleet 24/7,
            identifying specific hardware faults or efficiency drops remotely. You get precise fault analysis
            before you leave the office, allowing you to troubleshoot problems from your desk or ensure
            technicians arrive with exactly the right parts.</div>
        </div>
        <div class="installer-content-carousel-text">
          <div class="installer-content-carousel-text-title">Business Growth</div>
          <div class="installer-content-carousel-text-desc"><span style="font-weight: 600;">Turn O&M Into a Recurring
              Revenue
              Stream.</span> Don't just install and leave. SolarAI provides you with actionable opportunities for
            ongoing service. Our system monitors fleet cleanliness and calculates the exact ROI of cleaning for
            every homeowner. Instead of cold-calling, you can contact customers with data-backed proof—'Your
            system is losing money due to debris'—creating a justified, profitable service call that customers
            welcome.</div>
        </div> -->
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import img1 from '~/assets/image/installer-mobile-1.webp'
import img2 from '~/assets/image/installer-mobile-2.webp'
import img3 from '~/assets/image/installer-mobile-3.webp'
// 页面元信息
definePageMeta({
  name: 'Installer',
  title: 'Installer'
})
const mobileIndex = ref(0)
const mobileSlides = [
  {
    img: img1,
    title: 'Streamlined Installation',
    descHtml: `<span style="font-weight: 600;">Plug-and-Play
              Commissioning.</span> Time
            on the roof is your biggest cost. SolarAI is designed for speed, featuring a universal 'Operating
            System' that integrates seamlessly with major inverter and battery brands. Our intuitive Installer App
            simplifies configuration, allowing you to commission systems in minutes—not hours—so your crew can
            move to the next job faster.`,
  },
  {
    img: img2,
    title: 'Smarter Operations',
    descHtml: `<span style="font-weight: 600;">AI-Driven Remote
              Diagnostics.</span> Stop
            rolling trucks for false alarms. SolarAI’s predictive engine monitors your entire fleet 24/7,
            identifying specific hardware faults or efficiency drops remotely. You get precise fault analysis
            before you leave the office, allowing you to troubleshoot problems from your desk or ensure
            technicians arrive with exactly the right parts.`,
  },
  {
    img: img3,
    title: 'Business Growth',
    descHtml: `<span style="font-weight: 600;">Turn O&M Into a Recurring
              Revenue
              Stream.</span> Don't just install and leave. SolarAI provides you with actionable opportunities for
            ongoing service. Our system monitors fleet cleanliness and calculates the exact ROI of cleaning for
            every homeowner. Instead of cold-calling, you can contact customers with data-backed proof—'Your
            system is losing money due to debris'—creating a justified, profitable service call that customers
            welcome.`,
  },
]
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
        bottom: fluid(16px, 150, 150);
        ;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - fluid(16px, 360, 360));
        padding: fluid(16px, 20, 20) fluid(16px, 40, 40);

        .installer-header-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: fluid(16px, 54, 54);
          color: #FFFFFF;
          line-height: fluid(16px, 73, 73);
          text-align: center;
          font-style: normal;
        }

        .installer-header-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: fluid(16px, 28, 28);
          color: #FFFFFF;
          margin-top: 20px;
          line-height: fluid(16px, 40, 40);
          text-align: center;
          margin-top: fluid(16px, 36, 36);
          font-style: normal;
        }
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
        font-size: fluid(16px, 54, 54);
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
          width: fluid(16px, 600, 600);
          height: 100%;
          top: 0;
          box-sizing: border-box;
          right: fluid(16px, 88, 88);
          background-color: rgba(47, 194, 191, 1);
          padding: fluid(16px, 36, 36) fluid(16px, 62, 62);

          .setp-content-title {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: fluid(16px, 54, 54);
            color: #FFFFFF;
            font-weight: 600;
            line-height: fluid(16px, 73, 73);
            text-align: left;
            font-style: normal;
          }

          .setp-content-desc {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: fluid(16px, 28, 28);
            color: #FFFFFF;
            line-height: fluid(16px, 40, 40);
            margin-top: fluid(16px, 36, 36);
            font-style: normal;
          }
        }
      }
    }
  }

  .installer-mobile {
    background: #F9F9F9;
    padding-top: 3.75rem;

    .installer-header {
      position: relative;

      .installer-header-bg {
        display: block;
        width: 100%;
      }

      .installer-header-title {
        font-family: 'Poppins', sans-serif;
        position: absolute;
        bottom: 9.375rem;
        width: 100%;
        left: 0;
        font-weight: 600;
        font-size: 1.5rem;
        color: #FFFFFF;
        line-height: 1.875rem;
        text-align: center;
        font-style: normal;
      }

      .installer-header-text {
        background: #222222;
        padding: 1.25rem 1.875rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 0.875rem;
        color: #FFFFFF;
        line-height: 1.25rem;
        text-align: center;
        font-style: normal;
      }
    }

    .installer-content {
      .installer-content-carousel {
        padding: 0 1rem;
      }

      .installer-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1.375rem;
        color: #222222;
        line-height: 1.875rem;
        text-align: center;
        padding: 1.5rem 0;
        font-style: normal;
      }

      .installer-content-carousel-text {
        .installer-content-carousel-text-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.25rem;
          color: #222222;
          line-height: 1.75rem;
          text-align: center;
          padding: 1.5rem 0 1rem 0;
          font-style: normal;
        }

        .installer-content-carousel-text-desc {
          padding: 0 1.5rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 0.875rem;
          color: #222222;
          line-height: 1.25rem;
          text-align: justify;
          font-style: normal;
          margin-bottom: 1.5rem;
        }
      }
    }

    /* 文案切换动画：整体淡入淡出 + 轻微位移 */
    .fadeSwap-enter-active,
    .fadeSwap-leave-active {
      transition: opacity 0.45s ease, transform 0.45s ease;
    }

    .fadeSwap-enter-from {
      opacity: 0;
      transform: translateY(8px);
    }

    .fadeSwap-leave-to {
      opacity: 0;
      transform: translateY(-8px);
    }

    /* 让标题和正文“一个个慢慢出现”的感觉（延迟） */
    .fadeSwap-enter-from .installer-content-carousel-text-title,
    .fadeSwap-enter-from .installer-content-carousel-text-desc {
      opacity: 0;
      transform: translateY(8px);
    }

    .fadeSwap-enter-active .installer-content-carousel-text-title,
    .fadeSwap-enter-active .installer-content-carousel-text-desc {
      transition: opacity 0.45s ease, transform 0.45s ease;
    }

    .fadeSwap-enter-active .installer-content-carousel-text-title {
      transition-delay: 0.06s;
    }

    .fadeSwap-enter-active .installer-content-carousel-text-desc {
      transition-delay: 0.14s;
    }
  }

}
</style>