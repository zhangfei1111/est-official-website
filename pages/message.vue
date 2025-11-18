<template>
    <div class="message">
        <div class="message-pc only-desktop">
            <div class="message-title">Contact Us</div>
            <div class="message-content">
                <v-form fast-fail @submit.prevent>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="firstName" :rules="firstNameRules" label="First name"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="lastName" :rules="lastNameRules" label="Last name"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="email" :rules="emailRules" label="Email"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="address" :rules="addressRules" label="Address"></v-text-field>
                            </v-col>

                        </v-row>
                    </v-container>
                    <v-row>
                        <v-col cols="12" md="3" style="margin: 0 auto;">
                            <v-btn color="#02B5B1" width="300" type="submit" size="x-large" block>Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'no-scroll-nav'   // 对应 layouts/app.vue
})
import { onMounted, ref, onUnmounted, nextTick } from 'vue'
const firstName = ref('')
const firstNameRules = [
    value => {
        if (value?.length >= 3) return true
        return 'First name must be at least 3 characters.'
    },
]

const lastName = ref('')
const lastNameRules = [
    value => {
        if (/[^0-9]/.test(value)) return true
        return 'Last name can not contain digits.'
    },
]
const email = ref('')
const emailRules = [
    value => {
        if (/[^0-9]/.test(value)) return true
        return 'Last name can not contain digits.'
    },
]
const address = ref('')
const addressRules = [
    value => {
        if (/[^0-9]/.test(value)) return true
        return 'Last name can not contain digits.'
    },
]

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

.message {
    .message-pc {
        background: #EEEEEE;
        box-sizing: border-box;
        min-height: 100vh;
        padding-bottom: fluid(16px, 142, 142);

        .message-title {
            padding-top: fluid(16px, 118, 118);
            padding-bottom: fluid(16px, 40, 40);
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: fluid(16px, 74, 74);
            color: #222222;
            line-height: fluid(16px, 103, 103);
            text-align: center;
            font-style: normal;
        }

        .message-content {
            border-top: fluid(1px, 10, 10) solid #2FC2BF;
            margin: 0 fluid(16px, 210, 210);
            background: #fff;
            border-radius: fluid(8px, 16, 16);
            box-sizing: border-box;
            padding: fluid(16px, 80, 80);
        }
    }
}
</style>