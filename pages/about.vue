<template>
  <div class="about-pc only-desktop">
    <section class="about-section">
      <div class="title">About Us</div>
      <div class="about-section-content">
        <img class="about-us-bg" src="~/assets/image/about-us-bg.webp" alt="">
        <div class="about-us-content">
          We are building the grid of the future. SolarAI combines AI, big data and machine learning to turn every home
          into <text style="font-weight: 600;">an Intelligent Distributed Energy Resource (iDER).</text> We don't just
          help you save money; we empower you to
          participate in the real-time energy market, making the grid safer, greener, and more efficient for everyone.
        </div>
      </div>
    </section>
    <section class="core-section">
      <div class="title">Core Members</div>
      <div class="about-section-content">
        <img class="about-core-bg" src="~/assets/image/about-core-bg.webp" alt="">
        <div class="about-core-content">
          <text style="font-weight: 600;">SolarAI is built by Giants of the Tech World.</text> SolarAI wasn't founded by
          sales reps; it was engineered by data
          scientists. Our leadership team brings decades of experience from <text style="font-weight: 600;"> Microsoft,
            Intel, Oracle and Google.</text> We have
          built the analytics platforms used by major U.S. utility companies, and now we are bringing that utility-grade
          intelligence to your home.
        </div>
      </div>
    </section>
  </div>
  <div class="about-mobile only-mobile">
    <section class="about-section">
      <div class="title">About Us</div>
      <div class="about-section-content">
        <img class="about-us-bg" src="~/assets/image/about-us-bg-mobile.webp" alt="">
        <div class="about-us-content">
          We are building the grid of the future. SolarAI combines AI, big data and machine learning to turn every home
          into <text style="font-weight: 600;">an Intelligent Distributed Energy Resource (iDER).</text> We don't just
          help you save money; we empower you to
          participate in the real-time energy market, making the grid safer, greener, and more efficient for everyone.
        </div>
      </div>
    </section>

    <section class="core-section">
      <div class="title">Core Members</div>
      <div class="about-section-content">
        <img class="about-core-bg" src="~/assets/image/about-core-bg-mobile.webp" alt="">
        <div class="about-core-content">
          <text style="font-weight: 600;">SolarAI is built by Giants of the Tech World.</text> SolarAI wasn't founded by
          sales reps; it was engineered by data
          scientists. Our leadership team brings decades of experience from <text style="font-weight: 600;"> Microsoft,
            Intel, Oracle and Google.</text> We have
          built the analytics platforms used by major U.S. utility companies, and now we are bringing that utility-grade
          intelligence to your home.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'About',
  title: 'About'
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

