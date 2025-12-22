<template>
    <header>
        <!-- 你的全局导航 -->
        <div class="default-pc only-desktop">
            <div :class="['nav-header', { scrolled: isScrolled }]">
                <img class="logo" v-if="!isScrolled" @click="handleToHome('/')" src="../assets/image/home-logo.webp"
                    alt="">
                <img class="logo" v-else @click="handleToHome('/')" src="../assets/image/home-logo-scrolled.png" alt="">
                <div class="menus">
                    <div class="menus-item " v-for="(item, index) in list" :key="index">
                        <NuxtLink :to="item.path"
                            :class="['menus-item-name', { 'menus-item-name-active': activeIndex === index }]">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="default-mobile only-mobile">
            <div class="nav-header">
                <img class="logo" @click="handleToHome('/')" src="../assets/image/logo-mobile.webp" alt="">
                <img class="menu-mobile" @click="toggleMobileMenu" src="../assets/image/menu-mobile.webp" alt="">
            </div>
        </div>
        <!-- Mobile Drawer -->
        <teleport to="body">
            <!-- 遮罩 -->
            <transition name="mobile-mask">
                <div v-if="mobileMenuOpen" class="mobile-mask" @click="closeMobileMenu" />
            </transition>

            <!-- 抽屉 -->
            <aside class="mobile-drawer" :class="{ open: mobileMenuOpen }" @click.stop>
                <div class="drawer-header">
                    <img class="drawer-logo" src="../assets/image/home-logo.webp" alt=""
                        @click="handleToHome('/'); closeMobileMenu()" />
                    <button class="drawer-close" @click="closeMobileMenu" aria-label="Close">×</button>
                </div>

                <nav class="drawer-list">
                    <NuxtLink v-for="(item, index) in list" :key="index" :to="item.path" class="drawer-item"
                        active-class="drawer-item-active" @click="closeMobileMenu">
                        {{ item.name }}
                    </NuxtLink>
                </nav>
            </aside>
        </teleport>

    </header>
    <main class="layout-main">
        <NuxtPage />
    </main>
    <footer>
        <div class="footer-pc only-desktop">
            <div class="footer-container">
                <img class="footer-logo" @click="handleToHome('/')" src="../assets/image/home-logo.webp" alt="">
                <div class="app-store app-store-ios">
                    <img class="app-store-code" src="../assets/image/ios-code.webp" alt="">
                    <img class="app-store-icon" src="../assets/image/ios-store.webp" alt="">
                </div>
                <div class="app-store">
                    <img class="app-store-code" src="../assets/image/android-code.webp" alt="">
                    <img class="app-store-icon" src="../assets/image/android-store.webp" alt="">
                </div>
                <div class="footer-nav">
                    <div class="footer-nav-item" v-for="(item, index) in list" :key="index">
                        <!-- <NuxtLink :to="item.path">{{ item.name }}</NuxtLink> -->
                        <NuxtLink class="footer-nav-item-name" :to="item.path">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="footer-links">
                <div class="footer-copyright">Copyright©2024 SolarAI Technologies LLC</div>
                <span class="footer-links-a" @click="handleToPrivacy('/privacy')">Privacy Policy</span> | <span
                    class="footer-links-a" @click="handleToPrivacy('/conditions')">Terms of Use</span>
            </div>
            <NuxtLink to="message">
                <img class="message-icon" src="~/assets/image/message.webp" alt="">
            </NuxtLink>
            <transition name="fade-back-top">
                <img v-if="showBackToTop" class="back-to-top" src="~/assets/image/back-top.webp" alt=""
                    @click="scrollToTop" />
            </transition>

        </div>
        <div class="footer-mobile only-mobile">
            <div class="footer-container">
                <div class="footer-nav">
                    <div class="footer-nav-item" v-for="(item, index) in list" :key="index">
                        <div @click="handleToPage(item, index)">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="store">
                <div class="app-store app-store-ios">
                    <img class="app-store-code" src="../assets/image/ios-code.webp" alt="">
                    <img class="app-store-icon" src="../assets/image/ios-store.webp" alt="">
                </div>
                <div class="app-store">
                    <img class="app-store-code" src="../assets/image/android-code.webp" alt="">
                    <img class="app-store-icon" src="../assets/image/android-store.webp" alt="">
                </div>
            </div>
            <div class="footer-links">
                <div class="footer-copyright">Copyright©2024 SolarAI Technologies LLC</div>
                <span class="footer-links-a" @click="handleToPrivacy('/privacy')">Privacy Policy</span> | <span
                    class="footer-links-a" @click="handleToPrivacy('/conditions')">Terms of Use</span>
            </div>
            <NuxtLink to="message">
                <img class="message-icon" src="~/assets/image/message.webp" alt="">
            </NuxtLink>
            <transition name="fade-back-top">
                <img v-if="showBackToTop" class="back-to-top" src="~/assets/image/back-top.webp" alt=""
                    @click="scrollToTop" />
            </transition>

        </div>
    </footer>

