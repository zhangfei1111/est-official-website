<template>
    <div class="product">
        <div class="product-pc only-desktop">
            <section class="product-introduce-section">
                <video ref="homeIntroduceRef" class="product-introduce-video" autoplay muted playsinline loop preload="auto"
                    controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
                    src="../assets/video/product-introduce.mp4"></video>
            </section>
            <section class="product-ai-section">
                <div class="product-ai-introduce">
                    <div class="product-ai-title">AI Strategy</div>
                    <div class="product-ai-desc">SolarAI collects the latest data and recalculates the strategy every 15
                        minutes.</div>
                </div>
                <div class="product-ai-video">
                    <video ref="homeIntroduceRef" class="product-ai-video" autoplay muted playsinline loop preload="auto"
                        controlslist="nodownload noplaybackrate noremoteplayback" disablepictureinpicture
                        src="../assets/video/product-ai.mp4"></video>
                </div>


            </section>
            <section class="product-clean-section">
                <img class="product-clean-bg" src="../assets/image/product-clean-bg.webp" alt="">
                <div class="product-clean-content">
                    <div class="product-clean-title">Cleanliness monitoring; timely cleaning saves money.</div>
                    <div class="product-clean-desc">
                        SolarAI continuously monitors the cleanliness and power generation deviation of photovoltaic
                        modules. When it identifies substantial losses caused by dust, pollen, bird droppings, etc., it
                        proactively alerts users to the need for cleaning and provides an estimated return on investment and
                        payback period. This avoids wasted cleaning and allows for timely adjustments to restore power
                        output to ideal levels.
                    </div>
                </div>
            </section>
        </div>


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

.product {
    .product-pc {
        .product-introduce-section {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;

            .product-introduce-video {
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
        }

        .product-ai-section {
            width: 100%;
            height: 100vh;
            background: #C8DAEB;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            padding: fluid(16px, 122, 122) fluid(16px, 108, 108) fluid(16px, 124, 124) fluid(16px, 146, 146);

            .product-ai-introduce {
                margin-right: fluid(16px, 75, 75);

                .product-ai-title {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: fluid(16px, 52, 52);
                    color: #222222;
                    line-height: fluid(16px, 73, 73);
                    text-align: left;
                    font-style: normal;
                }

                .product-ai-desc {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 300;
                    font-size: fluid(16px, 28, 28);
                    color: #222222;
                    line-height: fluid(16px, 47, 47);
                    text-align: justify;
                    font-style: normal;
                    margin-top: fluid(16px, 36, 36);
                }

            }

            .product-ai-video {

                .product-ai-video {
                    display: block;
                    width: fluid(16px, 1106, 1106);
                    height: fluid(16px, 836, 836);
                    object-fit: cover;
                    /* 等比例，不变形 */
                    object-position: center;

                }
            }
        }

        .product-clean-section {
            width: 100%;
            height: 100vh;
            position: relative;

            .product-clean-bg {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: fill;
            }

            .product-clean-content {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: fluid(16px, 166, 166);
                padding: fluid(16px, 56, 56);
                background: rgba(255, 255, 255, 0.62);
                border-radius: fluid(2px, 4, 4);
                box-sizing: border-box;
                width: fluid(16px, 804, 804);

                .product-clean-title {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: fluid(16px, 52, 52);
                    color: #222222;
                    line-height: fluid(16px, 73, 73);
                    text-align: left;
                    font-style: normal;
                }

                .product-clean-desc {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 300;
                    font-size: fluid(16px, 28, 28);
                    color: #222222;
                    line-height: fluid(16px, 47, 47);
                    font-style: normal;
                }
            }
        }
    }
}
</style>