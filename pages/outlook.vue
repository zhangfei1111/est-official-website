<template>
    <div class="outlook-pc only-desktop">
        <section class="outlook-header-section">
            <img class="outlook-header-section-bg" src="~/assets/image/outlook-header-bg.webp" alt="">
            <div class="outlook-header-section-content">
                <div class="outlook-header-section-title">Grid Collaboration (VPP / DR / Market Services)</div>
                <div class="outlook-header-section-desc">
                    Through AI technology, SolarAI connects thousands of residential solar-plus-storage systems into
                    intelligent Distributed Energy Resources (iDERs). This reduces the "noise" and volatility that
                    renewables bring to the grid, balancing fluctuations and enabling a smarter, more flexible, and more
                    stable power system for the future.
                </div>
            </div>
        </section>
        <section class="cooperation-section">
            <div class="cooperation-section-title">Cooperation Partners</div>
            <div class="cooperation-section-content">
                <div class="cooperation-item"><img src="~/assets/image/alpha-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/tigo-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/tesla-logo.webp" alt=""></div>
                <div class="cooperation-item"><img src="~/assets/image/google-nest-logo.webp" alt=""></div>
            </div>
        </section>
        <section class="footer-section">
            <img class="footer-bg" src="~/assets/image/outlook-footer-bg.webp" alt="">
        </section>
    </div>
</template>

<script setup lang="ts"></script>

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

.outlook-pc {
    background: #F9F9F9;

    .outlook-header-section {
        width: 100%;
        height: 100vh;
        position: relative;

        .outlook-header-section-bg {
            width: 100%;
            height: 100%;
            display: block;
        }

        .outlook-header-section-content {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - fluid(16px, 420, 420));
            padding: fluid(16px, 20, 20) fluid(16px, 40, 40);
            background: #2C8A85;

            .outlook-header-section-title {
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: fluid(16px, 54, 54);
                color: #FFFFFF;
                line-height: fluid(16px, 75, 75);
                text-align: center;
                font-style: normal;
            }

            .outlook-header-section-desc {
                font-family: 'Poppins', sans-serif;
                font-weight: 100;
                font-size: fluid(16px, 28, 28);
                color: #FFFFFF;
                line-height: fluid(16px, 40, 40);
                text-align: left;
                font-style: normal;
            }
        }
    }

    .cooperation-section {
        .cooperation-section-title {
            margin: fluid(16px, 80, 80);
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: fluid(16px, 64, 64);
            color: #222222;
            line-height: fluid(16px, 90, 90);
            text-align: center;
            font-style: normal;
        }

        .cooperation-section-content {
            display: flex;
            align-items: center;
            align-items: center;
            padding: 0 fluid(16px, 210, 210);

            .cooperation-item {
                flex: 1;

                img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
            }
        }
    }

    .footer-section {
        margin-top: fluid(16px, 24, 24);

        .footer-bg {
            width: 100%;
            display: block;
        }
    }
}
</style>