</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, watch, nextTick } from 'vue'
const route = useRoute()
const list = ref([
    {
        name: "Home",
        path: "/"
    },
    {
        name: "APP",
        path: "/app"
    },
    {
        name: "Installer",
        path: "/installer"
    },
    {
        name: "Outlook",
        path: "/outlook"
    },
    {
        name: "Case",
        path: "/case"
    },
    {
        name: "About Us",
        path: "/about"
    },
])

const activeIndex = ref(-1)
const isScrolled = ref(false)
const showBackToTop = ref(false)
const navIsScrolled = ref(['Message', 'Privacy', 'Conditions', 'About'])
const mobileMenuOpen = ref(false)



// 打开抽屉时禁止背景滚动
watch(mobileMenuOpen, (v) => {
    if (process.client) {
        document.body.classList.toggle('no-scroll', v)
    }
})
// 这些页面导航条永远用“scrolled”样式
const isForceScrolledPage = computed(() =>
    navIsScrolled.value.includes((route.name || '') as string)
)

watch(
    () => route.path,
    () => {
        mobileMenuOpen.value = false
        activeIndex.value = list.value.findIndex(item => item.path === route.path)

        // 路由切换时，根据是否强制 scrolled 立即调整一次
        if (isForceScrolledPage.value) {
            isScrolled.value = true
        } else {
            // 非强制页面，按当前滚动条位置来
            nextTick(() => {
                handleScroll()
            })
        }
    },
    { immediate: true }
)
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
const closeMobileMenu = () => {
    mobileMenuOpen.value = false
}
const handleScroll = () => {
    const y =
        window?.scrollY ||
        document?.documentElement?.scrollTop ||
        document?.body?.scrollTop ||
        0

    // 回到顶部按钮：超过 200px 出现
    showBackToTop.value = y > 200

    // 导航条：特殊页面固定高亮，其它页面根据滚动位置
    if (!isForceScrolledPage.value) {
        isScrolled.value = y > 2
    }
}
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'   // 平滑滚动
    })
}
// 首次挂载时绑定一次 scroll
onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 初始化一次状态
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
const handleToPage = (item: object, index: number) => {
    // 基础跳转
    navigateTo(item?.path)
}
const handleToHome = (path: string) => {
    navigateTo(path)
}
const handleToPrivacy = async (path: string) => {
    await navigateTo(path)
}


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


.layout-main {
    min-height: 100vh;
    background: #050816;
    /* 你官网主体的深色背景 */
    color: #fff;
}

.default-pc {
    .nav-header {
        position: fixed;
        top: 0;
        z-index: 999;
        left: 0;
        right: 0;
        width: 100%;
        height: fluid(16px, 98, 98);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 fluid(16px, 44, 44);
        font-family: 'Poppins', sans-serif;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.18); // 60% 不透明


        .logo {
            height: fluid(16px, 53, 53);
            cursor: pointer;
        }

        .menus {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .menus-item {
                display: flex;
                align-items: center;

                .menus-item-name {
                    font-weight: 400;
                    font-size: fluid(16px, 24, 24);
                    color: #FFFFFF;
                    margin-left: 8px;
                    font-style: normal;
                    cursor: pointer;
                    width: fluid(8px, 144, 144);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 8px 0;
                    text-decoration: none;

                    &:hover {
                        background: #02B5B1;
                        font-weight: 600;
                        border-radius: fluid(8px, 26, 26);
                    }
                }

                .menus-item-name-active {
                    background: #02B5B1;
                    font-weight: 600;
                    border-radius: fluid(8px, 26, 26);
                }


            }


        }


    }

    .nav-header.scrolled {
        background: rgba(255, 255, 255, 0.96);
        backdrop-filter: blur(6px);
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

        .menus .menus-item .menus-item-name {
            color: #111; // 黑字
        }

        // 高亮状态在白底下依然可见
        .menus .menus-item .menus-item-name-active {
            background: #02B5B1;
            color: #fff;
        }

        .menus .menus-item-name:hover {
            background: #02B5B1;
            color: #fff;
        }
    }

}

