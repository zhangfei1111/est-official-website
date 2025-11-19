<template>
  <div class="home">
    <div class="home-pc only-desktop">
      <section class="home-introduce-section">
        <video ref="homeIntroduceRef" class="home-introduce-video" autoplay muted playsinline loop preload="auto"
          controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
          src="../assets/video/home-introduce.mp4"></video>
        <div class="home-introduce-content">
          <div class="home-introduce-text">
            <span>0</span> Down · <span>0</span> Monthly · <span>0</span> Emission
          </div>
          <div class="home-introduce-more">
            Learn More
            <img class="home-introduce-more-icon" src="../assets/image/home-introduce-more.webp" alt="" />
          </div>
        </div>
        <div class="home-introduce-scroll">
          Scroll to see more
          <img class="home-introduce-scroll-icon" src="../assets/image/home-introduce-scroll.webp" alt="" />
        </div>
      </section>
      <section class="home-select-section">
        <div class="home-select-name">
          Why Select SolarAI
        </div>
        <div class="home-select-desc">
          With just one click, SolarAI effortlessly maximises savings. It intelligently minimises grid reliance by
          optimising the use of solar energy and battery storage, offering you hassle-free, efficient energy management.
        </div>
        <div class="home-select-tab">
          <div class="home-select-tab-item home-select-tab-item-selected" @click="scrollTo(0)">
            <img class="home-select-tab-item-icon" src="../assets/image/home-selected-0Down.webp" alt="" />
            0Down 0Monthly 0Emission
            <img class="home-select-tab-item-directive" src="../assets/image/directive.webp" alt="">
          </div>
          <div class="home-select-tab-item" @click="scrollTo(1)">
            <img class="home-select-tab-item-icon" src="../assets/image/home-unselected-smarter.webp" alt="" />
            Smarter AI, More Revenue
          </div>
          <div class="home-select-tab-item" @click="scrollTo(2)">
            <img class="home-select-tab-item-icon" src="../assets/image/home-unselected-broad.webp" alt="" />
            Broad Connectivity
          </div>
          <div class="home-select-tab-item" @click="scrollTo(3)">
            <img class="home-select-tab-item-icon" src="../assets/image/home-unselected-seamless.webp" alt="" />
            Seamless Integration
          </div>
        </div>
      </section>
      <section class="section-0down " ref="sec0Ref">
        <video ref="home0downRef" class="home-0down-video" autoplay muted playsinline loop preload="auto"
          controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
          src="../assets/video/home-0down.mp4"></video>
        <div class="home-0down-content">
          <div class="home-0down-title">0 Down 0 Monthly 0 Emission</div>
          <div class="home-0down-desc">
            Switch to solar with 0 upfront cost and save immediately. Save up to 30%~80% on your current electricity
            bill. <br>
            The solar panels are yours at the end of the payment period. No hidden fees, no extra costs. <br>
            The energy revolution starts at home, and with the full power of SolarAI you're all set for a clean
            energy future.
          </div>
          <div class="home-0down-icon"></div>
        </div>
      </section>
      <section class="section-smarter " ref="sec1Ref">
        <img class="section-smarter-bg" src="../assets/image/home-smarter-bg.webp" alt="">
        <div class="home-smarter-content">
          <div class="home-smarter-title">Smarter AI, More
            Revenue，<span class="home-smarter-title-remark">30%~80%+</span></div>
          <div class="home-smarter-desc">
            The verified residential iDER (intelligent Distributed Energy Resource) system, with its self-developed AI
            model, increases additional revenue by over 30%~80%
          </div>
          <div class="home-smarter-icon"></div>
        </div>
      </section>
      <section class="section-broad " ref="sec2Ref">
        <img class="section-broad-bg" src="../assets/image/home-broad-bg.png" alt="">
        <div class="home-broad-content">
          <div class="home-broad-title">Broad Connectivity</div>
          <div class="home-broad-desc">
            The most easy & diverse connection methods in the industry
          </div>
          <div class="home-broad-icon"></div>
        </div>
      </section>
      <section class="section-seamless " ref="sec3Ref">
        <img class="section-seamless-bg" src="../assets/image/home-seamless-bg.png" alt="">
        <div class="home-seamless-content">
          <div class="home-seamless-title">Seamless Integration</div>
          <div class="home-seamless-desc">
            All sonnenHome solutions interconnect intelligently to optimize your energy use, without any additional
            effort!
          </div>
          <div class="home-seamless-icon"></div>
        </div>
      </section>
    </div>
    <div class="home-mobile only-mobile">
      <section class="home-introduce-section">
        <video ref="homeIntroduceRef" class="home-introduce-video" autoplay muted playsinline loop preload="auto"
          controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
          src="../assets/video/home-introduce-mobile.mp4"></video>
        <div class="home-introduce-content">
          <div class="home-introduce-text">
            <span>0</span> Down · <span>0</span> Monthly · <span>0</span> Emission
          </div>
          <div class="home-introduce-more">
            Learn More
            <img class="home-introduce-more-icon" src="../assets/image/home-introduce-more.webp" alt="" />
          </div>
        </div>
      </section>
      <section class="home-select-section">
        <div class="home-select-name">
          Why Select SolarAI
        </div>
        <div class="home-select-desc">
          With just one click, SolarAI effortlessly maximises savings. It intelligently minimises grid reliance by
          optimising the use of solar energy and battery storage, offering you hassle-free, efficient energy management.
        </div>
      </section>
      <section class="section-0down " >
        <video ref="home0downRef" class="home-0down-video" autoplay muted playsinline loop preload="auto"
          controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
          src="../assets/video/home-0down-mobile.mp4"></video>
        <div class="home-0down-content">
          <div class="home-0down-title">0 Down 0 Monthly 0 Emission</div>
          <div class="home-0down-desc">
            Switch to solar with 0 upfront cost and save immediately. Save up to 30%~80% on your current electricity
            bill.
            The solar panels are yours at the end of the payment period. No hidden fees, no extra costs
            The energy revolution starts at home, and with the full power of sonnenHome you're all set for a clean
            energy future.
          </div>
          <div class="home-0down-icon"></div>
        </div>
      </section>
      <section class="section-smarter" >
        <img class="section-smarter-bg" src="../assets/image/home-smarter-bg-mobile.webp" alt="">
        <div class="home-smarter-content">
          <div class="home-smarter-title">Smarter AI, More
            Revenue，<span class="home-smarter-title-remark">30%~80%+</span></div>
          <div class="home-smarter-desc">
            The verified residential iDER (intelligent Distributed Energy Resource) system, with its self-developed AI
            model, increases additional revenue by over 30%~80%
          </div>
          <div class="home-smarter-icon"></div>
        </div>
      </section>
      <section class="section-broad " >
        <img class="section-broad-bg" src="../assets/image/home-broad-bg-mobile.webp" alt="">
        <div class="home-broad-content">
          <div class="home-broad-title">Broad Connectivity</div>
          <div class="home-broad-desc">
            The most easy & diverse connection methods in the industry
          </div>
          <div class="home-broad-icon"></div>
        </div>
      </section>
      <section class="section-seamless " >
        <img class="section-seamless-bg" src="../assets/image/home-seamless-bg-mobile.webp" alt="">
        <div class="home-seamless-content">
          <div class="home-seamless-title">Seamless Integration</div>
          <div class="home-seamless-desc">
            All sonnenHome solutions interconnect intelligently to optimize your energy use, without any additional
            effort!
          </div>
          <div class="home-seamless-icon"></div>
        </div>
      </section>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'


