<template>
    <div class="case">
        <div class="case-pc only-desktop">
            <section class="case-header">
                <img src="../assets/image/case-header.png" alt="map" />
                <div class="case-header-title">Coverage Area</div>
                <!-- 坐标点（示例）：把 left/top 改成你的坐标即可 -->
                <div class="botelan-shadow" style="left: 33%; bottom: 32%;" @click="handleToCase(0)">
                    <div class="dot"></div>
                    <div class="text">Portland</div>
                </div>
                <div class="Southem-shadow" style="left:35%; bottom: 15%;" @click="handleToCase(1)">
                    <div class="dot"></div>
                    <div class="text">Southern California</div>
                </div>
                <div class="Southem-shadow" style="left:35.5%; bottom: 19%;" @click="handleToCase(2)">
                    <div class="dot"></div>
                    <!-- <div class="text">Southern California</div> -->
                </div>
            </section>
            <section class="case-content">
                <div class="case-item" ref="california1">
                    <div class="case-img">
                        <v-carousel show-arrows="hover" height="auto" cycle :interval="4500">
                            <v-carousel-item src="~/assets/image/nanjiazhou1-1.png" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou1-2.png" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou1-3.png" cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="case-info">
                        <div class="case-title">Southern California Equipment 1</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">PV Capacity</div>
                                <div class="case-desc-info">5.88 kWp </div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation Date</div>
                                <div class="case-desc-info">12/06/2024</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Battery</div>
                                <div class="case-desc-info">8.2 kWh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Extra Revenue Brought By AI</div>
                                <div class="case-desc-info">57.8%</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="case-item" ref="california2">
                    <div class="case-img">
                        <v-carousel show-arrows="hover" height="auto" cycle :interval="4500">
                            <v-carousel-item src="~/assets/image/nanjiazhou2-1.png" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou2-2.png" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou2-3.png" cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="case-info">
                        <div class="case-title">Southern California Equipment 2</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">PV Capacity</div>
                                <div class="case-desc-info">6.97 kWp </div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation Date</div>
                                <div class="case-desc-info">07/07/2025</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Battery</div>
                                <div class="case-desc-info">16.4 kWh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Extra Revenue Brought By AI</div>
                                <div class="case-desc-info">43.5%</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="case-item" ref="portland">
                    <div class="case-img">
                        <v-carousel height="auto" show-arrows="hover" cycle :interval="4500">
                            <v-carousel-item src="~/assets/image/potelan1-1.png" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/potelan1-2.png" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/potelan1-3.png" cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="case-info">
                        <div class="case-title">Portland</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">PV Capacity</div>
                                <div class="case-desc-info">7.38 kWp </div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation Date</div>
                                <div class="case-desc-info">07/22/2024</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Battery</div>
                                <div class="case-desc-info">8.2 kWh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Extra Revenue Brought By AI</div>
                                <div class="case-desc-info">97.0%</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        <div class="case-mobile only-mobile">
            <section class="case-content">
                <div class="case-item" ref="california1">
                    <div class="case-img">
                        <v-carousel height="auto" show-arrows cycle :interval="4500">
                            <v-carousel-item src="~/assets/image/nanjiazhou-mobile1-1.webp" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou-mobile1-2.webp" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou-mobile1-3.webp" cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="case-info">
                        <div class="case-title">Southern California Equipment 1</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">PV Capacity</div>
                                <div class="case-desc-info">5.88 kWp </div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation Date</div>
                                <div class="case-desc-info">12/06/2024</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Battery</div>
                                <div class="case-desc-info">8.2 kWh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Extra Revenue Brought By AI</div>
                                <div class="case-desc-info">57.8%</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="case-item" ref="california2">
                    <div class="case-img">
                        <v-carousel show-arrows="hover" height="auto" cycle :interval="4500">
                            <v-carousel-item src="~/assets/image/nanjiazhou-mobile2-1.webp" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou-mobile2-2.webp" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/nanjiazhou-mobile2-3.webp" cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="case-info">
                        <div class="case-title">Southern California Equipment 2</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">PV Capacity</div>
                                <div class="case-desc-info">6.97 kWp </div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation Date</div>
                                <div class="case-desc-info">07/07/2025</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Battery</div>
                                <div class="case-desc-info">16.4 kWh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Extra Revenue Brought By AI</div>
                                <div class="case-desc-info">43.5%</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="case-item" ref="portland">
                    <div class="case-img">
                        <v-carousel height="auto" show-arrows="hover" cycle :interval="4500">
                            <v-carousel-item src="~/assets/image/potelan-mobile1-1.webp" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/potelan-mobile1-2.webp" cover></v-carousel-item>
                            <v-carousel-item src="~/assets/image/potelan-mobile1-3.webp" cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="case-info">
                        <div class="case-title">Portland</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">PV Capacity</div>
                                <div class="case-desc-info">7.38 kWp </div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation Date</div>
                                <div class="case-desc-info">07/22/2024</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Battery</div>
                                <div class="case-desc-info">8.2 kWh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Extra Revenue Brought By AI</div>
                                <div class="case-desc-info">97.0%</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
