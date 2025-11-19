<template>
    <div class="message">
        <div class="message-pc only-desktop">
            <div class="message-title">Contact Us</div>
            <div class="message-content">
                <v-form fast-fail @submit.prevent="handleSubmit" ref="formRef">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="firstName" variant="solo" :rules="firstNameRules"
                                    label="First name"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="lastName" variant="solo" :rules="lastNameRules"
                                    label="Last name"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="email" variant="solo" :rules="emailRules"
                                    label="Email"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="phone" variant="solo" :rules="phoneRules"
                                    label="Phone"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="address" variant="solo" :rules="addressRules"
                                    label="Address"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                                <v-textarea v-model="content" variant="solo" label="Message"></v-textarea>
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
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000" location="top right">
        {{ snackbar.text }}

        <template #actions>
            <v-btn variant="text" @click="snackbar.show = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">

import { onMounted, ref, onUnmounted, nextTick } from 'vue'
const nuxtApp = useNuxtApp()
const api = nuxtApp.$api as import('axios').AxiosInstance

const formRef = ref<any>(null)
const snackbar = ref({
    show: false,
    text: '',
    color: 'success', // success / error / info / warning
})

const handleSubmit = async () => {
    // 先校验表单
    const result = await formRef.value?.validate()
    if (!result?.valid) return
    try {
        const { data } = await api.post('/api/user/website/lead/add', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            content: content.value
        })
        if (data.status === '0') {
            snackbar.value = {
                show: true,
                text: 'Submitted successfully!',
                color: 'success',
            }
        } else {
            snackbar.value = {
                show: true,
                text: 'Submitted Error!',
                color: 'error',
            }
        }
        console.log(data, '22')
    } catch (err) {
        snackbar.value = {
            show: true,
            text: 'Submitted Error!',
            color: 'error',
        }
        console.error('接口调用失败', err)
    }
}
const firstName = ref('')
const content = ref('')
const firstNameRules = [
    value => {
        if (value?.length >= 3) return true
        return 'First name must be at least 3 characters.'
    },
]

const lastName = ref('')
const lastNameRules = [
    value => {
        if (value?.length >= 3) return true
        return 'Last name must be at least 3 characters.'
    },
]
const email = ref('')
const emailRules = [
    (value: string) => {
        if (!value) return 'Email is required.'

        const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

        if (pattern.test(value)) return true
        return 'Please enter a valid email.'
    },
]

const address = ref('')
const addressRules = [
    value => {
        if (value?.length >= 3) return true
        return 'Adress must be at least 3 characters.'
    },
]
const phone = ref('')
const phoneRules = [
    (value: string) => {
        if (!value) return 'Phone number is required.'

        // 支持这些格式：
        // 1234567890
        // 123-456-7890
        // (123) 456-7890
        // 123 456 7890
        // +1 123 456 7890
        const pattern = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/

        return pattern.test(value) || 'Please enter a valid US phone number.'
    },
]
definePageMeta({
    name: 'Message',
    title: 'Message',
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