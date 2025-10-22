<template>
    <div class="home">
      <div class="home-pc only-desktop">
        <section class="home-introduce-section" v-inview data-inview-once="true">
          <video ref="homeIntroduceRef" class="home-introduce-video" autoplay muted playsinline loop preload="auto"
            controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
            src="../assets/video/home-introduce.mp4"></video>
          <div class="home-introduce-content" data-stagger style="--stagger-step:140ms">
            <div class="home-introduce-text" data-ani="clip-reveal" style="--i:0">
              <span>0</span> Down · <span>0</span> Monthly · <span>0</span> Emission
            </div>
            <div class="home-introduce-more" data-ani="fade-up" style="--i:1">
              Learn More
              <img class="home-introduce-more-icon" src="../assets/image/home-introduce-more.webp" alt="" />
            </div>
          </div>
          <div class="home-introduce-scroll" data-ani="fade-up" style="--i:2">
            Scroll to see more
            <img class="home-introduce-scroll-icon" src="../assets/image/home-introduce-scroll.webp" alt="" />
          </div>
        </section>
        <section class="home-select-section" v-inview data-inview-once="true">
          <div class="home-select-name" data-ani="fade-up" style="--i:0" data-stagger>
            Why Select SolarAI
          </div>
          <div class="home-select-desc" data-ani="fade-up" style="--i:1">
            With just one click, SolarAI effortlessly maximises savings. It intelligently minimises grid reliance by
            optimising the use of solar energy and battery storage, offering you hassle-free, efficient energy management.
          </div>
          <div class="home-select-tab" data-stagger style="--stagger-step:120ms">
            <div class="home-select-tab-item" data-ani="fade-up" style="--i:0">
              <img class="home-select-tab-item-icon" src="../assets/image/home-selected-0Down.webp" alt="" />
              0Down 0Monthly 0Emission
            </div>
            <div class="home-select-tab-item" data-ani="fade-up" style="--i:1">
              <img class="home-select-tab-item-icon" src="../assets/image/home-unselected-smarter.webp" alt="" />
              Smarter AI, More Revenue
            </div>
            <div class="home-select-tab-item" data-ani="fade-up" style="--i:2">
              <img class="home-select-tab-item-icon" src="../assets/image/home-unselected-broad.webp" alt="" />
              Broad Connectivity
            </div>
            <div class="home-select-tab-item" data-ani="fade-up" style="--i:3">
              <img class="home-select-tab-item-icon" src="../assets/image/home-unselected-seamless.webp" alt="" />
              Seamless Integration
            </div>
          </div>
          <section class="section-0down" v-inview data-inview-once="true">
            <video ref="home0downRef" class="home-0down-video" autoplay muted playsinline loop preload="auto"
              controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
              src="../assets/video/home-0down.mp4"></video>
            <div class="home-0down-content" data-stagger style="--stagger-step:140ms">
              <div class="home-0down-title" data-ani="fade-up" style="--i:0">0 Down 0 Monthly 0 Emission</div>
              <div class="home-0down-desc" data-ani="fade-up" style="--i:1">
                Switch to solar with 0 upfront cost and save immediately. Save up to 30%~80% on your current electricity
                bill.
                The solar panels are yours at the end of the payment period. No hidden fees, no extra costs
                The energy revolution starts at home, and with the full power of sonnenHome you're all set for a clean
                energy future.
              </div>
              <div class="home-0down-icon" data-ani="fade-up" style="--i:2"></div>
            </div>
          </section>
          <section class="section-smarter js-parallax" v-inview data-inview-once="true">
            <img class="parallax__img" src="../assets/image/home-smarter-bg.webp" alt="">
            <div class="home-smarter-content" data-stagger style="--stagger-step:140ms">
              <div class="home-smarter-title" data-ani="fade-up" style="--i:0">Smarter AI, More
                Revenue，<span>30%~80%+</span></div>
              <div class="home-smarter-desc" data-ani="fade-up" style="--i:1">
                The verified residential iDER (intelligent Distributed Energy Resource) system, with its self-developed AI
                model, increases additional revenue by over 30%~80%
              </div>
              <div class="home-smarter-icon" data-ani="fade-up" style="--i:2"></div>
            </div>
          </section>
          <section class="section-broad js-parallax" v-inview data-inview-once="true">
            <img class="parallax__img" src="../assets/image/home-broad-bg.png" alt="">
            <div class="home-broad-content" data-stagger style="--stagger-step:140ms">
              <div class="home-broad-title" data-ani="fade-up" style="--i:0">Broad Connectivity</div>
              <div class="home-broad-desc" data-ani="fade-up" style="--i:1">
                The most easy & diverse connection methods in the industry
              </div>
              <div class="home-broad-icon" data-ani="fade-up" style="--i:2"></div>
            </div>
          </section>
          <section class="section-seamless js-parallax" v-inview data-inview-once="true">
            <img class="parallax__img" src="../assets/image/home-seamless-bg.png" alt="">
            <div class="home-seamless-content" data-stagger style="--stagger-step:140ms">
              <div class="home-seamless-title" data-ani="fade-up" style="--i:0">Seamless Integration</div>
              <div class="home-seamless-desc" data-ani="fade-up" style="--i:1">
                All sonnenHome solutions interconnect intelligently to optimize your energy use, without any additional
                effort!
              </div>
              <div class="home-seamless-icon" data-ani="fade-up" style="--i:2"></div>
            </div>
          </section>
        </section>
  
      </div>
      <div class="home-mobile only-mobile">手机端</div>
    </div>
  </template>
    
  <script setup lang="ts">
  
  
  import { onMounted, ref, onUnmounted, nextTick } from 'vue'
  
  const homeIntroduceRef = ref<HTMLVideoElement | null>(null)
  
  // —— 1) 移动端 100vh 修复：给 CSS 注入 --vh —— //
  const setVH = () => {
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px')
  }
  
  // —— 2) 视差滚动（与 v-inview 无冲突） —— //
  // 让带 .js-parallax 的 section 内部的 .parallax__img 随滚动轻微位移
  let onScroll: (() => void) | null = null
  const setupParallax = () => {
    const secs = Array.from(document.querySelectorAll<HTMLElement>('.js-parallax'))
    if (!secs.length) return
    const vh = window.innerHeight || document.documentElement.clientHeight
    onScroll = () => {
      secs.forEach(sec => {
        const img = sec.querySelector<HTMLElement>('.parallax__img')
        if (!img) return
        const rect = sec.getBoundingClientRect()
        const total = rect.height + vh
        const progress = Math.min(1, Math.max(0, (vh - rect.top) / total))
        const y = (1 - progress) * 8 // 与 qqq.html 同步：最大 8%
        img.style.transform = `translateY(${y}%)`
        img.style.opacity = '1'
      })
    }
    window.addEventListener('scroll', onScroll!, { passive: true })
    onScroll!()
  }
  onMounted(async () => {
    // iOS/部分浏览器可能需要主动触发一次播放
    homeIntroduceRef.value?.play().catch(() => {
      // 如果首次失败，等页面从后台回前台再试一次
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) homeIntroduceRef.value?.play().catch(() => { })
      }, { once: true })
    })
    // —— 设定 --vh，并监听窗口变化（横竖屏/resize） —— //
    setVH()
    window.addEventListener('resize', setVH)
    window.addEventListener('orientationchange', setVH)
  
    // —— 视差初始化放到 nextTick，确保 DOM 渲染完 —— //
    await nextTick()
    setupParallax()
  
  })
  onUnmounted(() => {
    window.removeEventListener('resize', setVH)
    window.removeEventListener('orientationchange', setVH)
    if (onScroll) window.removeEventListener('scroll', onScroll)
  })
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
  
  .home {
    .home-pc {
      .home-introduce-section {
        position: relative;
        height: calc(var(--vh) * 100);
        width: 100%;
  
        .home-introduce-video {
          width: 100%;
          height: 100%;
          object-fit: fill;
          display: block;
        }
  
        .home-introduce-content {
          position: absolute;
          z-index: 1;
          width: 100%;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          font-size: fluid(16px, 72, 72);
          color: #fff;
          font-weight: 500;
  
          span {
            font-weight: 600;
            font-size: fluid(16px, 90, 90);
            color: #02B5B1;
          }
  
          .home-introduce-text {
            margin-bottom: fluid(16px, 70, 70);
  
          }
  
          .home-introduce-more {
            width: fluid(16px, 258, 258);
            height: fluid(16px, 64, 64);
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: fluid(16px, 48, 48);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 300;
            font-size: fluid(16px, 26, 26);
            color: #222222;
            font-style: normal;
            cursor: pointer;
  
            .home-introduce-more-icon {
              width: fluid(16px, 48, 48);
              margin-left: 9px;
            }
          }
        }
  
        .home-introduce-scroll {
          position: absolute;
          left: 0;
          width: 100%;
          bottom: fluid(16px, 35, 35);
          text-align: center;
          font-family: PingFangSC, PingFang SC;
          font-weight: 300;
          font-size: fluid(16px, 20, 20);
          color: #FFFFFF;
          line-height: fluid(16px, 28, 28);
          font-style: normal;
  
          .home-introduce-scroll-icon {
            width: fluid(16px, 40, 40);
            height: fluid(16px, 44, 44);
            margin: 0 auto;
            display: block;
            margin-top: fluid(16px, 18, 18);
  
          }
        }
      }
  
      .home-select-section {
        width: 100%;
        background: #222;
        box-sizing: border-box;
        padding-top: fluid(16px, 30, 30);
  
        .home-select-name {
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: fluid(16px, 64, 64);
          color: #FFFFFF;
          line-height: fluid(16px, 90, 90);
          text-align: center;
          font-style: normal;
        }
  
        .home-select-desc {
          font-family: PingFangSC, PingFang SC;
          margin-top: fluid(16px, 24, 24);
          font-weight: 400;
          font-size: fluid(16px, 30, 30);
          color: #969696;
          line-height: fluid(16px, 42, 42);
          font-style: normal;
          padding: 0 fluid(16px, 112, 112);
        }
  
        .home-select-tab {
          margin-top: fluid(16px, 70, 70);
          display: flex;
          background: #272F2F;
          height: fluid(16px, 142, 142);
  
          .home-select-tab-item {
            flex: 1;
            padding-left: fluid(16px, 22, 22);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: fluid(16px, 27, 27);
            color: #FFFFFF;
            line-height: fluid(16px, 38, 38);
            text-align: left;
            font-style: normal;
            cursor: pointer;
  
            .home-select-tab-item-icon {
              width: fluid(16px, 75, 75);
              height: fluid(16px, 75, 75);
              margin-right: fluid(16px, 21, 21);
  
            }
          }
        }
  
        .section-0down {
          position: relative;
          height: calc(var(--vh) * 100);
          width: 100%;
  
          .home-0down-video {
            width: 100%;
            object-fit: fill;
            height: 100%;
            display: block;
          }
  
          .home-0down-content {
            position: absolute;
            z-index: 1;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: fluid(16px, 1542, 1542);
            padding-left: fluid(16px, 159, 159);
  
            .home-0down-title {
              font-family: FZLTZHK--GBK1, FZLTZHK--GBK1;
              font-weight: normal;
              font-size: fluid(16px, 56, 56);
              color: #FFFFFF;
              line-height: fluid(16px, 78, 78);
              font-style: normal;
            }
  
            .home-0down-desc {
              font-family: PingFangSC, PingFang SC;
              font-weight: 300;
              font-size: fluid(16px, 28, 28);
              color: #FFFFFF;
              line-height: fluid(16px, 48, 48);
              font-style: normal;
            }
  
            .home-0down-icon {
              width: fluid(16px, 120, 120);
              height: fluid(10px, 10, 10);
              margin-top: fluid(16px, 18, 18);
              background: #10C6C2;
            }
          }
        }
  
        .section-smarter {
          width: 100%;
          height: calc(var(--vh) * 100);
          position: relative;
          font-size: 0;
  
          .home-smarter-content {
            position: absolute;
            z-index: 1;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: fluid(16px, 1542, 1542);
            padding-left: fluid(16px, 159, 159);
  
            .home-smarter-title {
              font-family: FZLTZHK--GBK1, FZLTZHK--GBK1;
              font-weight: normal;
              font-size: fluid(16px, 56, 56);
              color: #FFFFFF;
              line-height: fluid(16px, 78, 78);
              font-style: normal;
            }
  
            .home-smarter-desc {
              font-family: PingFangSC, PingFang SC;
              font-weight: 300;
              font-size: fluid(16px, 28, 28);
              color: #FFFFFF;
              line-height: fluid(16px, 48, 48);
              font-style: normal;
            }
  
            .home-smarter-icon {
              width: fluid(16px, 120, 120);
              height: fluid(10px, 10, 10);
              margin-top: fluid(16px, 18, 18);
              background: #10C6C2;
            }
          }
        }
  
        .section-broad {
          width: 100%;
          position: relative;
          font-size: 0;
          height: calc(var(--vh) * 100);
  
          .home-broad-content {
            position: absolute;
            z-index: 1;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: fluid(16px, 1542, 1542);
            padding-left: fluid(16px, 159, 159);
  
            .home-broad-title {
              font-family: FZLTZHK--GBK1, FZLTZHK--GBK1;
              font-weight: normal;
              font-size: fluid(16px, 56, 56);
              color: #FFFFFF;
              line-height: fluid(16px, 78, 78);
              font-style: normal;
            }
  
            .home-broad-desc {
              font-family: PingFangSC, PingFang SC;
              font-weight: 300;
              font-size: fluid(16px, 28, 28);
              color: #FFFFFF;
              line-height: fluid(16px, 48, 48);
              font-style: normal;
            }
  
            .home-broad-icon {
              width: fluid(16px, 120, 120);
              height: fluid(10px, 10, 10);
              margin-top: fluid(16px, 18, 18);
              background: #10C6C2;
            }
          }
        }
  
        .section-seamless {
          width: 100%;
          position: relative;
          font-size: 0;
          height: calc(var(--vh) * 100);
  
          .home-seamless-content {
            position: absolute;
            z-index: 1;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: fluid(16px, 1542, 1542);
            padding-left: fluid(16px, 159, 159);
  
            .home-seamless-title {
              font-family: FZLTZHK--GBK1, FZLTZHK--GBK1;
              font-weight: normal;
              font-size: fluid(16px, 56, 56);
              color: #FFFFFF;
              line-height: fluid(16px, 78, 78);
              font-style: normal;
            }
  
            .home-seamless-desc {
              font-family: PingFangSC, PingFang SC;
              font-weight: 300;
              font-size: fluid(16px, 28, 28);
              color: #FFFFFF;
              line-height: fluid(16px, 48, 48);
              font-style: normal;
            }
  
            .home-seamless-icon {
              width: fluid(16px, 120, 120);
              height: fluid(10px, 10, 10);
              margin-top: fluid(16px, 18, 18);
              background: #10C6C2;
            }
          }
        }
      }
  
    }
  }
  
  /* ======= 动画预设（零依赖） ======= */
  /* 无障碍：尊重“减少动效” */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
  
  /* 通用：需要动画的元素 */
  [data-ani],
  .ani-zoom {
    will-change: transform, opacity, filter, clip-path;
  }
  
  /* 基础入场 */
  [data-ani="fade-up"] {
    opacity: 0;
    transform: translateY(40px);
    transition: transform .9s cubic-bezier(.22, .61, .36, 1), opacity .9s cubic-bezier(.22, .61, .36, 1);
  }
  
  [data-ani="fade-left"] {
    opacity: 0;
    transform: translateX(40px);
    transition: transform .9s cubic-bezier(.22, .61, .36, 1), opacity .9s cubic-bezier(.22, .61, .36, 1);
  }
  
  [data-ani="fade-right"] {
    opacity: 0;
    transform: translateX(-40px);
    transition: transform .9s cubic-bezier(.22, .61, .36, 1), opacity .9s cubic-bezier(.22, .61, .36, 1);
  }
  
  [data-ani="clip-reveal"] {
    display: inline-block;
    clip-path: inset(0 0 100% 0);
    transition: clip-path .9s cubic-bezier(.22, .61, .36, 1);
  }
  
  /* 到位态 */
  .is-inview [data-ani],
  .is-inview[data-ani] {
    opacity: 1;
    transform: none;
    filter: none;
  }
  
  .is-inview [data-ani="clip-reveal"],
  .is-inview[data-ani="clip-reveal"] {
    clip-path: inset(0 0 0 0);
  }
  
  /* 轻度缩放入场（给视频/大图用） */
  .ani-zoom {
    opacity: 0;
    transform: scale(.96);
    transition: transform .9s cubic-bezier(.22, .61, .36, 1), opacity .9s cubic-bezier(.22, .61, .36, 1);
  }
  
  .is-inview .ani-zoom,
  .is-inview.ani-zoom {
    opacity: 1;
    transform: scale(1);
  }
  
  /* 错峰：父加 data-stagger，子元素写 style="--i:0/1/2..." */
  [data-stagger]>* {
    transition-delay: calc(var(--stagger-base, 0ms) + (var(--i, 0) * var(--stagger-step, 120ms)));
  }
  
  /* Scroll 提示的小跳动（可选） */
  .home-introduce-scroll {
    .home-introduce-scroll-icon {
      animation: bob 1.6s ease-in-out infinite;
    }
  }
  
  @keyframes bob {
  
    0%,
    100% {
      transform: translateY(0);
    }
  
    50% {
      transform: translateY(8px);
    }
  }
  
  /* —— 视差容器/图片 —— */
  .parallax,
  .js-parallax {
    overflow: clip;
    position: relative;
  }
  
  .parallax__img {
    position: absolute;
    inset: -6% 0 0 0; // 留出上方溢出空间，避免位移时露白
    width: 100%;
    height: 112%;
    object-fit: cover;
    transform: translateY(8%); // 初始值与 JS 同步
    transition: transform 1s ease, opacity 1s ease;
    opacity: 0; // 初始淡入
    filter: saturate(1.1) contrast(1.02);
  }
  </style>
  
    