<template>
  <div class="about-pc only-desktop">
    <section class="header-section">
      <img class="header-section-bg" src="~/assets/image/about-header-bg.webp" alt="">
      <div class="header-section-content">SolarAI Technologies</div>
    </section>
    <section class="about-section">
      <div class="title">About Us</div>
      <div class="about-section-content">
        <img class="about-us-bg" src="~/assets/image/about-us-bg.webp" alt="">
        <div class="about-us-content">
          江阴橙储智能系统有限公司（SolarAI Technologies），成立于 2023 年 6
          月。我们运用大数据、机器学习与人工智能，面向北美与欧洲的可准实时电力市场，为含家庭分布式光伏+储能的新能源生态提供最优化的能源监控、管理与交易系统。<br>
          面向趋势，我们基于多项专利打造 AI-HEMS 平台，让每个家庭成为 iDER（智能分布式能源系统），参与准实时市场交易，在最大化收益的同时，让电网更安全、高效、绿色低碳。
        </div>
      </div>
    </section>
    <section class="corporate-section">
      <div class="title">Corporate Philosophy</div>
      <div class="about-section-content">
        <img class="about-corporate-bg" src="~/assets/image/about-corporate-bg.webp" alt="">
        <div class="about-corporate-content">
          <div class="corporate-title">橙储智能</div>
          <div class="corporate-desc">助力更灵活、更稳定的未来电网</div>
          <div class="corporate-card">
            <div class="corporate-card-item">
              <div class="corporate-card-item-title">远景</div>
              <div class="corporate-card-item-content">让千家万户的光伏与储能通过 AI 成为“可交易、可调度”的 iDER，助力更灵活、更稳定的未来电网</div>
            </div>
            <div class="corporate-card-item">
              <div class="corporate-card-item-title">使命</div>
              <div class="corporate-card-item-content">以 AI-HEMS 为核心，结合电价/负荷/发电预测与市场机制，持续为用户与电网创造更大综合价值</div>
            </div>
            <div class="corporate-card-item">
              <div class="corporate-card-item-title">方法论</div>
              <div class="corporate-card-item-content">每 15 分钟滚动调度、48 小时前瞻预测，已集成 Tesla EV 自动充电调度与 Google Nest
                温控；在波特兰、洛杉矶等地的验证系统里，月度增益平均提升约 102%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="technical-section">
      <div class="title">Technical Advantage</div>
      <div class="about-section-content">
        <img class="about-technical-bg" src="~/assets/image/about-technical-bg.webp" alt="">
        <div class="about-technical-content">
          <div class="technical-title">10<span>+</span></div>
          <div class="technical-desc">美国电网智能化 & ML 积累</div>
        </div>
      </div>
    </section>
    <section class="core-section">
      <div class="title">Core Members</div>
      <div class="about-section-content">
        <img class="about-core-bg" src="~/assets/image/about-core-bg.webp" alt="">
        <div class="about-core-content">
          橙储智能由暨阳电力和多位曾服务于美国微软、英特尔和甲骨文等科技公司的核心成员共同创办。其主要创始人过去开发的智能电网数据数据分析平台，包括用电行为预测、设备负载和故障预测、需求响应管理和结算、智能化共享户用储能试点等被包括美国多家智能电网公司验证和应用，赋予能源供应商迅速部署新能源业务的能力，包括电气化改造，太阳能和储能等分布式新能源资源的采用等，并帮助客户将能源使用转移到一天中能源最可持续的时段
        </div>
      </div>
    </section>
   
  </div>
</template>

<script setup lang="ts">

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

  .header-section {
    position: relative;

    .header-section-bg {
      width: 100%;
      height: auto;
      display: block;
    }

    .header-section-content {
      font-family: PingFangSC, PingFang SC;
      font-weight: 300;
      width: 100%;
      font-size: fluid(16px, 74, 74);
      color: #FFFFFF;
      line-height: fluid(16px, 103, 103);
      text-align: center;
      font-style: normal;
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .about-section {
    .title {
      margin: fluid(16px, 80, 80);
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: fluid(16px, 64, 64);
      color: #222222;
      line-height: fluid(16px, 90, 90);
      text-align: center;
      font-style: normal;
    }

    .about-section-content {
      position: relative;

      .about-us-bg {
        width: 60%;
        height: auto;
        display: block;
      }

      .about-us-content {
        width: 50%;
        padding: fluid(16px, 150, 150) fluid(16px, 140, 140) fluid(16px, 150, 150) fluid(16px, 80, 80);
        font-family: PingFangSC, PingFang SC;
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
      font-family: PingFangSC, PingFang SC;
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
        width: 100%;
        box-sizing: border-box;
        padding: 0 fluid(16px, 200, 200);
        left: 0;

        .corporate-title {
          font-family: PingFangSC, PingFang SC;
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
          font-family: PingFangSC, PingFang SC;
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
            height: fluid(16px, 484, 484);
            background: #FFFFFF;
            border-radius: fluid(16px, 30, 30);
            box-sizing: border-box;
            padding: fluid(16px, 80, 80) fluid(16px, 48, 48) fluid(16px, 60, 60) fluid(16px, 48, 48);
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            /* 初始无阴影 */
            transition: box-shadow .2s ease, transform .2s ease;

            .corporate-card-item-title {
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              font-size: fluid(16px, 40, 40);
              color: #000000;
              line-height: fluid(16px, 56, 56);
              font-style: normal;
            }

            .corporate-card-item-content {

              font-family: PingFangSC, PingFang SC;
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
      font-family: PingFangSC, PingFang SC;
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
          font-family: DINCondensed, DINCondensed;
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
          font-family: PingFangSC, PingFang SC;
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
  .core-section{
    margin: 0 fluid(16px, 210, 210);
    .title{
      margin: fluid(16px, 80, 80);
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: fluid(16px, 64, 64);
      color: #222222;
      line-height: fluid(16px, 90, 90);
      text-align: center;
      font-style: normal;
    }
    .about-section-content{
    background-color: #ffffff;
    display: flex;
      .about-core-bg{
        width: 45%;
        height: auto;
        display: block;
      }
      .about-core-content{
        flex: 1;
        box-sizing: border-box;
        font-family: PingFangSC, PingFang SC;
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
</style>