// refs（保留你的）
const homeIntroduceRef = ref<HTMLVideoElement | null>(null)
const sec0Ref = ref<HTMLElement | null>(null)
const sec1Ref = ref<HTMLElement | null>(null)
const sec2Ref = ref<HTMLElement | null>(null)
const sec3Ref = ref<HTMLElement | null>(null)
const sectionRefs = [sec0Ref, sec1Ref, sec2Ref, sec3Ref]

// 从 Nuxt 注入里拿 gsap / ScrollTrigger（插件里已注册）
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

// 点击 Tab 滚动到对应模块（保留你的）
function scrollTo(index: number) {
  const el = sectionRefs[index]?.value
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ---- 将 setVh 提到顶层，这样卸载时能拿到同一个引用 ----
const setVh = () =>
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)

onMounted(() => {
  const mq = window.matchMedia('(max-width: 1023.98px)')

  if (!mq.matches) {

    // 100vh 修复
    setVh()
    window.addEventListener('resize', setVh)
    // 视频播放兜底
    homeIntroduceRef.value?.play().catch(() => {
      document.addEventListener(
        'visibilitychange',
        () => {
          if (!document.hidden) homeIntroduceRef.value?.play().catch(() => { })
        },
        { once: true }
      )
    })

    // ---- Helper：进入视口只触发一次的入场动画 ----
    function onceEnter(
      targets: string | Element[] | NodeListOf<Element>,
      opts: {
        trigger?: string | Element
        start?: string
        from?: gsap.TweenVars
        to?: gsap.TweenVars
        duration?: number
        ease?: string
        stagger?: number
        delay?: number
      } = {}
    ) {
      const els =
        typeof targets === 'string'
          ? Array.from(document.querySelectorAll(targets))
          : Array.from(targets)
      els.forEach((el, i) => {
        const from = opts.from || { y: 20, opacity: 0 }
        gsap.set(el, from)
        ScrollTrigger.create({
          trigger: (opts.trigger as Element) || el,
          start: opts.start || 'top 80%',
          once: true,
          onEnter: () =>
            gsap.to(el, {
              ...(opts.to || {}),
              y: 0,
              opacity: 1,
              duration: opts.duration ?? 1,
              ease: opts.ease || 'expo.out',
              delay: opts.stagger ? i * (opts.stagger ?? 0) : opts.delay ?? 0,
              overwrite: true
            })
        })
      })
    }

    // HERO 入场
    onceEnter('.home-introduce-video', {
      trigger: '.home-introduce-section',
      from: { scale: 1.12 },
      duration: 1.2
    })
    onceEnter('.home-introduce-content', {
      trigger: '.home-introduce-section',
      from: { y: 40, opacity: 0, scale: 1.06 },
      duration: 1.0
    })

    // 标题入场
    const bigTitles = [
      '.home-0down-title',
      '.home-smarter-title',
      '.home-broad-title',
      '.home-seamless-title',
      '.home-select-name'
    ]
    onceEnter(bigTitles.join(','), {
      from: { y: 80, opacity: 0, scale: 1.08, skewY: 4 },
      to: { scale: 1, skewY: 0 },
      duration: 1.05,
      ease: 'expo.out'
    })

    // 描述入场
    const descs = [
      '.home-0down-desc',
      '.home-smarter-desc',
      '.home-broad-desc',
      '.home-seamless-desc',
      '.home-select-desc'
    ]
    onceEnter(descs.join(','), { from: { y: 44, opacity: 0 }, duration: 0.95 })

    // Why Select 卡片
    onceEnter('.home-select-tab-item', {
      trigger: '.home-select-section',
      from: { y: 40, opacity: 0, scale: 1.06 },
      to: { scale: 1 },
      duration: 0.9,
      stagger: 0.12
    })

    // // 背景缩放回落
    // onceEnter('.section-smarter .section-smarter-bg', {
    //   trigger: '.section-smarter',
    //   from: { scale: 1.12, y: 20 },
    //   to: { y: 0 },
    //   duration: 1.2
    // })
    // onceEnter('.section-broad .section-broad-bg', {
    //   trigger: '.section-broad',
    //   from: { scale: 1.12, y: 24 },
    //   to: { y: 0 },
    //   duration: 1.2
    // })
    // onceEnter('.section-seamless .section-seamless-bg', {
    //   trigger: '.section-seamless',
    //   from: { scale: 1.1, y: 16 },
    //   to: { y: 0 },
    //   duration: 1.1
    // })

    // // 轻视差
    // gsap.to('.section-smarter .section-smarter-bg', {
    //   scrollTrigger: { trigger: '.section-smarter', start: 'top bottom', end: 'bottom top', scrub: true },
    //   yPercent: -14
    // })
    // gsap.to('.section-broad .section-broad-bg', {
    //   scrollTrigger: { trigger: '.section-broad', start: 'top bottom', end: 'bottom top', scrub: true },
    //   yPercent: -16
    // })
    // gsap.to('.section-seamless .section-seamless-bg', {
    //   scrollTrigger: { trigger: '.section-seamless', start: 'top bottom', end: 'bottom top', scrub: true },
    //   yPercent: -12
    // })

    // 可访问性：尊重减少动效
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      gsap.globalTimeline.timeScale(0)
      document.querySelectorAll<HTMLElement>('*').forEach((el) => {
        el.style.animation = 'none'
        el.style.transition = 'none'
      })
    }

    // 数字递增：解析 "30%~80%+"
    const remarkEl = document.querySelector('.home-smarter-title-remark') as HTMLElement | null
    if (remarkEl) {
      const m = remarkEl.textContent?.match(/(\d+)\s*%?\s*[~\-～]\s*(\d+)\s*%?/)
      const minTo = m ? parseInt(m[1], 10) : 30
      const maxTo = m ? parseInt(m[2], 10) : 80
      const a = { v: 0 }, b = { v: 0 }
      remarkEl.textContent = `0%~0%+`

      ScrollTrigger.create({
        trigger: '.section-smarter',
        start: 'top 78%',
        once: true,
        onEnter: () => {
          gsap.to(a, {
            v: minTo, duration: 0.9, ease: 'power3.out',
            onUpdate: () => (remarkEl.textContent = `${Math.round(a.v)}%~${Math.round(b.v)}%+`)
          })
          gsap.to(b, {
            v: maxTo, duration: 1.2, delay: 0.1, ease: 'power3.out',
            onUpdate: () => (remarkEl.textContent = `${Math.round(a.v)}%~${Math.round(b.v)}%+`)
          })
        }
      })
    }
  }

})