.about-pc {
  background: #F9F9F9;



  .about-section {
    padding-top: fluid(16px, 60, 60);

    .title {
      margin: fluid(16px, 80, 80);
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: fluid(16px, 54, 54);
      color: #222222;
      line-height: fluid(16px, 90, 90);
      text-align: center;
      font-style: normal;
    }

    .about-section-content {
      position: relative;

      .about-us-bg {
        width: 54%;
        height: auto;
        display: block;
      }

      .about-us-content {
        width: 55%;
        padding: fluid(16px, 50, 50) fluid(16px, 140, 140) fluid(16px, 150, 150) fluid(16px, 80, 80);
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: fluid(16px, 26, 26);
        color: #222222;
        line-height: fluid(16px, 45, 45);
        font-style: normal;
        position: absolute;
        right: 0;
        bottom: 0;
        background: #FFFFFF;
        border-radius: fluid(16px, 30, 30) 0px 0px 0px;
      }
    }
  }

  .corporate-section {
    .title {
      margin: fluid(16px, 80, 80);
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: fluid(16px, 64, 64);
      color: #222222;
      line-height: fluid(16px, 90, 90);
      text-align: center;
      font-style: normal;
    }

    .about-section-content {
      position: relative;

      .about-corporate-bg {
        width: 100%;
        height: auto;
        display: block;
      }

      .about-corporate-content {
        position: absolute;
        top: 30%;
        width: 90%;
        box-sizing: border-box;
        padding: 0 fluid(16px, 200, 200);
        left: 50%;
        transform: translateX(-50%);

        .corporate-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: fluid(16px, 64, 64);
          color: #FFFFFF;
          line-height: fluid(16px, 90, 90);
          text-align: center;
          width: 100%;
          font-style: normal;
          margin-bottom: fluid(16px, 40, 40);
        }

        .corporate-desc {
          font-family: 'Poppins', sans-serif;
          font-weight: 100;
          font-size: fluid(16px, 74, 74);
          color: #FFFFFF;
          line-height: fluid(16px, 103, 103);
          text-align: center;
          width: 100%;
          font-style: normal;
          margin-bottom: fluid(16px, 100, 100);
        }

        .corporate-card {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .corporate-card-item {
            cursor: pointer;
            width: fluid(16px, 400, 400);
            height: fluid(16px, 344, 344);
            background: #FFFFFF;
            border-radius: fluid(16px, 30, 30);
            box-sizing: border-box;
            padding: fluid(16px, 40, 40) fluid(16px, 48, 48) fluid(16px, 60, 60) fluid(16px, 48, 48);
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            /* 初始无阴影 */
            transition: box-shadow .2s ease, transform .2s ease;

            .corporate-card-item-title {
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
              font-size: fluid(16px, 40, 40);
              color: #000000;
              line-height: fluid(16px, 56, 56);
              font-style: normal;
            }

            .corporate-card-item-content {

              font-family: 'Poppins', sans-serif;
              font-weight: 300;
              font-size: fluid(16px, 24, 24);
              color: #222222;
              line-height: fluid(16px, 33, 33);
              text-align: left;
              font-style: normal;
            }
          }

          .corporate-card-item:hover {
            background: #2FC2BF;
            /* 轻微浮起的阴影效果 */
            box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 3px 6px rgba(0, 0, 0, .08);
            transform: translateY(-8px);

            .corporate-card-item-title {
              color: #ffffff;
            }

            .corporate-card-item-content {
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .technical-section {
    .title {
      margin: fluid(16px, 80, 80);
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: fluid(16px, 64, 64);
      color: #222222;
      line-height: fluid(16px, 90, 90);
      text-align: center;
      font-style: normal;
      margin-top: fluid(16px, 300, 300);
    }

    .about-section-content {
      position: relative;

      .about-technical-bg {
        width: 100%;
        height: auto;
        display: block;
      }

      .about-technical-content {
        position: absolute;
        top: 30%;
        width: 100%;

        .technical-title {
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-weight: bold;
          font-size: fluid(16px, 180, 180);
          color: #FFFFFF;
          line-height: fluid(16px, 216, 216);
          text-align: center;
          font-style: normal;

          span {
            font-size: fluid(16px, 64, 64);
            font-weight: normal;

          }
        }

        .technical-desc {
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-weight: 100;
          font-size: fluid(16px, 74, 74);
          color: #FFFFFF;
          line-height: fluid(16px, 103, 103);
          text-align: center;
          font-style: normal;
        }
      }

    }
  }

  .core-section {
    margin: 0 fluid(16px, 210, 210);
    padding-bottom: fluid(16px, 135, 135);

    .title {
      margin: fluid(16px, 80, 80);
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: fluid(16px, 54, 54);
      color: #222222;
      line-height: fluid(16px, 90, 90);
      text-align: center;
      font-style: normal;
    }

    .about-section-content {
      background-color: #ffffff;
      display: flex;

      .about-core-bg {
        width: 45%;
        height: auto;
        display: block;
      }

      .about-core-content {
        flex: 1;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: fluid(16px, 28, 28);
        color: #222222;
        line-height: fluid(16px, 50, 50);
        text-align: left;
        font-style: normal;
        padding: fluid(16px, 50, 50);
      }
    }
  }
}

.about-mobile {
  background: #F9F9F9;

  .about-section {
    padding-top: 3.75rem;
    height: 34.375rem;

    .title {
      margin: 1.5rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.375rem;
      color: #222222;
      line-height: 1.875rem;
      text-align: center;
      font-style: normal;
    }

    .about-section-content {
      position: relative;

      .about-us-bg {
        width: 100%;
        height: auto;
        display: block;
      }

      .about-us-content {
        width: 21.4375rem;
        box-sizing: border-box;
        padding: 1.5rem 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 0.875rem;
        color: #222222;
        line-height: 1.3125rem;
        font-style: normal;
        position: absolute;
        top: 12rem;
        left: 50%;
        margin: 0 auto;
        transform: translateX(-50%);
        background: #FFFFFF;
        border-radius: 0.25rem;
      }
    }
  }

  .corporate-section {
    .title {
      margin: 1.5rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.375rem;
      color: #222222;
      line-height: 1.875rem;
      text-align: center;
      font-style: normal;
    }

    .about-section-content {
      position: relative;

      .about-corporate-bg {
        width: 100%;
        height: auto;
        display: block;
      }

      .about-corporate-content {
        position: absolute;
        top: 30%;
        width: 100%;
        box-sizing: border-box;
        padding: 0 1rem;
        left: 0;

        .corporate-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 1.875rem;
          color: #FFFFFF;
          line-height: 2.625rem;
          text-align: center;
          width: 100%;
          font-style: normal;
          margin-bottom: 0.5rem;
        }

        .corporate-desc {
          font-family: 'Poppins', sans-serif;
          font-weight: 100;
          font-size: 1.5rem;
          color: #FFFFFF;
          line-height: 2.0625rem;
          text-align: center;
          width: 100%;
          font-style: normal;
          margin-bottom: 2.5rem;
        }

        .corporate-card {
          width: 21.4375rem;
          margin: 0 auto;
          background: #FFFFFF;
          padding-top: 1.125rem;

          .corporate-card-item {
            cursor: pointer;
            width: 100%;
            box-sizing: border-box;
            padding: 0 1.125rem 1.125rem 1.125rem;

            .corporate-card-item-title {
              font-family: 'Poppins', sans-serif;
              font-weight: 500;
              font-size: 1.25rem;
              color: #000000;
              text-align: center;
              line-height: 1.75rem;
              font-style: normal;
            }

            .corporate-card-item-content {
              font-family: 'Poppins', sans-serif;
              font-weight: 300;
              font-size: 0.75rem;
              color: #222222;
              line-height: 1.0625rem;
              text-align: left;
              font-style: normal;
              margin-top: 0.5rem;
            }

            .corporate-card-item-icon {
              width: 4.25rem;
              height: 0.1875rem;
              background: #2F2F2F;
              margin: 0 auto;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }

  .technical-section {
    margin-top: 20.625rem;

    .title {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.375rem;
      color: #222222;
      line-height: 1.875rem;
      text-align: center;
      font-style: normal;
      margin: 1.5rem 0;
    }

    .about-section-content {
      position: relative;

      .about-technical-bg {
        width: 100%;
        height: auto;
        display: block;
      }

      .about-technical-content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;

        .technical-title {
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-weight: bold;
          font-size: 4.5rem;
          color: #FFFFFF;
          line-height: 5.375rem;
          text-align: center;
          font-style: normal;

          span {
            font-size: 1.6rem;
            font-weight: normal;
          }
        }

        .technical-desc {
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-weight: 100;
          font-size: 1.5rem;
          color: #FFFFFF;
          line-height: 2.0625rem;
          text-align: center;
          font-style: normal;
        }
      }
    }
  }

  .core-section {
    padding-bottom: 12.5rem;

    .title {
      margin: 1.5rem 0;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.375rem;
      color: #222222;
      line-height: 1.875rem;
      text-align: center;
      font-style: normal;
    }

    .about-section-content {
      position: relative;

      .about-core-bg {
        width: 100%;
        height: auto;
        display: block;
      }

      .about-core-content {
        position: absolute;
        background-color: #ffffff;
        width: 21.4375rem;
        top: 9.375rem;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 0.875rem;
        color: #222222;
        line-height: 1.3125rem;
        text-align: left;
        font-style: normal;
        padding: 1.5rem 1rem;
      }
    }
  }
}

</style>