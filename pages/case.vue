<template>
    <div class="case">
        <div class="case-pc only-desktop">
            <section class="case-header">
                <img src="../assets/image/case-header.png" alt="map" />

                <!-- 坐标点（示例）：把 left/top 改成你的坐标即可 -->
                <div class="botelan-shadow" style="left: 33%; bottom: 32%;">
                    <div class="dot"></div>
                    <div class="text">Portland</div>
                </div>
                <div class="Southem-shadow" style="left:35%; bottom: 15%;">
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
        </div>
    </div>
</template>
  
<script lang="ts" setup>
// 无脚本逻辑
</script>
  
<style scoped lang="scss">
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
    }
}</style>
  