// 无脚本逻辑
// 点击 Tab 滚动到对应模块（保留你的）
const portland = ref<HTMLElement | null>(null)
const california1 = ref<HTMLElement | null>(null)
const california2 = ref<HTMLElement | null>(null)
const sectionRefs = [portland, california1, california2]
function handleToCase(index: number) {
    const el = sectionRefs[index]?.value
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

definePageMeta({
    name: 'Case',
    title: 'Case'
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

.case {
    .case-pc {
        .case-header {
            height: 100vh;
            width: 100vw;
            position: relative;

            img {
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

            .case-header-title {
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
                font-size: fluid(16px, 54, 54);
                position: absolute;
                color: #FFFFFF;
                left: 50%;
                transform: translateX(-50%);
                top: fluid(16px, 200, 200);
                line-height: fluid(16px, 112, 112);
                text-align: left;
                font-style: normal;
            }

            /* 定位容器：点 + 文字（文字在下方） */
            .botelan-shadow {
                position: absolute;
                /* 把容器中心对齐到坐标处 */
                transform: translate(-50%, -50%);
                display: inline-flex;
                flex-direction: column;
                /* 垂直排列：上点下字 */
                align-items: center;
                /* 横向居中 */
                gap: 8px;
                /* 点与文字间距 */
                z-index: 2;
            }

            /* 点本体（含电波） */
            .dot {
                position: relative;
                /* 伪元素相对它定位 */
                cursor: pointer;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #2fc2bf;
                /* 中心点颜色 */
                box-shadow: 0 0 8px rgba(47, 194, 191, 0.8);

                /* 扩散电波 */
                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    /* 覆盖到点 */
                    border: 2px solid #2fc2bf;
                    /* 波纹颜色 */
                    border-radius: 50%;
                    opacity: 0.6;
                    animation: ripple 2.4s ease-out infinite;
                }

                &::after {
                    animation-delay: 0.8s;
                    /* 错峰开始，形成连续电波 */
                }
            }

            /* 下方文字 */
            .text {
                color: #fff;
                font-size: 16px;
                line-height: 1.2;
                text-align: center;
                white-space: nowrap;
                /* 单行：按需可删除 */
                /* 可选：半透明底增强可读性 */
                /* padding: 2px 6px; background: rgba(0,0,0,0.35); border-radius: 4px; */
            }

            .Southem-shadow {
                position: absolute;
                /* 把容器中心对齐到坐标处 */
                transform: translate(-50%, -50%);
                display: inline-flex;
                flex-direction: column;
                /* 垂直排列：上点下字 */
                align-items: center;
                /* 横向居中 */
                gap: 8px;
                /* 点与文字间距 */
                z-index: 2;
            }

            /* 波纹动画 */
            @keyframes ripple {
                0% {
                    transform: scale(1);
                    opacity: 0.6;
                }

                100% {
                    transform: scale(3.8);
                    /* 扩散范围，可调 */
                    opacity: 0;
                }
            }
        }

        .case-content {
            width: 100%;
            background: linear-gradient(180deg, #BFD4FF 0%, rgba(25, 58, 131, 0.7) 100%);
            padding: fluid(16px, 120, 120) 0;

            .case-item {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: 0 fluid(16px, 200, 200);
                margin-bottom: fluid(16px, 120, 120);
                scroll-margin-top: fluid(16px, 120, 120); // 自适应一点

                .case-img {
                    width: fluid(16px, 534, 534);
                    // height: fluid(16px, 466, 466);
                    // object-fit: fill;
                    // display: block;
                    margin-right: fluid(16px, 98, 98);
                }

                .case-info {
                    .case-title {
                        font-family: 'Poppins', sans-serif;
                        font-weight: 500;
                        font-size: fluid(16px, 40, 40);
                        color: #FFFFFF;
                        line-height: fluid(16px, 58, 58);
                        text-align: left;
                        font-style: normal;
                        margin-bottom: fluid(16px, 18, 18);
                    }

                    .case-desc-container {
                        display: flex;
                        flex-wrap: wrap; // ⭐ 允许换行
                        align-items: flex-start; // 可选，看你是否需要垂直居中

                        .case-desc::before {
                            content: " ";
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            display: block;
                            width: fluid(4px, 4, 4);
                            height: fluid(16px, 88, 88);
                            background: #2FC2BF;
                        }

                        .case-desc {
                            flex: 0 0 50%;
                            position: relative;
                            width: fluid(16px, 380, 380);
                            box-sizing: border-box;
                            padding-left: fluid(16px, 30, 30);
                            margin-bottom: fluid(16px, 27, 27);

                            .case-desc-label {
                                font-family: 'Poppins', sans-serif;
                                font-weight: 300;
                                font-size: fluid(16px, 28, 28);
                                color: #FFFFFF;
                                line-height: fluid(16px, 58, 58);
                                text-align: left;
                                font-style: normal;
                            }

                            .case-desc-info {
                                font-family: 'Poppins', sans-serif;
                                font-weight: 500;
                                font-size: fluid(16px, 36, 36);
                                color: #FFFFFF;
                                line-height: fluid(16px, 58, 58);
                                text-align: left;
                                font-style: normal;
                            }
                        }

                        .case-desc:last-child {
                            margin-bottom: 0;
                        }
                    }


                }
            }

            .case-item:last-child {
                margin-bottom: 0;
            }
        }


    }

    .case-mobile {
        padding-top: 3.75rem;

        .case-content {
            padding: 1.1875rem 1rem 0 1rem;
            width: 100%;
            background: linear-gradient(180deg, #0C245C 0%, #5372B4 48%, #274073 100%);

            .case-item {
                box-sizing: border-box;

                .case-img {
                    width: 100%;
                }

                .case-info {
                    padding-bottom: 2.3125rem;

                    .case-title {
                        font-family: 'Poppins', sans-serif;
                        font-weight: 600;
                        font-size: 1.125rem;
                        color: #FFFFFF;
                        line-height: 2.375rem;
                        text-align: left;
                        font-style: normal;
                        padding: 0.875rem 0 0.5rem 0;
                    }

                    .case-desc-container {
                        display: flex;
                        flex-wrap: wrap; // ⭐ 允许换行
                        align-items: flex-start; // 可选，看你是否需要垂直居中

                        .case-desc::before {
                            content: " ";
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            display: block;
                            width: 0.125rem;
                            height: 2.4375rem;
                            background: #2FC2BF;
                        }

                        .case-desc {
                            flex: 0 0 45%;
                            max-width: 45%;
                            position: relative;
                            box-sizing: border-box;
                            margin-bottom: 0.75rem;
                            padding-left: 0.75rem;

                            .case-desc-label {
                                font-family: 'Poppins', sans-serif;
                                font-weight: 300;
                                font-size: 0.75rem;
                                color: #FFFFFF;
                                line-height: 1.625rem;
                                text-align: left;
                                font-style: normal;
                            }

                            .case-desc-info {
                                font-family: 'Poppins', sans-serif;
                                font-weight: 600;
                                font-size: 1rem;
                                color: #FFFFFF;
                                line-height: 1.625rem;
                                text-align: left;
                                font-style: normal;
                            }
                        }

                        // 右列（第2、4、6...个）
                        .case-desc:nth-child(2n) {
                            flex: 0 0 55%;
                            max-width: 55%;
                        }

                        .case-desc:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }

            .case-item:last-child {
                margin-bottom: 0;
            }
        }
    }

}
</style>
<style lang="scss">
.case {
    .case-pc {
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