.footer-pc {
    height: fluid(16px, 500, 500);
    background: #000000;
    box-sizing: border-box;

    .footer-container {
        height: fluid(16px, 360, 360);
        display: flex;
        align-items: center;
        padding: 0 fluid(16px, 136, 136);

        .footer-logo {
            height: fluid(16px, 46, 46);
            margin-right: fluid(16px, 102, 102);
            cursor: pointer;
        }

        .app-store {
            .app-store-code {
                height: fluid(16px, 136, 136);
                width: fluid(16px, 136, 136);
                margin-bottom: fluid(16px, 18, 18);
                display: block;
            }

            .app-store-icon {
                height: fluid(16px, 37, 37);
                width: fluid(16px, 123, 123);
                display: block;
                margin: 0 auto;
            }
        }

        .app-store-ios {
            margin-right: fluid(16px, 50, 50);
        }

        .footer-nav {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;

            .footer-nav-item {
                width: fluid(16px, 124, 124);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;

                .footer-nav-item-name {
                    text-decoration: none;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 300;
                    font-size: fluid(16px, 24, 24);
                    color: #FFFFFF;
                    line-height: fluid(16px, 33, 33);
                    font-style: normal;
                }

                .footer-nav-item-name:hover {
                    font-weight: 600;
                }
            }
        }
    }

    .footer-links {
        height: fluid(16px, 136, 136);
        border-top: 1px solid #323232;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: fluid(16px, 24, 24);
        color: #FFFFFF;
        line-height: fluid(16px, 33, 33);
        font-style: normal;
        box-sizing: border-box;
        padding-top: fluid(16px, 23, 23);

        .footer-copyright {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: fluid(16px, 24, 24);
            color: #FFFFFF;
            line-height: fluid(16px, 33, 33);
            font-style: normal;
            margin-bottom: fluid(8, 12, 12);
        }

        .footer-links-a {

            /* 或者改成 #02B5B1 */
            cursor: pointer;
        }

        .footer-links-a:hover {
            color: #10C6C2;
            text-decoration: underline;
            text-underline-offset: 4px;
            /* 与文字的距离 */
            text-decoration-thickness: 1px;
            /* 线条粗细 */
            text-decoration-color: currentColor;
        }
    }

    .message-icon {
        position: fixed;
        bottom: 150px;
        right: 40px;
        width: 72px;
        height: 72px;
        z-index: 100;
        cursor: pointer;
    }

    .back-to-top {
        position: fixed;
        bottom: 80px;
        right: 40px;
        width: 72px;
        height: 72px;
        z-index: 100;
        cursor: pointer;
    }
}

.default-mobile {
    .nav-header {
        height: 3.75rem;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.75rem;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;

        .logo {
            width: 10.625rem;
        }

        .menu-mobile {
            width: 2rem;
            height: 2rem;
        }
    }
}


.footer-mobile {
  background: #000000;
  padding: 0.875rem 1.25rem 1.75rem;

  .footer-container {
    .footer-nav {
      .footer-nav-item {
        padding: 0.5625rem 0 0.375rem;
        border-bottom: 1px solid #3a3a3a;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 0.875rem;
        color: #FFFFFF;
        line-height: 1.25rem;
        text-align: left;
        font-style: normal;
      }
    }
  }

  .store {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.25rem 0;

    .app-store {
      .app-store-code {
        width: 4.25rem;
        height: 4.25rem;
        display: block;
      }

      .app-store-icon {
        margin: 0 auto;
        margin-top: 0.5625rem;
        display: block;
        width: 3.84375rem;
        height: 1.1625rem;
      }
    }

    .app-store-ios {
      margin-right: 1.5625rem;
    }
  }

  .footer-links {
    border-top: 1px solid #3a3a3a;
    padding-top: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 0.75rem;
    color: #FFFFFF;
    line-height: 1.0625rem;
    text-align: center;
    font-style: normal;

    .footer-copyright {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 0.75rem;
      color: #FFFFFF;
      line-height: 1.0625rem;
      text-align: center;
      font-style: normal;
      margin-bottom: 0.375rem;
    }

    .footer-links-a:hover {
      color: #10C6C2;
      text-decoration: underline;
      text-underline-offset: 0.25rem;
      /* 与文字的距离 */
      text-decoration-thickness: 1px;
      /* 线条粗细 */
      text-decoration-color: currentColor;
    }
  }

  .message-icon {
    position: fixed;
    bottom: 7.5rem;
    right: 0.625rem;
    width: 2.25rem;
    height: 2.25rem;
    z-index: 100;
    cursor: pointer;
  }

  .back-to-top {
    position: fixed;
    bottom: 5rem;
    right: 0.625rem;
    width: 2.25rem;
    height: 2.25rem;
    z-index: 100;
    cursor: pointer;
  }
}






/* 遮罩 */
.mobile-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 998;
}

/* 抽屉 */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: -1px;
  height: 100vh;
  width: 78%;
  max-width: 21.25rem; // 你用 rem 体系的话保留即可
  background: #171717;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1.25rem;
}


.mobile-drawer.open {
    transform: translateX(0);
}

.drawer-header {
  height: 3.75rem;
  padding: 0 0.6875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-logo {
  width: 9.875rem;
}

.drawer-close {
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 2.125rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.375rem 0.625rem;
}

.drawer-list {
  padding: 0.375rem 0;
  margin-top: 1rem;
}

.drawer-item {
  display: block;
  height: 2.75rem;
  padding-left: 1rem;
  text-decoration: none;
  border-bottom: 1px solid #3E3E3E;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: #FFFFFF;
  line-height: 2.75rem;
  text-align: left;
  font-style: normal;
}


.drawer-item-active {
    color: #fff;
    font-weight: 600;
}

/* 遮罩过渡 */
.mobile-mask-enter-active,
.mobile-mask-leave-active {
    transition: opacity 0.2s ease;
}

.mobile-mask-enter-from,
.mobile-mask-leave-to {
    opacity: 0;
}
</style>