// —— 卸载清理（移到 setup 顶层来注册）
onUnmounted(() => {
  window.removeEventListener('resize', setVh)
  try {
    ScrollTrigger.getAll().forEach((t) => t.kill())
    gsap.globalTimeline.clear()
  } catch { }
})

// 页面元信息
definePageMeta({ title: 'Home' })
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
      width: 100%;
      height: 100vh;
      overflow: hidden;

      .home-introduce-video {
        width: 100%;
        position: absolute;
        left: 0%;
        top: 0%;
        bottom: 0;
        height: 100%;
        object-fit: cover;
        /* 等比例，不变形 */
        object-position: center;
        /* 需要时调整焦点 */
        z-index: 1;
      }

      .home-introduce-content {
        position: absolute;
        z-index: 2;
        width: 100%;
        left: 0;
        top: fluid(16px, 510, 510);
        text-align: center;
        font-size: fluid(16px, 72, 72);
        color: #fff;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-style: normal;

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
          font-family: 'Poppins', sans-serif;
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
        z-index: 2;
        text-align: center;
        font-family: 'Poppins', sans-serif;
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

    .home-select-section {
      width: 100%;
      background: #222;
      box-sizing: border-box;
      padding-top: fluid(16px, 30, 30);
      padding-bottom: fluid(16px, 50, 50);

      .home-select-name {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: fluid(16px, 64, 64);
        color: #FFFFFF;
        line-height: fluid(16px, 90, 90);
        text-align: center;
        font-style: normal;
      }

      .home-select-desc {
        font-family: 'Poppins', sans-serif;
        margin-top: fluid(16px, 24, 24);
        font-weight: 400;
        font-size: fluid(16px, 30, 30);
        color: #fff;
        line-height: fluid(16px, 42, 42);
        font-style: normal;
        padding: 0 fluid(16px, 112, 112);
      }

      .home-select-tab {
        margin-top: fluid(16px, 70, 70);
        display: flex;
        height: fluid(16px, 142, 142);

        .home-select-tab-item {
          flex: 1;
          padding-left: fluid(16px, 22, 22);
          display: flex;
          background: #272F2F;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: fluid(16px, 27, 27);
          color: #FFFFFF;
          line-height: fluid(16px, 38, 38);
          text-align: left;
          font-style: normal;
          cursor: pointer;
          padding-right: fluid(16px, 26, 26);
          position: relative;
          margin-right: 1px;

          .home-select-tab-item-icon {
            width: fluid(16px, 75, 75);
            height: fluid(16px, 75, 75);
            margin-right: fluid(16px, 21, 21);

          }

          .home-select-tab-item-directive {
            position: absolute;
            bottom: -13px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            width: 27px;
            height: 13px;
          }
        }

        .home-select-tab-item-selected {
          background: linear-gradient(90deg, #02B5B1 0%, #27E3DF 100%);
          box-shadow: inset 0px 1px 1px 0px rgba(255, 255, 255, 0.5);
        }
      }


    }

    .section-0down {
      position: relative;
      height: 100vh;
      width: 100%;
      font-size: 0;
      overflow: hidden;

      .home-0down-video {
        position: absolute;
        left: 0;
        top: -10%;
        width: 100%;
        height: 110%;
        object-fit: cover;
        /* 等比例，不变形 */
        object-position: center;
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
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: fluid(16px, 58, 58);
          color: #FFFFFF;
          line-height: fluid(16px, 78, 78);
          font-style: normal;
        }

        .home-0down-desc {
          font-family: 'Poppins', sans-serif;
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
      height: 100vh;
      position: relative;
      font-size: 0;

      .section-smarter-bg {
        width: 100%;
        height: 100%;

      }

      .home-smarter-content {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: fluid(16px, 1542, 1542);
        padding-left: fluid(16px, 159, 159);

        .home-smarter-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: fluid(16px, 58, 58);
          color: #FFFFFF;
          line-height: fluid(16px, 78, 78);
          font-style: normal;

          .home-smarter-title-remark {
            color: #FFA12B;
          }
        }

        .home-smarter-desc {
          font-family: 'Poppins', sans-serif;
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
      height: 100vh;

      .section-broad-bg {
        width: 100%;
        height: 100%;

      }

      .home-broad-content {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: fluid(16px, 1542, 1542);
        padding-left: fluid(16px, 159, 159);

        .home-broad-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: fluid(16px, 58, 58);
          color: #FFFFFF;
          line-height: fluid(16px, 78, 78);
          font-style: normal;
        }

        .home-broad-desc {
          font-family: 'Poppins', sans-serif;
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
      height: 100vh;

      .section-seamless-bg {
        width: 100%;
        height: 100%;
        display: block;
      }

      .home-seamless-content {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: fluid(16px, 1542, 1542);
        padding-left: fluid(16px, 159, 159);

        .home-seamless-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: fluid(16px, 58, 58);
          color: #FFFFFF;
          line-height: fluid(16px, 78, 78);
          font-style: normal;
        }

        .home-seamless-desc {
          font-family: 'Poppins', sans-serif;
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

  .home-mobile {
    .home-introduce-section {
      position: relative;
      width: 100%;

      .home-introduce-video {
        width: 100%;
        display: block;
      }

      .home-introduce-content {
        position: absolute;
        z-index: 1;
        width: 100%;
        left: 0;
        top: 3rem;
        text-align: center;
        font-size: 0.2rem;
        color: #fff;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-style: normal;

        span {
          font-weight: 600;
          font-size: 0.26rem;
          color: #02B5B1;
        }

        .home-introduce-text {
          margin-bottom: 0.24rem;

        }

        .home-introduce-more {
          width: 1.3rem;
          height: 0.32rem;
          margin: 0 auto;
          background: #FFFFFF;
          border-radius: 0.24rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 300;
          font-size: 0.13rem;
          font-family: 'Poppins', sans-serif;
          color: #222222;
          font-style: normal;
          cursor: pointer;

          .home-introduce-more-icon {
            width: 0.2rem;
            margin-left: 0.06rem;
          }
        }
      }
    }

    .home-select-section {
      width: 100%;
      background: #222;
      box-sizing: border-box;
      padding-top: 0.16rem;
      padding-bottom: 0.36rem;

      .home-select-name {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 0.22rem;
        color: #FFFFFF;
        line-height: 0.3rem;
        text-align: center;
        font-style: normal;
      }

      .home-select-desc {
        font-family: 'Poppins', sans-serif;
        margin-top: 0.16rem;
        font-weight: 400;
        font-size: 0.14rem;
        color: #969696;
        line-height: 0.2rem;
        font-style: normal;
        padding: 0 0.23rem;
      }
    }

    .section-0down {
      position: relative;
      width: 100%;
      font-size: 0;

      .home-0down-video {
        width: 100%;
      }

      .home-0down-content {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 0.23rem;

        .home-0down-title {
          font-family: 'Poppins', sans-serif;
          font-weight: normal;
          font-size: 0.2rem;
          color: #FFFFFF;
          text-align: center;
          line-height: 0.28rem;
          font-style: normal;
        }

        .home-0down-desc {
          font-family: 'Poppins', sans-serif;
          text-align: justify;
          /* 两端对齐 */
          font-weight: 300;
          font-size: 0.14rem;
          color: #FFFFFF;
          line-height: 0.2rem;
          font-style: normal;
        }

        .home-0down-icon {
          width: 0.72rem;
          height: 0.04rem;
          margin-top: 0.16rem;
          background: #10C6C2;
        }
      }
    }

    .section-smarter {
      width: 100%;
      position: relative;
      font-size: 0;

      .section-smarter-bg {
        width: 100%;
      }

      .home-smarter-content {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.16rem;

        .home-smarter-title {
          font-family: 'Poppins', sans-serif;
          font-weight: normal;
          font-size: 0.2rem;
          color: #FFFFFF;
          line-height: 0.28rem;
          text-align: center;
          font-style: normal;

          .home-smarter-title-remark {
            color: #FFA12B;
          }
        }

        .home-smarter-desc {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 0.14rem;
          color: #FFFFFF;
          line-height: 0.2rem;
          font-style: normal;
          text-align: left;
        }

        .home-smarter-icon {
          width: 0.72rem;
          height: 0.04rem;
          margin-top: 0.16rem;
          background: #10C6C2;
        }
      }
    }

    .section-broad {
      width: 100%;
      position: relative;
      font-size: 0;

      .section-broad-bg {
        width: 100%;

      }

      .home-broad-content {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.16rem;

        .home-broad-title {
          font-family: 'Poppins', sans-serif;
          text-align: center;
          font-weight: normal;
          font-size: 0.2rem;
          color: #FFFFFF;
          line-height: 0.28rem;
          font-style: normal;
        }

        .home-broad-desc {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 0.14rem;
          color: #FFFFFF;
          line-height: 0.2rem;
          font-style: normal;
        }

        .home-broad-icon {
          width: 0.72rem;
          height: 0.04rem;
          margin-top: 0.16rem;
          background: #10C6C2;
        }
      }
    }

    .section-seamless {
      width: 100%;
      position: relative;
      font-size: 0;

      .section-seamless-bg {
        width: 100%;
      }

      .home-seamless-content {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.16rem;

        .home-seamless-title {
          font-family: 'Poppins', sans-serif;
          font-weight: normal;
          font-size: 0.2rem;
          text-align: center;
          color: #FFFFFF;
          line-height: 0.28rem;
          font-style: normal;
        }

        .home-seamless-desc {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 0.14rem;
          color: #FFFFFF;
          line-height: 0.2rem;
          font-style: normal;
        }

        .home-seamless-icon {
          width: 0.72rem;
          height: 0.04rem;
          margin-top: 0.16rem;
          background: #10C6C2;
        }
      }
    }
  }
}
</style>

  