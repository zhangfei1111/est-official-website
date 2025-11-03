<template>
    <header>
        <!-- 你的全局导航 -->
        <div class="defatul-pc only-desktop">
            <div class="nav-header">
                <img class="logo" @click="handleToHome('/')" src="../assets/image/home-logo.webp" alt="">
                <div class="menus">
                    <div class="menus-item " v-for="(item, index) in list" :key="index">
                        <!-- <NuxtLink :to="item.path">{{ item.name }}</NuxtLink> -->
                        <div :class="activeIndex === index ? 'menus-item-name menus-item-name-active' : 'menus-item-name'"
                            @click="handleToPage(item, index)">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="defatul-mobile only-mobile">
            <div class="nav-header">
                <img class="logo" @click="handleToHome('/')" src="../assets/image/logo-mobile.webp" alt="">
                <img class="menu-mobile" @click="handleToHome('/')" src="../assets/image/menu-mobile.webp" alt="">
            </div>
        </div>
        <!--  |
        <NuxtLink to="/about">关于我们</NuxtLink> -->
    </header>
    <!-- 这里渲染 pages/**/index.vue、about.vue…… -->
    <NuxtPage />
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
                        <div @click="handleToPage(item, index)">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="footer-links">
                <div class="footer-copyright">Copyright©2024 SolarAI Technologies LLC</div>
                <span class="footer-links-a" @click="handleToPrivacy('/privacy')">Privacy Policy</span> | <span
                    class="footer-links-a" @click="handleToPrivacy('/conditions')">Terms of Use</span>
            </div>

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

        </div>
    </footer>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const route = useRoute()
const list = ref([
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Product",
        path: "/product"
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
        name: "About-us",
        path: "/about"
    },
])
const activeIndex = ref(0)
const handleToPage = (item: object, index: number) => {
    // 基础跳转
    activeIndex.value = index
    navigateTo(item?.path)
}
const handleToHome = (path: string) => {
    activeIndex.value = 0
    navigateTo(path)
}
const handleToPrivacy = async (path: string) => {
    await navigateTo(path, {
        external: true,
        open: { target: '_blank' } // 也可加 windowFeatures
    })
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

.defatul-pc {
    .nav-header {
        position: fixed;
        top: 0;
        z-index: 10;
        left: 0;
        right: 0;
        width: 100%;
        height: fluid(16px, 98, 98);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 fluid(16px, 44, 44);
        font-family: PingFangSC, PingFang SC;
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
                    font-style: normal;
                    cursor: pointer;
                    padding: 8px fluid(16px, 38, 38);

                }

                .menus-item-name-active {
                    background: #02B5B1;
                    border-radius: fluid(8px, 26, 26);
                }
            }
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
        padding-left: fluid(16px, 136, 136);

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
                font-family: PingFangSC, PingFang SC;
                font-weight: 600;
                font-size: fluid(16px, 24, 24);
                color: #FFFFFF;
                line-height: fluid(16px, 33, 33);
                font-style: normal;
                margin-right: fluid(16px, 40, 40);
                cursor: pointer;
            }
        }
    }

    .footer-links {
        height: fluid(16px, 136, 136);
        border-top: 1px solid #323232;
        text-align: center;
        font-family: PingFangSC, PingFang SC;
        font-weight: 300;
        font-size: fluid(16px, 24, 24);
        color: #FFFFFF;
        line-height: fluid(16px, 33, 33);
        font-style: normal;
        box-sizing: border-box;
        padding-top: fluid(16px, 23, 23);

        .footer-copyright {
            font-family: PingFangSC, PingFang SC;
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
}

.defatul-mobile {
    .nav-header {
        height: 0.6rem;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.12rem;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;

        .logo {
            width: 1.7rem;
        }

        .menu-mobile {
            width: 0.32rem;
            height: 0.32rem;
        }
    }
}

.footer-mobile {
    background: #000000;
    padding: 0.14rem 0.2rem 0.28rem;

    .footer-container {
        .footer-nav {


            .footer-nav-item {
                padding: 0.09rem 0 0.06rem;
                border-bottom: 1px solid #3a3a3a;
                font-family: PingFangSC, PingFang SC;
                font-weight: 600;
                font-size: 0.14rem;
                color: #FFFFFF;
                line-height: 0.2rem;
                text-align: left;
                font-style: normal;
            }
        }
    }

    .store {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.2rem 0;

        .app-store {
            .app-store-code {
                width: 0.68rem;
                height: 0.68rem;
                display: block;
            }

            .app-store-icon {
                margin: 0 auto;
                margin-top: 0.09rem;
                display: block;
                width: 0.615rem;
                height: 0.186rem;
            }

        }

        .app-store-ios {
            margin-right: 0.25rem;
        }
    }


    .footer-links {
        border-top: 1px solid #3a3a3a;
        padding-top: 0.16rem;
        font-family: PingFangSC, PingFang SC;
        font-weight: 300;
        font-size: 0.12rem;
        color: #FFFFFF;
        line-height: 0.17rem;
        text-align: center;
        font-style: normal;

        .footer-copyright {
            font-family: PingFangSC, PingFang SC;
            font-weight: 300;
            font-size: 0.12rem;
            color: #FFFFFF;
            line-height: 0.17rem;
            text-align: center;
            font-style: normal;
            margin-bottom: 0.06rem;
        }

        .footer-links-a:hover {
            color: #10C6C2;
            text-decoration: underline;
            text-underline-offset: 0.04rem;
            /* 与文字的距离 */
            text-decoration-thickness: 1px;
            /* 线条粗细 */
            text-decoration-color: currentColor;
        }
    }
}
</style>
  