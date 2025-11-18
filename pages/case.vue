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
                    <div class="text">Southem California</div>
                </div>
                <!-- 如需多个点，复制一份并改坐标与文本 -->
                <!--
          <div class="botelan-shadow" style="left: 62%; top: 48%;">
            <div class="dot"></div>
            <div class="text">另一个点</div>
          </div>
          -->
            </section>
            <section class="case-content">
                <div class="case-item" ref="portland">
                    <img class="case-img" src="../assets/image/case-house.webp" alt="">
                    <div class="case-info">
                        <div class="case-title">Southem California</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">Specification</div>
                                <div class="case-desc-info">9KW</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation time</div>
                                <div class="case-desc-info">2025-10-30</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Electricity generation</div>
                                <div class="case-desc-info">1320kwh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">AI benefits</div>
                                <div class="case-desc-info">10000</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Increased revenue</div>
                                <div class="case-desc-info">35%</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="case-item" ref="california">
                    <img class="case-img" src="../assets/image/case-house.webp" alt="">
                    <div class="case-info">
                        <div class="case-title">Portland</div>
                        <div class="case-desc-container">
                            <div class="case-desc">
                                <div class="case-desc-label">Specification</div>
                                <div class="case-desc-info">9KW</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Installation time</div>
                                <div class="case-desc-info">2025-10-30</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Electricity generation</div>
                                <div class="case-desc-info">1320kwh</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">AI benefits</div>
                                <div class="case-desc-info">10000</div>
                            </div>
                            <div class="case-desc">
                                <div class="case-desc-label">Increased revenue</div>
                                <div class="case-desc-info">35%</div>
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
const california = ref<HTMLElement | null>(null)
const sectionRefs = [portland, california]
function handleToCase(index: number) {
    const el = sectionRefs[index]?.value
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                font-weight: 300;
                font-size: fluid(16px, 80, 80);
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
                .case-img {
                    width: fluid(16px, 734, 734);
                    height: fluid(16px, 466, 466);
                    object-fit: fill;
                    display: block;
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
            .case-item:last-child{
                margin-bottom: 0;
            }
        }
    }
}
</style>
  