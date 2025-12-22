<template>
    <div class="outlook-pc only-desktop">
        <section class="outlook-header-section">
            <img class="outlook-header-section-bg" src="~/assets/image/outlook-header-bg.webp" alt="">
            <div class="outlook-header-section-content">
                <div class="outlook-header-section-title">From Home Energy to Global Stability by Intelligent
                    Distributed Energy Resource (iDER)</div>
                <div class="outlook-header-section-desc">
                    <span style="font-weight: 600;">iDER is turning passive batteries into active grid assets.</span>
                    Renewable energy is powerful, but
                    unpredictable. The grid of the future needs stability, not just capacity. <span
                        style="font-weight: 600;">SolarAI bridges the gap.</span>
                    By transforming individual homes into intelligent Distributed Energy Resources (iDERs), we dampen
                    the volatility of renewables—smoothing out fluctuations and providing real-time support to the grid.
                    The result? A power system that is smarter, more flexible, and more resilient. And for our users, it
                    means their equipment isn't just saving money—it's <span style="font-weight: 600;">earning
                        revenue</span> by serving the community.
                </div>
            </div>
        </section>
        <section class="intelligent-section">
            <div class="section-title">Intelligent Distributed Energy Resouce</div>
            <img class="outlook-intelligent" src="~/assets/image/outlook-intelligent.webp" alt="">
        </section>
        <section class="cooperation-section">
            <div class="cooperation-section-title">Cooperation Partners</div>
            <div class="cooperation-section-content">
                <div class="cooperation-item"><img src="~/assets/image/alpha-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/tigo-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/tesla-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/google-nest-logo.webp" alt=""></div>
            </div>
        </section>
        <section class="footer-section">
            <img class="footer-bg" src="~/assets/image/outlook-footer-bg.webp" alt="">
        </section>
    </div>
    <div class="outlook-mobile only-mobile">
        <section class="outlook-header-section">
            <img class="outlook-header-section-bg" src="~/assets/image/outlook-header-mobile-bg.webp" alt="">
            <div class="outlook-header-section-title">From Home Energy to Global Stability by Intelligent
                Distributed Energy Resource (iDER)</div>
            <div class="outlook-header-section-desc">
                <span style="font-weight: 600;">iDER is turning passive batteries into active grid assets.</span>
                Renewable energy is powerful, but
                unpredictable. The grid of the future needs stability, not just capacity. <span
                    style="font-weight: 600;">SolarAI bridges the gap.</span>
                By transforming individual homes into intelligent Distributed Energy Resources (iDERs), we dampen
                the volatility of renewables—smoothing out fluctuations and providing real-time support to the grid.
                The result? A power system that is smarter, more flexible, and more resilient. And for our users, it
                means their equipment isn't just saving money—it's <span style="font-weight: 600;">earning
                    revenue</span> by serving the community.
            </div>
        </section>
        <section class="intelligent-section">
            <div class="section-title">Intelligent Distributed Energy Resouce</div>
            <img class="outlook-intelligent" src="~/assets/image/outlook-intelligent-mobile.webp" alt="">
        </section>
        <section class="cooperation-section">
            <div class="cooperation-section-title">Cooperation Partners</div>
            <div class="cooperation-section-content">
                <div class="cooperation-item"><img src="~/assets/image/alpha-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/tigo-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/tesla-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/google-nest-logo.webp" alt=""></div>
            </div>
        </section>
        <section class="footer-section">
            <img class="footer-bg" src="~/assets/image/outlook-footer-bg.webp" alt="">
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'Outlook',
    title: 'Outlook',
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

.outlook-pc {
    background: #F9F9F9;

    .outlook-header-section {
        width: 100%;
        height: 100vh;
        position: relative;

        .outlook-header-section-bg {
            width: 100%;
            height: 100%;
            display: block;
        }

        .outlook-header-section-content {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - fluid(16px, 420, 420));
            padding: fluid(16px, 20, 20) fluid(16px, 40, 40);
            background: #2C8A85;

            .outlook-header-section-title {
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: fluid(16px, 54, 54);
                color: #FFFFFF;
                line-height: fluid(16px, 73, 73);
                text-align: center;
                font-style: normal;
            }

            .outlook-header-section-desc {
                font-family: 'Poppins', sans-serif;
                font-weight: 100;
                font-size: fluid(16px, 28, 28);
                color: #FFFFFF;
                line-height: fluid(16px, 40, 40);
                text-align: left;
                margin-top: fluid(16px, 36, 36);
                font-style: normal;
            }
        }
    }

    .intelligent-section {
        margin: 0 fluid(16px, 210, 210);

        .section-title {
            margin: fluid(16px, 80, 80);
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: fluid(16px, 54, 54);
            color: #222222;
            line-height: fluid(16px, 73, 73);
            text-align: center;
            font-style: normal;
        }

        .outlook-intelligent {
            width: 100%;
        }
    }

    .cooperation-section {
        .cooperation-section-title {
            margin: fluid(16px, 80, 80);
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: fluid(16px, 54, 54);
            color: #222222;
            line-height: fluid(16px, 73, 73);
            text-align: center;
            font-style: normal;
        }

        .cooperation-section-content {
            display: flex;
            align-items: center;
            align-items: center;
            padding: 0 fluid(16px, 210, 210);

            .cooperation-item {
                flex: 1;

                img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
            }
        }
    }

    .footer-section {
        margin-top: fluid(16px, 24, 24);

        .footer-bg {
            width: 100%;
            display: block;
        }
    }
}

.outlook-mobile {
  background: #F9F9F9;
  padding-top: 3.75rem;

  .outlook-header-section {
    position: relative;

    .outlook-header-section-bg {
      width: 100%;
      display: block;
    }

    .outlook-header-section-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      color: #FFFFFF;
      line-height: 1.8125rem;
      text-align: center;
      font-style: normal;
      position: absolute;
      bottom: 18.75rem;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 3rem);
      background: rgba(47, 194, 191, 0.6);
      padding: 0.625rem 1.25rem;
    }

    .outlook-header-section-desc {
      padding: 1.25rem 1.5rem;
      background: #222222;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 0.875rem;
      color: #FFFFFF;
      line-height: 1.25rem;
      text-align: left;
      font-style: normal;
    }
  }

  .intelligent-section {
    padding: 0 1rem;

    .section-title {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      padding: 1.5rem 0;
      font-size: 1.375rem;
      color: #222222;
      line-height: 1.875rem;
      text-align: center;
      font-style: normal;
    }

    .outlook-intelligent {
      width: 100%;
      display: block;
    }
  }

  .cooperation-section {
    .cooperation-section-title {
      font-family: 'Poppins', sans-serif;
      padding: 1.5rem 0;
      font-weight: 600;
      font-size: 1.375rem;
      color: #222222;
      line-height: 1.875rem;
      text-align: center;
      font-style: normal;
    }

    .cooperation-section-content {
      display: flex;
      align-items: center;
      align-items: center;
      padding: 0 0.75rem;

      .cooperation-item {
        flex: 1;

        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  .footer-section {
    margin-top: fluid(16px, 24, 24);

    .footer-bg {
      width: 100%;
      display: block;
    }
  }
}

</style>